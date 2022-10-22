import React from 'react';
import s from '../styles/Halloween.module.css'

const HalloweenTitle = () => {
    return (
        <div>
            <div className={s.nameContainer}>
                <h2 className={s.nameText}>
                    <span>H</span>
                    <span>a</span>
                    <span>l</span>
                    <span>l</span>
                    <span>o</span>
                    {/*<span>i&nbsp;&nbsp;</span>*/}
                    <span>w</span>
                    <span>e</span>
                    <span>e</span>
                    <span>n</span>
                </h2>
            </div>
            <div className={s.second_container}>
                <h2 className={s.second_text}>
                    <span>I</span>
                    <span>s&nbsp;&nbsp;</span>
                    <span>c</span>
                    <span>o</span>
                    <span>m</span>
                    <span>i</span>
                    <span>n</span>
                    <span>g</span>

                </h2>
            </div>
        </div>
    );
};

export default HalloweenTitle;
