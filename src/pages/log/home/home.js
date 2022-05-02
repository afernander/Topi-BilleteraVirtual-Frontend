import React from "react";
import Layout from "../../../components/general/layout/layout";
import ActionAreaCard from "../../../components/card/card";
import Styles from "./home.module.scss";
import { Button } from "@mui/material";

function Home() {
  const gym = require("./../../../images/gym.png");
  const dispense = require("./../../../images/dispense.png");
  const parking = require("./../../../images/parking.png");

  const styles = {
    textAlign: "start",
  };

  const promotions = [
    {
      id: 1,
      title: "Gimnasio",
      description: "Paga aquí tu membresia del gimnasio vivo! y obten 10% de descuento ",
      image: gym,
    },
    {
      id: 2,
      title: "Bebidas",
      description: "Recibe un 10% de descuento en tus bebidas favoritas",
      image: dispense,
    },
    {
      id: 3,
      title: "Parqueadero",
      description: "Obten un 20% de descuento en el parqueadero",
      image: parking,
    },
  ];

  return (
    <Layout>
      <div className={Styles.cardHome}>
        {promotions.map((promotions) => (
          <Button sx = {styles} href="/payment" key={promotions.id}>
            <ActionAreaCard
              title={promotions.title}
              description={promotions.description}
              image={promotions.image}
            />
          </Button>
        ))}
      </div>
    </Layout>
  );
}

export { Home };
