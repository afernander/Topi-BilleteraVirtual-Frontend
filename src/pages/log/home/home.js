import React, { useEffect } from "react";
import Layout from "../../../components/general/layout/layout";
import ActionAreaCard from "../../../components/card/card";
import Styles from "./home.module.scss";
import { Button, imageListClasses } from "@mui/material";
import {useState} from 'react';

function Home() {
  const gym = require("./../../../images/gym.png");
  const dispense = require("./../../../images/dispense.png");
  const parking = require("./../../../images/parking.png");
  const links =[gym, dispense, parking];
  const styles = {
    textAlign: "start",
  };
  var pro = [
    {
      id: 1,
      title: "Gimnasio",
      description: "Paga aquí tu membresia del gimnasio vivo! y obten 10% de descuento ",
      price: 3000,
      image: gym,
    }

  ];

  const [data, setData] = useState(null);
  const [img, setImg] = useState(null);

  useEffect(() =>{
     fetch('http://localhost:3000/products')
    .then( res => {
      if (res.ok){
        return res.json();
      }
      throw res;
    })
    .then( data => {
      setData(data);
    })
    .catch(err =>{
      console.error("Error fetching data", data)
    })
  },[])
  // var imgs = [];
  // const Gifts = (title) => {
  //   useEffect(() =>{
  //     fetch('https://api.giphy.com/v1/gifs/search?api_key=5MhLgu0LZwIPeMY9UT1fUFyCmpEi5YB3&limit=1&q='+title)
  //     .then( res => {
  //       if (res.ok){
  //         return res.json();
  //       }
  //       throw res;
  //     })
  //     .then( data => {
  //       imgs.push(data.data[0].images?.downsized_medium.url);
  //     })
  //     .catch(err =>{
  //       console.error("Error fetching data", data)
  //    })
  //  },[])

  // }

  // var productos= []
  // if(data){
  //   data.map((product)=>{
  //     productos.push(product.name);
  //   })

  // }

  // var i = "";


  //  const getGifs = async (titles) => {
  //     titles.map(async ( title ) => {
  //      await fetch('https://api.giphy.com/v1/gifs/search?api_key=5MhLgu0LZwIPeMY9UT1fUFyCmpEi5YB3&limit=1&q='+title)
  //     .then( async res => {
  //       if (res.ok){
  //         return await res.json();
  //       }
  //       throw res;
  //     })
  //     .then( data => {

  //       i =(data.data[0].images?.downsized_medium.url);
  //       imgs.push(i);

  //     })
  //       //return data.data[0].images?.downsized_medium.url;
  //     } )

  // }

  // getGifs(productos);
  // Gifts("gym");

 //console.log(imgs)

  if(data){
    pro = data.map((product, id) => {

      return{
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: links[id]
      }

    })

  }




  return (
    <Layout>
      <div className={Styles.cardHome}>
        {pro.map((promotions, id) => (
          <Button sx = {styles} href="/payment" key={promotions.id}>
            <ActionAreaCard
              title={promotions.name}
              description={promotions.description}
              price = {promotions.price}
              image= {promotions.image}
            />
          </Button>
        ))}
      </div>
    </Layout>
  );
}

export { Home };
