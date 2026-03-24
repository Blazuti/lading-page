import React from "react";
import Video from "../media/video_cover.mp4"
import style from './cover.module.css'

export default function cover(){
    return(
        <section className={style.cover}>
            <video src={Video} autoPlay muted playsInline loop></video>
        </section>
    )
}