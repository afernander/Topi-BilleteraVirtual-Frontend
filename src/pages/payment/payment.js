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


  var data = {
    "email": JSON.parse(localStorage.getItem('user')).email,
        "password": JSON.parse(localStorage.getItem('user')).password,
        "name": JSON.parse(localStorage.getItem('user')).name,
        "date": "2011-03-12",
        "balance": (JSON.parse(localStorage.getItem('user')).balance - pago)
  }
  const handleSubmit = async () => {

    localStorage.setItem("user", JSON.stringify(data));
    fetch("http://localhost:3000/users/"+(JSON.parse(localStorage.getItem('user')).id), {
      "method": "PUT",
      "headers": {
        "cookie": "session=eyJ1c2VySWQiOjR9; session.sig=zkXT5HoUJr-HOXcWpnfVKBoJMZ4",
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(data)
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    });
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
            <MainButton href="/home" onClick={handleSubmit} className={Styles.button}>Pagar</MainButton>
          </List>
        </div>
      </div>
    </Layout>
  );
}

export { Payment };
