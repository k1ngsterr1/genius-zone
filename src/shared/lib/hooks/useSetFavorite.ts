import { useState } from "react";

export const useSetFavorite = () => {
  const [isFavorite, setFavorite] = useState(false);

  const addFavorite = () => {
    setFavorite(!isFavorite);
  };

  return {
    isFavorite,
    addFavorite,
  };
};
