import React from 'react';
import s from  '../styles/MainPage.module.css'

const MainPage = () => {
    return (
        <div className={s.container}>
            <div className={s.site_header}>
                {/*<h1>Halooween</h1>*/}
                <div className={s.spider }></div>
                <div className={s.pumpkin}></div>
                <div className={s.pumpkin_second}></div>
                <div className={s.ghost}></div>
                <div className={s.ghost1}></div>

            </div>

        </div>
    );
};

export default MainPage;
