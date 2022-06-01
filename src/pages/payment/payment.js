import React from "react";
import { Image } from "mui-image";
import Styles from "./payment.module.scss";
import { Text } from "../../components/text/text";
import { MainButton } from "../../components/general/button/main-button";
import Layout from "../../components/general/layout/layout";
import { Table } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Input from "../../components/input/input";

function Payment() {
  const cupon = require("./../../images/paga.png");
  const debito = require("./../../images/recarga.png");
  const pse = require("./../../images/pse.png");
  const billetera = require("./../../images/billetera.png");
  const credito = require("./../../images/gana.png");
  const pago= 60000;


  let datacharge = {
    email: "",
    password: "",
    name: "",
    date: "",
    balance: "",
  }
  const handleSubmit3 = async () => {

    await fetch("http://localhost:3000/users/" +(JSON.parse(localStorage.getItem('user')).id), {
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
        datacharge.balance = parseInt(data.balance) - parseInt(pago);
        console.log(datacharge);
      });

      handleSubmit();
  };

  const handleSubmit2 = async () => {
    const id = JSON.parse(localStorage.getItem("user")).id;

    await fetch("http://localhost:3000/users/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data));
      });
  };

  const handleSubmit = async () => {
    await fetch("http://localhost:3000/users/" +(JSON.parse(localStorage.getItem('user')).id), {
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
      <Text fontSize="22px" fontWeight="bold" className={Styles.title}>
        Zona de Pago
      </Text>
      <div className={Styles.payment}>
        <div className={Styles.payment__method}>
          <List>
            <ListItem className={Styles.list}>
              <ListItemIcon>
                <Image className={Styles.list__image} src={debito} />
              </ListItemIcon>

              <ListItemText>Tarjeta Debito</ListItemText>
            </ListItem>

            <ListItem className={Styles.list}>
              <ListItemIcon>
                <Image className={Styles.list__image} src={pse} />
              </ListItemIcon>

              <ListItemText>PSE</ListItemText>
            </ListItem>

            <ListItem className={Styles.list}>
              <ListItemIcon>
                <Image className={Styles.list__image} src={billetera} />
              </ListItemIcon>

              <ListItemText>Desde tu Billetera</ListItemText>
            </ListItem>

            <ListItem className={Styles.list}>
              <ListItemIcon>
                <Image className={Styles.list__image} src={cupon} />
              </ListItemIcon>

              <ListItemText>Cupón</ListItemText>
            </ListItem>

            <ListItem className={Styles.list}>
              <ListItemIcon>
                <Image className={Styles.list__image} src={credito} />
              </ListItemIcon>

              <ListItemText>Tarjeta de Crédito</ListItemText>
            </ListItem>
          </List>
        </div>

        <div className={Styles.payment__price}>
          <List>
            <ListItem className={Styles.prices}>
              <ListItemText className={Styles.prices__name}>
                Monto Total
              </ListItemText>
              <ListItemText className={Styles.prices__number}>
                {pago+(pago/10)}
              </ListItemText>
            </ListItem>
            <ListItem className={Styles.prices}>
              <ListItemText className={Styles.prices__name}>
                Descuento
              </ListItemText>
              <ListItemText className={Styles.prices__number}>
                {pago/10}
              </ListItemText>
            </ListItem>
            <ListItem className={Styles.prices}>
              <ListItemText className={Styles.prices__name}>IVA</ListItemText>
              <ListItemText className={Styles.prices__number}>
                {parseInt(pago/19)}
              </ListItemText>
            </ListItem>

            <ListItem className={Styles.prices}>
              <ListItemText className={Styles.prices__name}>
                Total a Pagar
              </ListItemText>
              <ListItemText className={Styles.prices__number}>
                {pago}
              </ListItemText>


            </ListItem>
            <Input
            name="percent"
            label="Clave Dinamica"
            type="text"

            />
            <MainButton href="/home" onClick={handleSubmit3} type="submit">Pagar</MainButton>
          </List>
        </div>
      </div>
    </Layout>
  );
}

export { Payment };
