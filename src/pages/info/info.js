import React from "react";
import Styles from "./info.module.scss";
import { Text } from "../../components/text/text";
import Layout from "../../components/general/layout/layout";

function Info() {
  return (
    <Layout>
      <div className={Styles.contentWrapper}>
        <div className={Styles.contentWrapper__title}>
          <Text fontSize="30px" color="red" fontWeight="700">
            {" "}
            T - U{" "}
          </Text>
          <Text fontSize="55px" color="black" fontWeight="900">
            {" "}
            Bienvenido A INFO
          </Text>
        </div>

        <div className={Styles.homeWrapper__textContainer}>
          <Text fontWeight="bold" fontSize="28px" color="black">
            Contacta con nosotros
            <br />
          </Text>
          <br />
          <Text fontSize="18px" color="black">
            Cristian Alexis Giraldo
            <br />
          </Text>
          <Text fontSize="18px" color="black">
            Alejandro Fernandez Restrepo
            <br />
          </Text>
          <Text fontSize="18px" color="black">
            Daniel Alejandro Cifuentes
            <br />
          </Text>
          <Text fontSize="18px" color="black">
            Miguel Fernando Ramos García
            <br />
          </Text>
          <Text fontSize="18px" color="black">
            Felipe Peña Franco
            <br />
          </Text>
          <br />
        </div>
      </div>
    </Layout>
  );
}

export { Info };
