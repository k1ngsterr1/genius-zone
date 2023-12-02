import { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SchoolIcon from "@mui/icons-material/School";
import BookIcon from "@mui/icons-material/Book";
import { UtilityButton } from "@shared/ui/UtilityButton";
import { UserProfile } from "@shared/ui/UserProfile";

import "./styles.scss";

export const CreateCourseSide = () => {
  const [isActive, setIsActive] = useState();

  return (
    <aside className="course-edit-side sticky top-20">
      <UserProfile />
      <UtilityButton
        text="Новый курс"
        type="outline-btn"
        marginTop="mt-8"
        onClick={() => console.log("click")}
      />
      <ListItem
        button
        // onClick={handleClick}
        className="course-edit-side__course-btn"
        TouchRippleProps={{
          style: {
            color: "blue",
          },
        }}
      >
        <ListItemIcon>
          <SchoolIcon className="course-side__icon" />
        </ListItemIcon>
        <ListItemText primary="Курсы" />
      </ListItem>

      <ListItem
        button
        className="course-edit-side__lessons-btn"
        TouchRippleProps={{
          style: {
            color: "blue",
          },
        }}
      >
        <ListItemIcon>
          <BookIcon className="course-edit-side__icon" />
        </ListItemIcon>
        <ListItemText primary="Уроки" />
      </ListItem>
    </aside>
  );
};
