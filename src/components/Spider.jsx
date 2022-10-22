import React from 'react';
import s from "../styles/MainPage.module.css";
import useSound from "use-sound";
import sound from  '../assets/halloween_is_coming_.mp3'

const Spider = () => {
    const [play, { stop }] = useSound(sound);
    return (
        <div>
                <div
                    className={s.spider }
                     onClick={()=>play()}
                     onDoubleClick={() => stop()}
                />
        </div>
    );
};

export default Spider;
