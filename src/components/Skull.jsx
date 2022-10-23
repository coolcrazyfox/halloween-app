import React from 'react';
import s from "../styles/MainPage.module.css";
import {Link} from "react-router-dom";

const Skull = () => {
    return (
        <Link to={'/scare'}>
                <div
                    className={s.skull }

                />
        </Link>
    );
};

export default Skull;
