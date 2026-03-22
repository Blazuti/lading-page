import React from "react";
import Orelha001 from "../components/media/imgs/piercing_orelha.png";
import Orelha002 from "../components/media/imgs/piercing_orelha002.png";

export default function works() {
  return (
    <div className="contain_works">
      <div className="photos">
        <div className="photos_inline">
            <img src={Orelha001} alt="" />
        </div>
        <div className="photos_inline">
            <img src={Orelha002} alt="" />
        </div>
        <div className="photos_inline">
            <img src={Orelha002} alt="" />
        </div>
      </div>
      <div className="photos">
        <div className="photos_inline"></div>
        <div className="photos_inline"></div>
        <div className="photos_inline"></div>
      </div>
      <div className="photos">
        <div className="photos_inline"></div>
        <div className="photos_inline"></div>
        <div className="photos_inline"></div>
      </div>
      <div className="photos">
        <div className="photos_inline"></div>
        <div className="photos_inline"></div>
        <div className="photos_inline"></div>
      </div>
      <div className="description_photos"></div>
    </div>
  );
}
