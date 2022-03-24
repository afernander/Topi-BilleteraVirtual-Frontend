import React from "react";
import { Image } from "mui-image";
import Styles from "./not-found-page.module.scss";
import { Text } from "../../components/text/text";
import { MainButton } from "../../components/general/button/main-button";


function NotFoundPage() {
  const Image404 = require("../../../src/images/404.png");
  
  const tuyaImage = require("../../images/tuya.png");
  return (
    <div className={Styles.homeGrid}>
      <div className={Styles.homeGrid__imgWrapper}>
        <Image src={tuyaImage}/>
        <div className={Styles.texto}>
        <Text className={Styles.texto__text1}>¡Lo sentimos!</Text>
        <Text className={Styles.texto__text2}>No hemos podido encontrar la pagina que buscabas</Text>
        </div>
        <MainButton className={Styles.texto__boton}> Regresa al inicio </MainButton>
      </div>
      <div className={Styles.homeGrid__404}>
      <Image src={Image404}/>
      </div>
    </div>
  );
}

export { NotFoundPage };
