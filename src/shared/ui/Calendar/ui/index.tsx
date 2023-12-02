import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function ResponsiveDatePicker() {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={["day"]}
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
        renderInput={(params: any) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
