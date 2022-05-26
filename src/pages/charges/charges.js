import React, { useState } from "react";
import Layout from "../../components/general/layout/layout";
import { Form } from "../../components/login/form";
import Input from "../../components/input/input";
import { MainButton } from "../../components/general/button/main-button";
import { Text } from "../../components/text/text";
import Styles from "./charges.module.scss";

function Charges() {
  const [body, setBody] = useState({
    id: "",
    amount: "",
  });

  const { id, amount } = body;

  const handleChange = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

 

  var data = {
    "email": JSON.parse(localStorage.getItem('user')).email,
        "password": JSON.parse(localStorage.getItem('user')).password,
        "name": JSON.parse(localStorage.getItem('user')).name,
        "date": "2011-03-12",
        "balance": (JSON.parse(localStorage.getItem('user')).balance +parseInt(body.amount))
  }

  const handleSubmit = async () => {
    localStorage.setItem("user", JSON.stringify(data));
    fetch("http://localhost:3000/users/"+parseInt(body.id), {
      "method": "PUT",
      "headers": {
        "cookie": "session=eyJ1c2VySWQiOjR9; session.sig=zkXT5HoUJr-HOXcWpnfVKBoJMZ4",
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(data)
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    });
  };


  return (
    <Layout >
      <div className={Styles.wrapForm} >
        <Form onSubmit={onSubmit}>
          <Text fontSize="22px" fontWeight="bold">
            Recarga tu cuenta
          </Text>
          <Input
            name="id"
            label="ID"
            type="text"
            value={id}
            onChange={handleChange}
          />

          <Input
            name="amount"
            label="Monto"
            type="text"
            value={amount}
            onChange={handleChange}
          />
          <MainButton href="/home" onClick={handleSubmit}> Recargar </MainButton>
        </Form>
      </div>
    </Layout>
  );
}

export { Charges };
