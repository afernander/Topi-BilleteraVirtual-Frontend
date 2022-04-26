import React from "react";

import Styles from "./form.module.scss";


function Form(props) {
  return (
    <form  {...props} className={Styles.form}>
      {props.children}
    </form>
  );
}

export { Form };
