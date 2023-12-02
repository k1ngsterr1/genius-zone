import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import "./styles.scss";

const SearchInput = () => {
  return (
    <TextField
      className="search-input"
      variant="outlined"
      placeholder="Найдите курс"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        height: 40,
        ".MuiOutlinedInput-root": {
          height: "100%",
          alignItems: "center",
        },
      }}
    />
  );
};

export default SearchInput;
