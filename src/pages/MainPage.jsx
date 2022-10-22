import React from 'react';
import s from  '../styles/MainPage.module.css'
import Spider from "../components/Spider";
import SecondSpider from "../components/SpiderSecond";
import Pumpkin from "../components/Pumpkin";
import Ghost from "../components/Ghost";
import SecondGhost from "../components/SecondGhost";


const MainPage = () => {


    return (
        <div className={s.container}>
            <div className={s.site_header}>
                <Spider/>
                <SecondSpider/>
                <Pumpkin/>
                <Ghost/>
                <SecondGhost/>
            </div>

        </div>
    );
};

export default MainPage;
