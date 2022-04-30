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

function Payment() {
  const cupon = require("./../../images/paga.png");
  const debito = require("./../../images/recarga.png");
  const pse = require("./../../images/pse.png");
  const billetera = require("./../../images/billetera.png");
  const credito = require("./../../images/gana.png");

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
                {17856}
              </ListItemText>
            </ListItem>
            <ListItem className={Styles.prices}>
              <ListItemText className={Styles.prices__name}>
                Descuento
              </ListItemText>
              <ListItemText className={Styles.prices__number}>
                {17856}
              </ListItemText>
            </ListItem>
            <ListItem className={Styles.prices}>
              <ListItemText className={Styles.prices__name}>IVA</ListItemText>
              <ListItemText className={Styles.prices__number}>
                {17856}
              </ListItemText>
            </ListItem>

            <ListItem className={Styles.prices}>
              <ListItemText className={Styles.prices__name}>
                Total a Pagar
              </ListItemText>
              <ListItemText className={Styles.prices__number}>
                {17856}
              </ListItemText>
            </ListItem>

            <MainButton className={Styles.button}>Pagar</MainButton>
          </List>
        </div>
      </div>
    </Layout>
  );
}

export { Payment };
