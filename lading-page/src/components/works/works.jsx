import React from "react";
import Orelha001 from "../media/imgs/piercing_orelha.png";
import Orelha002 from "../media/imgs/piercing_orelha002.png";
import './works.module.css'

export default function works() {
  return (
    <div className="works">
      <div className="contain_works">
        <h1>My Works</h1>
        <div className="container_photos_inline">
          <div className="container_photo">
            <div className="photo">
              <img src={Orelha001} alt="" />
            </div>
          </div>

          <div className="container_photo">
            <div className="photo">
              <img src={Orelha002} alt="" />
            </div>
          </div>

          <div className="container_photo">
            <div className="photo"></div>
          </div>
        </div>

         <div className="container_photos_inline">
          <div className="container_photo">
            <div className="photo"></div>
          </div>

          <div className="container_photo">
            <div className="photo"></div>
          </div>

          <div className="container_photo">
            <div className="photo"></div>
          </div>
        </div>

         <div className="container_photos_inline">
          <div className="container_photo">
            <div className="photo"></div>
          </div>

          <div className="container_photo">
            <div className="photo"></div>
          </div>

          <div className="container_photo">
            <div className="photo"></div>
          </div>
        </div>

        


      </div>
    </div>
  );
}
