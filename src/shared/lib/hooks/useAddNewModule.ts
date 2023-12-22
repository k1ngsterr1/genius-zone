import { NewModule } from "@features/NewModule";
import { useState, useCallback } from "react";

type ModuleType = {
  id: string;
  title: string;
  isEditing: boolean;
  finished: boolean;
  module_title?: string;
  module_number?: any;
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
      module_number: moduleElements.length + 1,
      module_description: "",
    };
    setModules((prevModules) => [...prevModules, newModule]);
  }, [moduleElements]);

  const saveModule = (moduleId: string) => {
    setModules((prevModules) =>
      prevModules.map((module) =>
        module.id === moduleId
          ? { ...module, isEditing: false, finished: true }
          : module
      )
    );
  };

  const updateModules = (newModulesData: any[]) => {
    const transformedModules = newModulesData.map((mod) => ({
      ...mod,
      id: `module-${mod.module_num}`,
      title: mod.module_title,
      isEditing: false,
      finished: true, // or some logic to determine if it's finished
      // Make sure to assign all required properties here
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
    cancelNewModule,
    updateModules,
    toggleEditModule,
  };
};
