import { useState, useCallback } from "react";

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

  const updateModuleElements = (newModules: any) => {
    setModules(newModules);
  };

  return {
    moduleElements,
    addNewModule,
    updateModuleElements,
  };
};
