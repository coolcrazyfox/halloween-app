import React from 'react';
import s from "../styles/MainPage.module.css";
import useSound from "use-sound";
import sound from  '../assets/second.mp3'

const Pumpkin = () => {
    const [play, { stop }] = useSound(sound);
    return (
        <div>
                <div
                    className={s.pumpkin }
                     onClick={()=>play()}
                     onDoubleClick={() => stop()}
                />
        </div>
    );
};

export default Pumpkin;
