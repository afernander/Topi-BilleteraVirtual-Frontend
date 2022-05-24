import React, { useState } from "react";
import Styles from "./login.module.scss";
import { Image } from "mui-image";
import { Text } from "../../../components/text/text";
import Input from "../../../components/input/input";
import { MainButton } from "../../../components/general/button/main-button";
import { Form } from "../../../components/login/form";
import Link from "@mui/material/Link";
import {useNavigate} from 'react-router-dom';

function Login() {
  const homeImage = require("../../../images/home-image.png");
  const logo = require("../../../images/home-pig.png");
  const navigate = useNavigate();

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

  const handleSubmit = async () => {


   const data = {
      "email": body.email,
      "password": body.password,
    }

   await fetch("http://localhost:3000/users/signin", {
     "method": "POST",
     "headers": {
       "cookie": "session=eyJ1c2VySWQiOjZ9; session.sig=5_-6GVQnEuucSwVORP8dx_SHLTc",
       "Content-Type": "application/json"
     },
     "body": JSON.stringify(data)
   })
   .then(response => {
     console.log(response);
     navigate('/home');
   })
   .catch(err => {
     console.error(err);
   });
   
}

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
          <MainButton onClick={handleSubmit}> Iniciar Sesión </MainButton>
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
