import { useState, useCallback } from "react";

type ModuleType = {
  id: string;
  title: string;
};

export const useAddNewModule = () => {
  const [modules, setModules] = useState<ModuleType[]>([]);

  const addNewModule = useCallback(() => {
    const newModule: ModuleType = {
      id: `module-${modules.length + 1}`,
      title: `Module ${modules.length + 1}`, // Generate a title based on the length of the modules array
    };
    setModules((prevModules) => [...prevModules, newModule]);
  }, [modules]);

  return { modules, addNewModule };
};
