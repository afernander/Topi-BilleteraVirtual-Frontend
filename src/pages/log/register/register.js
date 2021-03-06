import React, { useState } from "react";
import Styles from "./register.module.scss";
import { Image } from "mui-image";
import { Text } from "../../../components/text/text";
import BasicDatePicker from "../../../components/date/date";
import Input from "../../../components/input/input";
import { MainButton } from "../../../components/general/button/main-button";
import { Form } from "../../../components/login/form";
import Link from "@mui/material/Link";
import {useNavigate} from 'react-router-dom';


function Register() {
  const homeImage = require("../../../images/home-image.png");
  const logo = require("../../../images/home-pig.png");
  const navigate = useNavigate();

  const [body, setBody] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: null,
  });

  const { name, lastName, email, password, confirmPassword, birthDate } = body;

  const handleChange = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {

     var month ="";
    if(parseInt(body.birthDate.getMonth())+1<10){
      month = "0"+(parseInt(body.birthDate.getMonth())+1)
    }else{
      month=(parseInt(body.birthDate.getMonth())+1)+"";
    }

    var day ="";
    if(parseInt(body.birthDate.getDay())+1<10){
      day = "0"+(parseInt(body.birthDate.getDay())+1)
    }else{
      day =(parseInt(body.birthDate.getDay())+1)+"";
    }

    const user = {
      "email": body.email,
        "password": body.password,
        "name": body.name+" "+body.lastName,
        "date": body.birthDate.getFullYear()+"-"+month+"-"+day,
        "balance": 200000,
  }

    await fetch("http://localhost:3000/users/signup", {
      "method": "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      "body": JSON.stringify(user)
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    });
    navigate('/ingresar');
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
        <Form method="post" action={'/ingresar'} onSubmit={handleSubmit}>
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
            text="Puedes usar letras, n??meros y signos de puntuaci??n"
            type="email"
            value={email}
            onChange={handleChange}
          />
          <Input
            name="password"
            label="Contrase??a"
            type="password"
            value={password}
            onChange={handleChange}
          />

          <Input
            name="confirmPassword"
            label="Confirmar Contrase??a"
            type="password"
            text="Usa 8 o m??s caracteres"
            value={confirmPassword}
            onChange={handleChange}
          />
          <MainButton onClick={handleSubmit}> Registrar </MainButton>
          <div className={Styles.alreadyAccount}>
            <Text color="#536471" fontSize="15px">
              ??Ya tienes una cuenta?
            </Text>
            <Link href="/ingresar" variant="body2">
              Inicia Sesi??n
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export { Register };
