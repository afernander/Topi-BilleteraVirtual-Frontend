import React, { useState } from "react";
import Styles from "./login.module.scss";
import { Image } from "mui-image";
import { Text } from "../../../components/text/text";
import Input from "../../../components/input/input";
import { MainButton } from "../../../components/general/button/main-button";
import { Form } from "../../../components/login/form";
import Link from "@mui/material/Link";

function Login() {
  const homeImage = require("../../../images/home-image.png");
  const logo = require("../../../images/home-pig.png");

  const [body, setBody] = useState({
    email: "",
    password: "",
  });

  const { email, password } = body;

  const handleChange = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    })
  };

  const onSubmit = ( e ) => {
    console.log(body);
    e.preventDefault();
  };

  return (
    <div className={Styles.homeGrid}>
      <div className={Styles.homeGrid__imgWrapper}>
        <Image src={homeImage} />
      </div>
      <div className={Styles.homeGrid__formWrapper}>
        <div className={Styles.logo}>
          <div className={Styles.logo__imgWrapper}>
            <Image src={logo} />
          </div>
          <Text className={Styles.logo__text}>Bienvenido a T-U</Text>
        </div>
        <Form onSubmit={ onSubmit } >
          <Input
            name="email"
            label="Correo"
            type="email"
            value={email}
            onChange={handleChange}
          />

          <Input
            name="password"
            label="Contraseña"
            type="password"
            value={password}
            onChange={handleChange}
          />
          <MainButton> Iniciar Sesión </MainButton>
          <div className={Styles.notAccount}>
            <Text color="#536471" fontSize="15px">
              ¿No tienes una cuenta?
            </Text>
            <Link href="/registro" variant="body2">
              Registrate
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export { Login };
