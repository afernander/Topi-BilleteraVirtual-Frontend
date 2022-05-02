import React from "react";
import { Image } from "mui-image";
import Styles from "./historical.module.scss";
import { Text } from "../../components/text/text";
import { MainButton } from "../../components/general/button/main-button";
import Layout from "../../components/general/layout/layout";
import { Table } from "@mui/material";

function Historical() {
  return (
    <Layout>
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
        <tr>
          <td>0523</td>
          <td>Parqueadero</td>
          <td>50-Juanita Perez</td>
          <td>${22562}</td>
        </tr>

        <tr>
          <td>0523</td>
          <td>Parqueadero</td>
          <td>50-Juanita Perez</td>
          <td>${22562}</td>
        </tr>

        <tr>
          <td>0523</td>
          <td>Parqueadero</td>
          <td>50-Juanita Perez</td>
          <td>${22562}</td>
        </tr>

        <tr>
          <td>0523</td>
          <td>Parqueadero</td>
          <td>50-Juanita Perez</td>
          <td>${22562}</td>
        </tr>

        <tr>
          <td>0523</td>
          <td>Parqueadero</td>
          <td>50-Juanita Perez</td>
          <td>${22562}</td>
        </tr>
      </Table>
    </Layout>
  );
}

export { Historical };
