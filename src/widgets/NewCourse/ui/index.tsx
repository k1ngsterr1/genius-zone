// NewCourse.jsx
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { KebabMenu } from "@shared/ui/KebabMenu";
import newImage from "@assets/cpp.jpg";

import "./styles.scss";

interface NewCourseProps {
  title: string;
  image: string;
  description: string;
}

export const NewCourse: React.FC<NewCourseProps> = ({
  title,
  image,
  description,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="new-course flex justify-between items-center">
      <img src={newImage} className="new-course__image" alt={title} />
      <div className="new-course__content flex flex-column items-start ml-8">
        <div className="new-course__content__title-container flex items-center justify-between">
          <h1 className="new-course__content__title-container__title">
            {title}
          </h1>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <KebabMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </div>
        <p className="new-course__description w-[60%]">{description}</p>
      </div>
    </div>
  );
};