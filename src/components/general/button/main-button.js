import React from "react";
import { Button } from "@mui/material";

function MainButton(props) {
  const styles = {
    marginTop: "0.7rem",
    marginBotton: ".2rem",
    padding: "0.5rem 1rem",
    width: props.width,
    fontWeight: props.fontWeight,
  };

  return (
    <Button
      href={props.hfer}
      variant="contained"
      color="primary"
      sx={styles}
      {...props}
    >
      {props.children}
    </Button>
  );
}

export { MainButton };
