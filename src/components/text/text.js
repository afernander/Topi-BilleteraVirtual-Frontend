import React from "react";
import Typography from "@mui/material/Typography";

function Text(props) {
  const styles = {
    color: props.color,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    textAlign: props.textAlign,
    margin: props.margin,
    padding: props.padding,
  };

  return <Typography sx={styles} {...props} > {props.children} </Typography>;
}

export { Text };
