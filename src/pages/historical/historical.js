import React from "react";
import Styles from "./historical.module.scss";
import { Text } from "../../components/text/text";
import Layout from "../../components/general/layout/layout";
import { Table } from "@mui/material";

const data = [
  {
    id: "1",
    product: "Product 1",
    cuenta: "Parqueadero",
    precio: "$1,000",
  },
  {
    id: "2",
    product: "Product 2",
    cuenta: "Parqueadero",
    precio: "$1,000",
  },
  {
    id: "3",
    product: "Product 3",
    cuenta: "Parqueadero",
    precio: "$1,000",
  },
  {
    id: "4",
    product: "Product 4",
    cuenta: "Parqueadero",
    precio: "$1,000",
  },
  {
    id: "5",
    product: "Transferencia",
    cuenta: "Ingreso",
    precio: "$1,000",
  },
]

function Historical() {
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
          {data.map((item) => (
            <tr>
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
