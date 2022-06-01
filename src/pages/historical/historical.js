import { useState } from "react";
import Styles from "./historical.module.scss";
import { Text } from "../../components/text/text";
import Layout from "../../components/general/layout/layout";
import { Table } from "@mui/material";
import React, { useEffect } from "react";

let data2 = [
  {
    id: "1",
    product: "Product 1",
    cuenta: "Parqueadero",
    precio: "$5.000",
  },
  {
    id: "2",
    product: "Transferencia",
    cuenta: "Ingreso",
    precio: "$20.000",
  },
  {
    id: "3",
    product: "Product 2",
    cuenta: "Bebida",
    precio: "$4.000",
  },
  {
    id: "4",
    product: "Product 3",
    cuenta: "Parqueadero",
    precio: "$5.000",
  },
  {
    id: "5",
    product: "Product 4",
    cuenta: "Gimnasio",
    precio: "$60.000",
  },
  {
    id: "6",
    product: "Transferencia",
    cuenta: "Ingreso",
    precio: "$10.000",
  },
]


function Historical() {

  const [data, setData] = useState(null);


  useEffect(() => {
    fetch("http://localhost:3000/historical")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error("Error fetching data", data);
      });
  }, []);

  if (data) {
    data2 = data.map((item, id) => {
      return {
        id: item.id,
        cuenta: item.cuenta,
        product: item.product,
        precio: item.precio,
      };
    });
  }

  return (
    <Layout>
      <div className={Styles.container}>
        <Text fontSize="22px" fontWeight="bold" className={Styles.title}>
          Histórico de Transacciones
        </Text>
        <Table className={Styles.table}>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Cuenta</th>
            <th>Precio</th>
          </tr>
          <br></br>
          {data2.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.product}</td>
              <td>{item.cuenta}</td>
              <td style={{ color: item.cuenta==="Ingreso" ? 'green': "red" }} >{item.precio}</td>
            </tr>
          ))}
        </Table>
      </div>
    </Layout>
  );
}

export { Historical };
