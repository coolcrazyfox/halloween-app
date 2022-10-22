import React from 'react';
import MainPage from "../pages/MainPage";
import UserPage from "../pages/UserPage";
import CardPage from "../pages/CardPage";
import RedactPage from "../pages/RedactPage";

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <MainPage/>
                </li>
                <li>
                    <UserPage/>
                </li>
                <li>
                    <CardPage/>
                </li>
                <li>
                    <RedactPage/>
                </li>

            </ul>
        </div>
    );
};

export default Header;
