import { NewModule } from "@features/NewModule";
import { useState, useCallback } from "react";

type ModuleType = {
  id: string;
  title: string;
  isEditing: boolean;
};

export const useAddNewModule = () => {
  const [moduleElements, setModules] = useState<ModuleType[]>([]);

  const addNewModule = useCallback(() => {
    const newModule: ModuleType = {
      id: `module-${moduleElements.length + 1}`,
      title: `Module ${moduleElements.length + 1}`,
      isEditing: true,
    };
    setModules((prevModules) => [...prevModules, newModule]);
  }, [moduleElements]);

  const updateModules = (newModulesData: any) => {
    setModules(newModulesData);
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
