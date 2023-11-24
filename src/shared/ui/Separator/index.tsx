import React from "react";

import "./styles.scss";

interface SeparatorProps {
  width: string;
  margin: string;
  color: string;
}

export const Separator: React.FC<SeparatorProps> = ({
  width,
  margin,
  color,
}) => {
  return <hr className={`horizontal-separator ${width} ${margin}`} />;
};
