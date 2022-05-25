import React, { useState } from "react";
import Layout from "../../components/general/layout/layout";
import { Form } from "../../components/login/form";
import Input from "../../components/input/input";
import { MainButton } from "../../components/general/button/main-button";
import { Text } from "../../components/text/text";
import Styles from "./destinar-gastos.module.scss";

function DestinarGastos() {
  const [body, setBody] = useState({
    type: "",
    percent: "",
  });

  const { type, percent } = body;

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
    <Layout>
      <div className={Styles.wrapForm}>
        <Form onSubmit={onSubmit}>
          <Text fontSize="22px" fontWeight="bold">
            Destinar Gastos
          </Text>
          <Input
            name="type"
            label="Tipo de Gasto"
            type="text"
            value={type}
            onChange={handleChange}
          />

          <Input
            name="percent"
            label="Porcentaje"
            type="text"
            value={percent}
            onChange={handleChange}
          />
        <MainButton href="/home"> Destinar </MainButton>
        </Form>
      </div>
    </Layout>
  );
}

export { DestinarGastos };
