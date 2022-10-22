import React from 'react';
import {Route, Routes} from 'react-router-dom'
import MainPage from "../pages/MainPage";
import CardPage from "../pages/CardPage";
import UserPage from "../pages/UserPage";
import RedactPage from "../pages/RedactPage";


export const PATH = {
    MAIN: '/main',
    USER: '/user',
    CARD: '/card',
    REDACT: '/redact',

}

export const RoutesRoot = () => {
    return (
        <div>
            <Routes>

                <Route path={'/'} element={<MainPage/>}/>
                <Route path={PATH.CARD} element={<CardPage/>}/>
                <Route path={PATH.USER} element={<UserPage/>}/>
                <Route path={PATH.REDACT} element={<RedactPage/>}/>

            </Routes>
        </div>
    );
};
