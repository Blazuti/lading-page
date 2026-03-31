import React, { useState } from "react";
import Imagem001 from "../media/imgs/img_trabalho001.png";
import Imagem002 from "../media/imgs/img_trabalho002.png";
import Imagem003 from "../media/imgs/img_trabalho003.png";
import Imagem004 from "../media/imgs/img_trabalho004.png";
import Imagem005 from "../media/imgs/img_trabalho005.png";
import Imagem006 from "../media/imgs/img_trabalho006.png";
import ImageModal from "./ImageModal";
import style from "./works.module.css";

const images = {
  trabalho001: Imagem001,
  trabalho002: Imagem002,
  trabalho003: Imagem003,
  trabalho004: Imagem004,
  trabalho005: Imagem005,
  trabalho006: Imagem006,
};

export default function works() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesArray = Object.values(images);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={style.works}>
      <div className={style.contain_works}>
        <h1>My Works</h1>
        <div className={style.photos}>
          <button className={style.prev} onClick={handlePrev}>prev</button>
          <ImageModal imageSrc={images} 
          alt="foto trabalho" 
          currentIndex={currentIndex}
          />
          <button className={style.next} onClick={handleNext}>next</button>
        </div>
      </div>
    </div>
  );
}
