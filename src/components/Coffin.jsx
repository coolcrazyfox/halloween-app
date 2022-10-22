import React from 'react';
import useSound from "use-sound";
import sound from "../assets/first.mp3";
import s from "../styles/MainPage.module.css";

const Coffin = () => {
    const [play, { stop }] = useSound(sound);
    return (
        <div>
            <div
                className={s.coffin }
                onClick={()=>play()}
                onDoubleClick={() => stop()}
            />
        </div>
    )
};

export default Coffin;
