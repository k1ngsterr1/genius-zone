// KebabMenu.jsx
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface KebabMenuProps {
  anchorEl: any;
  setAnchorEl: any;
}

export const KebabMenu: React.FC<KebabMenuProps> = ({
  anchorEl,
  setAnchorEl,
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
      <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      <MenuItem onClick={handleClose}>Удалить</MenuItem>
    </Menu>
  );
};
