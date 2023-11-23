import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FavoriteButtonProps {
  type: string;
  onClick: () => void;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  onClick,
  type,
}) => {
  return (
    <>
      <FontAwesomeIcon
        onClick={onClick}
        icon={faStar}
        className={`star-icon--${type}`}
      />
    </>
  );
};
