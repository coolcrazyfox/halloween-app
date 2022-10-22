import React from 'react';
import s from "../styles/MainPage.module.css";
import useSound from "use-sound";
import sound from  '../assets/halloween_night.mp3'

const SecondSpider = () => {
    const [play, { stop }] = useSound(sound);
    return (
        <div>
                <div
                    className={s.second_spider }
                     onClick={()=>play()}
                     onDoubleClick={() => stop()}
                />
        </div>
    );
};

export default SecondSpider;
