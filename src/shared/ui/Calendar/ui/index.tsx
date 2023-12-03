import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function BasicDatePicker() {
  const [value, setValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        open={open}
        className="mt-8"
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          setOpen(false);
        }}
      />
      <Button onClick={() => setOpen(true)}>Открыть календарь</Button>
    </LocalizationProvider>
  );
}
