import React from 'react';
import s from "../styles/MainPage.module.css";
import useSound from "use-sound";
import sound from  '../assets/monsters.mp3'

const Ghost = () => {
    const [play, { stop }] = useSound(sound);
    return (
        <div>
                <div
                    className={s.ghost }
                     onClick={()=>play()}
                     onDoubleClick={() => stop()}
                />
        </div>
    );
};

export default Ghost;
