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

  let datacharge = {
    email: "",
    password: "",
    name: "",
    date: "",
    balance: "",
  };

  const handleSubmit3 = async () => {
    const id = body.id;

    await fetch("http://localhost:3000/users/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        datacharge.email = data.email;
        datacharge.password = data.password;
        datacharge.name = data.name;
        datacharge.date = data.date;
        datacharge.balance = parseInt(data.balance)+parseInt(amount);
        console.log(datacharge);
      });

    handleSubmit();
  };

  const handleSubmit2 = async () => {
    const data2 = {
      email: JSON.parse(localStorage.getItem("user")).email,
      password: JSON.parse(localStorage.getItem("user")).password,
    };

    await fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data2),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
      });
  };

  const handleSubmit = async () => {
    fetch("http://localhost:3000/users/" + parseInt(body.id), {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datacharge),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });

    handleSubmit2();
  };

  return (
    <Layout>
      <div className={Styles.wrapForm}>
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
          <MainButton onClick={handleSubmit3} type="submit">
            {" "}
            Recargar{" "}
          </MainButton>
        </Form>
      </div>
    </Layout>
  );
}

export { Charges };
