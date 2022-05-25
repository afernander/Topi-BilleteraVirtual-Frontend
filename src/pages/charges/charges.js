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
          <MainButton href="/home"> Recargar </MainButton>
        </Form>
      </div>
    </Layout>
  );
}

export { Charges };
