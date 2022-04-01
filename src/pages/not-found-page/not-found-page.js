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
      <div className={Styles.homeGrid__content}>
        <div className={Styles.imgWrapper}>
          <Image src={tuyaImage} />
        </div>
        
        <Text marginBottom = "4%" fontSize="3rem" fontWeight="900" >¡Lo sentimos!</Text>
        <Text marginBottom = "6%" fontSize="1.1rem" fontWeight="500" >
          No hemos podido encontrar la pagina que buscabas
        </Text>
        
        <MainButton width="70%" href="/">          
          Regresa al inicio
        </MainButton>
      </div>
      <div className={Styles.homeGrid__img404}>
        <Image src={Image404} />
      </div>
    </div>
  );
}

export { NotFoundPage };
