import React from 'react';
import s from '../styles/UserPage.module.css'
import  mainVideo from '../assets/happy-halloween.mp4'
import {Link} from "react-router-dom";
// import  mainVideo from '../assets/Halloween.mp4'
// import  mainVideo from '../assets/Graveyard.mp4'
const UserPage = () => {
    return (
        <div className={s.main_container}>
            <video autoPlay loop muted id='video' >
                <source src={mainVideo} type='video/mp4'/>
            </video>
            <div className={s.content}>
                <h1>Halloween</h1>
                <p>And</p>
                <h1>Party</h1>
                <Link to={'/'}>
                    <button>Back </button>
                </Link>
            </div>


        </div>
    );
};

export default UserPage;
