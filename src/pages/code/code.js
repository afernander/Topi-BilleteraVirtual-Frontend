import React from "react";
import { Image } from "mui-image";
import Styles from "./code.module.scss";
import { Text } from "../../components/text/text";
import { MainButton } from "../../components/general/button/main-button";
import Layout from "../../components/general/layout/layout";
import { Table } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function Code() {

  let dinamic_code = Math.floor((Math.random() * (10000 - 0 + 1)) + 0);

  return (
    <Layout>
      <Text fontSize="30px" fontWeight="bold" className={Styles.title}>
        Clave Dinámica
      </Text>
      <div className={Styles.code}>
        <Text fontSize="50px" fontWeight="bold">
          {dinamic_code}
        </Text>
      </div>
    </Layout>
  );
}

export { Code };
