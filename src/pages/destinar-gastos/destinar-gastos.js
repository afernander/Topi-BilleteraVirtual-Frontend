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

  const handleSubmit = async () => {



   const expense = {
    "amount": 30,
    "category": "que",
    "users": 1
 }

   await fetch("http://localhost:3000/expenses", {
     "method": "POST",
     "headers": {
       "cookie": "session=eyJ1c2VySWQiOjZ9; session.sig=5_-6GVQnEuucSwVORP8dx_SHLTc",
       "Content-Type": "application/json"
     },
     "body": JSON.stringify(expense)
   })
   .then(response => {
     console.log(response);
   })
   .catch(err => {
     console.error(err);
   });

}



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
        <MainButton onClick={handleSubmit}> Destinar </MainButton>
        </Form>
      </div>
    </Layout>
  );
}

export { DestinarGastos };
