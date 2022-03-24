import React from "react";
import Styles from "./welcome.module.scss";
import Layout from "../../components/general/layout/layout";
import { Image } from "mui-image";
import { MainButton } from "../../components/general/button/main-button";
import { Text } from "../../components/text/text";

function Welcome() {
  const logo = require("../../images/bg-layout.png");
  const recharge = require("../../images/recarga.png");
  const pay = require("../../images/paga.png");
  const win = require("../../images/gana.png");

  return (
    <>
      <div className={Styles.contentWrapper}>
        <div className={Styles.contentWrapper__title}>
          <Text fontSize="30px" color="white" fontWeight="700">
            {" "}
            Bienvenido{" "}
          </Text>
          <Text fontSize="55px" color="white" fontWeight="900">
            {" "}
            T - U{" "}
          </Text>
          <MainButton href="/registro" width="250px" fontWeight="500">
            {" "}
            ¡Lo quiero!{" "}
          </MainButton>
          <div className={Styles.imgWrapper}>
            <Image src={logo} />
          </div>
        </div>

        <div className={Styles.homeWrapper}>
          <div className={Styles.homeWrapper__textContainer}>
            <Text fontSize="18px" color="black">
              <span color="red"> T-U </span> Una cuenta digital enfocada en
              estudiantes universitarios
            </Text>
            <br />
            <Text fontSize="18px" color="black">
              ¡Ahora puedes gestionar tu dinero de forma segura y sencilla desde
              un solo lugar y al alcance de tu mano!
            </Text>
          </div>
          <div className = {Styles.homeWrapper__images} >
            <Text fontSize="30px" color="black" fontWeight="900">
              Estudiante, ahora tú:
            </Text>
            <div className = {Styles.cardsWrapper}>
              <div>
                <div className = {Styles.image} >
                  <Image src={recharge} />
                </div>
                <Text fontSize="25px" color="black" fontWeight="900">
                  ¡Recarga!
                </Text>
              </div>
              <div>
                <div>
                  <Image src={pay} />
                </div>
                <Text fontSize="25px" color="black" fontWeight="900">
                  ¡Paga!
                </Text>
              </div>
              <div>
                <div>
                  <Image src={win} />
                </div>
                <Text fontSize="25px" color="black" fontWeight="900">
                  ¡Gana!
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Welcome };
