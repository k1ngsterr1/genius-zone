import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface KebabMenuProps {
  anchorEl: any;
  setAnchorEl: any;
  editButton: () => void;
  onCourseDelete: () => void;
}

export const KebabMenu: React.FC<KebabMenuProps> = ({
  anchorEl,
  setAnchorEl,
  editButton,
  onCourseDelete,
}) => {
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
      id="long-menu"
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <MenuItem onClick={editButton}>Редактировать</MenuItem>
      <MenuItem onClick={onCourseDelete}>Удалить</MenuItem>
    </Menu>
  );
};
