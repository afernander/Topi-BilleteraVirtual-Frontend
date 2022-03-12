import React from "react";

import Styles from "./form.module.scss";


function Form(props) {
  return (
    <form className={Styles.form} action={props.type} method={props.method} >
      {props.children}
    </form>
  );
}

export { Form };
