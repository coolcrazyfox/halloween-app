import React from 'react';
import s from  '../styles/MainPage.module.css'
import Spider from "../components/Spider";
import SecondSpider from "../components/SpiderSecond";
import Pumpkin from "../components/Pumpkin";
import Ghost from "../components/Ghost";
import SecondGhost from "../components/SecondGhost";
import Coffin from "../components/Coffin";
import HalloweenTitle from "../components/HalloweenTitle";


const MainPage = () => {


    return (
        <div className={s.container}>
            <div className={s.site_header}>
                <Spider/>
                <HalloweenTitle/>
                <SecondSpider/>
                <Pumpkin/>
                <Ghost/>
                <SecondGhost/>
                <Coffin/>
            </div>

        </div>
    );
};

export default MainPage;
