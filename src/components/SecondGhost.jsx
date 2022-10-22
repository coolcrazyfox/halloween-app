import React from 'react';
import s from "../styles/MainPage.module.css";
import useSound from "use-sound";
import sound from  '../assets/three.mp3'

const SecondGhost = () => {
    const [play, { stop }] = useSound(sound);
    return (
        <div>
                <div
                    className={s.second_ghost }
                     onClick={()=>play()}
                     onDoubleClick={() => stop()}
                />
        </div>
    );
};

export default SecondGhost;
