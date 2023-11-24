import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as OutlineStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSetFavorite } from "@shared/lib/hooks/useSetFavorite";

import "./styles.scss";

interface FavoriteButtonProps {
  type: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ type }) => {
  const { isFavorite, addFavorite } = useSetFavorite();

  return (
    <>
      <FontAwesomeIcon
        onClick={addFavorite}
        icon={isFavorite ? faStar : OutlineStar}
        className={`star-icon ${isFavorite ? "active" : ""} cursor-pointer`}
      />
    </>
  );
};
