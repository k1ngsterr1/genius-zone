import { useState, useCallback } from "react";
import { useSaveModule, ModuleData } from "./useSaveModule";

type ModuleType = {
  id: string;
  title: string;
  isEditing: boolean;
  finished: boolean;
  module_title?: string;
  module_num?: any;
  module_description?: string;
};

export const useAddNewModule = () => {
  const [moduleElements, setModules] = useState<ModuleType[]>([]);

  const addNewModule = useCallback(() => {
    const newModule: ModuleType = {
      id: `module-${moduleElements.length + 1}`,
      title: `Module ${moduleElements.length + 1}`,
      isEditing: true,
      finished: false,
      module_title: "",
      module_num: moduleElements.length,
      module_description: "",
    };
    setModules((prevModules) => [...prevModules, newModule]);
  }, [moduleElements]);

  const { saveModule: apiSaveModule } = useSaveModule();

  const saveModule = async (
    moduleId: string,
    courseID: string,
    moduleData: ModuleData
  ) => {
    try {
      await apiSaveModule(moduleData, courseID);
      setModules((prevModules) =>
        prevModules.map((module) =>
          module.id === moduleId
            ? { ...module, isEditing: false, finished: true }
            : module
        )
      );
    } catch (error) {
      console.error("Error saving module:", error);
    }
  };

  const updateModules = (newModulesData: any[]) => {
    const transformedModules = newModulesData.map((mod) => ({
      ...mod,
      id: `module-${mod.module_num}`,
      title: mod.module_title,
      isEditing: false,
      finished: true,
      module_title: mod.module_title,
      module_number: mod.module_number,
      module_description: mod.module_description,
    }));
    setModules(transformedModules);
  };

  const cancelNewModule = useCallback(
    (moduleId: string) => {
      setModules((prevModules) =>
        prevModules.filter((module) => module.id !== moduleId)
      );
    },
    [moduleElements]
  );

  const toggleEditModule = useCallback(
    (moduleId: string) => {
      setModules((prevModules) =>
        prevModules.map((module) =>
          module.id === moduleId
            ? { ...module, isEditing: !module.isEditing }
            : module
        )
      );
    },
    [moduleElements]
  );

  return {
    moduleElements,
    addNewModule,
    saveModule,
    cancelNewModule,
    updateModules,
    toggleEditModule,
  };
};
