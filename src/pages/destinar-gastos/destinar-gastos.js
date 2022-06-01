import React, { useState } from "react";
import Layout from "../../components/general/layout/layout";
import { Form } from "../../components/login/form";
import Input from "../../components/input/input";
import { MainButton } from "../../components/general/button/main-button";
import { Text } from "../../components/text/text";
import Styles from "./destinar-gastos.module.scss";
import { useEffect } from "react";

var data = [
  {
    nombre: "Comida",
    porcentaje: "12%",
    monto: "20000",
  },
  {
    nombre: "Transporte",
    porcentaje: "12%",
    monto: "20000",
  },
];

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

  const [datas, setDatas] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/expenses")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        console.log(datas);
        setDatas(data);
        data = datas;
      })
      .catch((err) => {
        console.error("Error fetching data", datas);
      });
  }, []);

  if (datas) {
    data = datas.map((p) => {
      return {
        id: p.id,
        amount: p.amount,
        category: p.category,
      };
    });
  }

  console.log(datas);
  const handleSubmit = async () => {
    const expense = {
      amount: parseInt(body.percent),
      category: body.type,
      users: JSON.parse(localStorage.getItem("user")).id,
    };

    await fetch("http://localhost:3000/expenses", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Layout>
      <div className={Styles.destinar}>
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
              type="number"
              value={percent}
              onChange={handleChange}
            />
            <MainButton href="/destinarGastos" onClick={handleSubmit}> Destinar </MainButton>
          </Form>
        </div>
        <div className={Styles.wrapTable}>
          <Text fontSize="22px" fontWeight="bold">
            Destinación de Gastos
          </Text>
          <table className={Styles.table}>
            <thead>
              <tr>
                <th>Tipo de Gasto</th>
                <th>Monto</th>
                <th>Porcentaje</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.category}</td>
                  <td>
                    {parseInt(
                      JSON.parse(localStorage.getItem("user")).balance /
                        item.amount
                    )}
                  </td>
                  <td>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export { DestinarGastos };
