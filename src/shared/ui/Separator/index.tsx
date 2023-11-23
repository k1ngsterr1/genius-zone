import React from "react";

import "./styles.scss";

interface SeparatorProps {
  width: string;
  marginTop: string;
}

export const Separator: React.FC<SeparatorProps> = ({ width, marginTop }) => {
  return <hr className={`horizontal-separator ${width} ${marginTop}`} />;
};
