import React, { useEffect } from "react";
import Layout from "../../../components/general/layout/layout";
import ActionAreaCard from "../../../components/card/card";
import Styles from "./home.module.scss";
import { Button, imageListClasses } from "@mui/material";
import { useState } from "react";
import { Text } from "./../../../components/text/text";

function Home() {
  const gym = require("./../../../images/gym.png");
  const dispense = require("./../../../images/dispense.png");
  const parking = require("./../../../images/parking.png");
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

  return (
    <Layout>
      <div
        style={{
          backgroundColor: "#f5f5f5",
          borderRadius: "5px",
          width: "30%",
          height: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 0px 5px #red",
          border: "1px solid black",
          marginBottom: "80px",
        }}
      >
        <Text variant="h5" color="black">
          Este es tu saldo actual: {1000}
        </Text>
      </div>
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
