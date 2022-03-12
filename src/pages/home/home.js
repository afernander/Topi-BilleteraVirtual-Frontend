import React from "react";
import Styles from "./home.module.scss";
import { Image } from "mui-image";
import { Text } from "../../components/text/text";
import BasicDatePicker from "../../components/date/date";
import Input from "../../components/input/input";
import { MainButton } from "../../components/general/main-button";
import { Form } from "../../components/login/form";

const Home = () => {
  const homeImage = require("../../images/home-image.png");
  const logo = require("../../images/home-pig.png");
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
          <MainButton> Iniciar Sesión </MainButton>
        </Form>
      </div>
    </div>
  );
};

export { Home };
