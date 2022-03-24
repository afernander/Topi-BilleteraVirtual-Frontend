import React from "react";
import Styles from "./register.module.scss";
import { Image } from "mui-image";
import { Text } from "../../../components/text/text";
import BasicDatePicker from "../../../components/date/date";
import Input from "../../../components/input/input";
import { MainButton } from "../../../components/general/button/main-button";
import { Form } from "../../../components/login/form";
import Link from '@mui/material/Link';

function Register  ()  {
  const homeImage = require("../../../images/home-image.png");
  const logo = require("../../../images/home-pig.png");

  return (
    <div className={Styles.homeGrid}>
      <div className={Styles.homeGrid__imgWrapper}>
        <Image src={homeImage}/>
      </div>
      <div className={Styles.homeGrid__formWrapper}>
        <div className={Styles.logo}>
          <div className={Styles.logo__imgWrapper}>
            <Image src={logo} />
          </div>
          <Text className={Styles.logo__text}>Bienvenido a T-U</Text>
        </div>
        <Form method="post" action="">
          <BasicDatePicker id="date" />

          <Input id="name" label="Nombre" />
          <Input id="lastName" label="Apellido" />

          <Input
            id="email"
            label="Correo"
            text="Puedes usar letras, números y signos de puntuación"
            type="email"
          />

          <Input id="pwd" label="Contraseña" type="password" />
          <Input
            id="pwdc"
            label="Confirmar Contraseña"
            type="password"
            text="Usa 8 o más caracteres"
          />
          <MainButton> Registrar </MainButton>
          <div className={Styles.alreadyAccount} >
            <Text color="#536471" fontSize = "15px" >¿Ya tienes una cuenta?</Text>
            <Link href="/ingresar" variant="body2">
              Inicia Sesión
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export { Register };
