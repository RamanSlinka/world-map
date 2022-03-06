import React from 'react';
import image from "../../assets/images/world_map.png";
import style from './Sities.module.scss'

const Paris = () => {
    return (
        <div className={style.mainContainer}>
            <div>
                <img src={image} alt="world"
                     className={style.worldImage}
                />
            </div>
            <div className={style.chosenPlace}>
                <div>
                    <p>Paris Air Show</p>
                </div>
                <div className={style.wrapperPoint}>
                    <div className={style.arrow}></div>
                    <div className={style.pointOnTheMap}></div>
                </div>
                <div>
                    <p>Paris (France)</p>
                </div>
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
                    <div>
                        <ul>
                            <li>Mosbuild</li>
                            <li>BAU</li>
                            <li className={style.activeCity}>Paris Air Show</li>
                            <li>Cersaie</li>
                            <li>ISH</li>

                        </ul>
                    </div>
                </div>
                <div className={style.descriptionBlock}>
                    <h2 className={style.descriptionTitle}>We work around the world</h2>
                    <p className={style.descriptionText}>Our work is based on close relations and business wise
                        flexibility world- <br/>wide. Advanced
                        management system and hi tech facility allows us to <br/>manage big projects in short time </p>
                </div>

            </div>
        </div>
    );
};

export default Paris;