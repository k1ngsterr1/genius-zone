import { useState, useCallback } from "react";

type ModuleType = {
  id: string;
};

export const useAddNewModule = () => {
  const [modules, setModules] = useState<ModuleType[]>([]);

  const addNewModule = useCallback(() => {
    const newModule: ModuleType = {
      id: `module-${modules.length + 1}`,
    };
    setModules((prevModules) => [...prevModules, newModule]);
  }, [modules, setModules]);

  return { modules, addNewModule };
};
