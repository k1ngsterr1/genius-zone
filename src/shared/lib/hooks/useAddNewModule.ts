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

  return {
    moduleElements,
    addNewModule,
  };
};
