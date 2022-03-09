import React from 'react';
import image from "../../assets/images/world_map.png";
import style from './Main.module.scss'
import {NavLink} from "react-router-dom";
import {PATH} from "../Routes";

const Main = () => {
    return (
        <>
            <div className={style.imageContainer}>
                <img src={image} alt="world"
                     className={style.worldImage}
                />

            </div>
            <div className={style.mainContainer}>

                <div>
                    <h1 className={style.mainTitle}>World ahead</h1>
                </div>
                <div className={style.contentWrapper}>
                    <div className={style.itemsWrapper}>
                        <div className={style.firstItemsBlock}>
                            <ul>
                                <li>EBASE</li>
                                <li>NBAA</li>
                                <li>Medica</li>
                                <li>Orgatec</li>
                                <li>IDS</li>
                                <li>Domotex</li>
                                <li>Mosbuild</li>
                            </ul>
                        </div>
                        <div className={style.secondItemsBlock}>
                            <ul>
                                <li>EBASE</li>
                                <li>NBAA</li>
                                <li>Medica</li>
                                <li>Orgatec</li>
                                <li>IDS</li>
                                <li>Domotex</li>
                                <li>Mosbuild</li>
                            </ul>
                        </div>
                        <div className={style.thirdItemsBlock}>
                            <ul>
                                <li>
                                    <NavLink to={PATH.NEW_YORK}>
                                        Mosbuild
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={PATH.BRASILIA}>
                                        BAU
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={PATH.PARIS}>
                                        Paris Air Show
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={PATH.SYDNEY}>
                                        Cersaie
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={PATH.TOKIO}>
                                        ISH
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.descriptionBlock}>
                        <h2 className={style.descriptionTitle}>We work around the world</h2>
                        <p className={style.descriptionText}>Our work is based on close relations and business wise
                            flexibility world- <br/>wide. Advanced
                            management system and hi tech facility allows us to <br/>manage big projects in short time.
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Main;