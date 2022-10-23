import React from 'react';
import  s  from '../styles/Scare.module.css'
import {Link} from "react-router-dom";
const ScarePage = () => {
    return (
        <div className={s.main_container}>
            <div className={s.main}>
                <div className={s.text}>Are You Scare ???
                    <div className={s.second_text}>
                        <h2>
                            Relax and smile
                        </h2>
                        <Link to={'/user'}>
                            <button className={s.btn}>Next</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScarePage;
