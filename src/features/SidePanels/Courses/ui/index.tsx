import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import SchoolIcon from "@mui/icons-material/School";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { UtilityButton } from "@shared/ui/UtilityButton";
import { UserProfile } from "@shared/ui/UserProfile";

import "./styles.scss";

export const CoursesAside = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <aside className="course-side-tab sticky top-20">
      <UserProfile />
      <UtilityButton
        text="Создать курс"
        type="outline-btn"
        marginTop="mt-8"
        onClick={() => console.log("click")}
      />
      <ListItem
        button
        onClick={handleClick}
        className={`course-side-tab__course-btn${open ? "--active" : ""}`}
        TouchRippleProps={{
          style: {
            color: "blue",
          },
        }}
      >
        <ListItemIcon>
          <SchoolIcon
            className={`course-side-tab__icon${open ? "--active" : ""}`}
          />
        </ListItemIcon>
        <ListItemText primary="Курсы" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            sx={{ pl: 4 }}
            className={`course-side-tab__list-item`}
            TouchRippleProps={{
              style: {
                color: "#CFD4FB",
              },
            }}
          >
            <ListItemText primary="Все курсы" />
          </ListItem>
          <ListItem
            button
            sx={{ pl: 4 }}
            className={`course-side-tab__list-item`}
            TouchRippleProps={{
              style: {
                color: "#CFD4FB",
              },
            }}
          >
            <ListItemText primary="Прохожу" />
          </ListItem>
          <ListItem
            button
            sx={{ pl: 4 }}
            className={`course-side-tab__list-item`}
            TouchRippleProps={{
              style: {
                color: "#CFD4FB",
              },
            }}
          >
            <ListItemText primary="Избранные" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem
        button
        className="course-side-tab__notification-btn"
        TouchRippleProps={{
          style: {
            color: "blue",
          },
        }}
      >
        <ListItemIcon>
          <NotificationsActiveIcon className="course-side-tab__icon" />
        </ListItemIcon>
        <ListItemText primary="Уведомления" />
      </ListItem>
    </aside>
  );
};
