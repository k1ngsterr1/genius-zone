// NewCourse.jsx
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { KebabMenu } from "@shared/ui/KebabMenu";
import useDeleteCourse from "@shared/lib/hooks/useDeleteCourse";

import "./styles.scss";

interface NewCourseProps {
  id: string;
  title: string;
  image: string;
  description: string;
  onDelete: (id: string) => void;
}

export const NewCourse: React.FC<NewCourseProps> = ({
  id,
  title,
  image,
  description,
  onDelete,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const deleteCourse = useDeleteCourse(id);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = async () => {
    await deleteCourse();
    setAnchorEl(null);
    onDelete(id);
    console.log("id:", id);
  };

  return (
    <div className="new-course flex justify-between items-center" id={`${id}`}>
      <img src={image} className="new-course__image" alt={title} />
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
          <KebabMenu
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            onCourseDelete={handleDelete}
          />
        </div>
        <p className="new-course__description w-[60%]">{description}</p>
      </div>
    </div>
  );
};
