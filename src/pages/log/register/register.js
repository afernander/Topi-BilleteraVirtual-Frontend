import React, { useState } from "react";
import Styles from "./register.module.scss";
import { Image } from "mui-image";
import { Text } from "../../../components/text/text";
import BasicDatePicker from "../../../components/date/date";
import Input from "../../../components/input/input";
import { MainButton } from "../../../components/general/button/main-button";
import { Form } from "../../../components/login/form";
import Link from "@mui/material/Link";

function Register() {
  const homeImage = require("../../../images/home-image.png");
  const logo = require("../../../images/home-pig.png");

  const [body, setBody] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: null,
  });

  const { name, lastName, email, password, confirmPassword, birthDate } = body;

  const submit = (submit2) => {
    submit2.preventDefault();
    fetch("http://localhost:5000/users/signup", {
      mode: "no-cors",
      method: "POST",
      body: JSON.stringify({ body }),
    })
      .then((res) => res.json())
      .then((json) => setBody(json.body));
  };

  const handleChange = (submit2) => {
    setBody({
      ...body,
      [submit2.target.name]: submit2.target.value,
    });
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
        <Form method="post" action="" onSubmit={submit}>
          <BasicDatePicker
            name="birthDate"
            value={birthDate}
            onChange={(newValue) =>
              setBody({
                ...body,
                birthDate: newValue,
              })
            }
          />
          <Input
            name="name"
            label="Nombre"
            value={name}
            onChange={handleChange}
          />
          <Input
            name="lastName"
            label="Apellido"
            value={lastName}
            onChange={handleChange}
          />
          <Input
            name="email"
            label="Correo"
            text="Puedes usar letras, números y signos de puntuación"
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

          <Input
            name="confirmPassword"
            label="Confirmar Contraseña"
            type="password"
            text="Usa 8 o más caracteres"
            value={confirmPassword}
            onChange={handleChange}
          />

          <MainButton type="submit"> Registrar </MainButton>
          <div className={Styles.alreadyAccount}>
            <Text color="#536471" fontSize="15px">
              ¿Ya tienes una cuenta?
            </Text>
            <Link href="/ingresar" variant="body2">
              Inicia Sesión
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export { Register };
