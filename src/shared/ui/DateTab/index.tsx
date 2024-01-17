import React from "react";

import "./styles.scss";

interface DateTabProps {
  date: string;
}

export const DateTab: React.FC<DateTabProps> = ({ date }) => {
  return <div className="date_tab">{date}</div>;
};
