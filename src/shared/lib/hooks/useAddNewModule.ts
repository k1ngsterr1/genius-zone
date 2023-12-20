import { NewModule } from "@features/NewModule";
import { useState, useCallback } from "react";

type ModuleType = {
  id: string;
  title: string;
};

export const useAddNewModule = () => {
  const [moduleElements, setModules] = useState<ModuleType[]>([]);

  const addNewModule = useCallback(() => {
    const newModule: ModuleType = {
      id: `module-${moduleElements.length + 1}`,
      title: `Module ${moduleElements.length + 1}`,
    };
    setModules((prevModules) => [...prevModules, newModule]);
  }, [moduleElements]);

  const cancelNewModule = useCallback(
    (moduleId: string | number) => {
      setModules((prevModules) =>
        prevModules.filter((module) => module.id !== moduleId)
      );
      console.log("deleted:", moduleId, module.id);
    },
    [moduleElements]
  );

  return { moduleElements, addNewModule, cancelNewModule };
};
