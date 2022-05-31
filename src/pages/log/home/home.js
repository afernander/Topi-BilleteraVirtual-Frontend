import React, { useEffect } from "react";
import Layout from "../../../components/general/layout/layout";
import ActionAreaCard from "../../../components/card/card";
import Styles from "./home.module.scss";
import { Button, imageListClasses } from "@mui/material";
import { useState } from "react";
import { Text } from "./../../../components/text/text";

function Home() {
  const gym = require("./../../../images/gym.jpeg");
  const dispense = require("./../../../images/dispense.jpeg");
  const parking = require("./../../../images/parking.jpeg");
  const links = [gym, dispense, parking];
  const styles = {
    textAlign: "start",
  };
  var pro = [
    {
      id: 1,
      title: "Gimnasio",
      description:
        "Paga aquí tu membresia del gimnasio vivo! y obten 10% de descuento ",
      price: 3000,
      image: gym,
    },
  ];

  const [data, setData] = useState(null);


  useEffect(() => {
    fetch("http://localhost:3000/products")
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
    pro = data.map((product, id) => {
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: links[id],
      };
    });
  }

  const reg=/\d{1,3}(?=(\d{3})+$)/g;
  const saldo0 = JSON.parse(localStorage.getItem('user')).balance;
    const saldo = ((saldo0 + '').replace(reg, '$&.')).replace(",", ".");

  return (
    <Layout>
      
      <div className={Styles.cardHome}>
        {pro.map((promotions, id) => (
          <Button sx={styles} href="/payment" key={promotions.id}>
            <ActionAreaCard
              title={promotions.name}
              description={promotions.description}
              price={promotions.price}
              image={promotions.image}
            />
          </Button>
        ))}
      </div>
    </Layout>
  );
}

export { Home };
