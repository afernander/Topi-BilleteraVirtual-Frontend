import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Input({ label, text, type, id }) {
  return (
    <Box
      component="div"
      sx={{
        "& .MuiTextField-root": { marginTop: "10px", width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        fullWidth
        helperText={text}
        id={id}
        label={label}
        sx={{ width: "100%" }}
        size="small"
        type={type}
      />
    </Box>
  );
}
