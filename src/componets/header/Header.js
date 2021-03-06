import React, {useState} from 'react';
import style from "./Header.module.scss"
import logo from "../../assets/images/logo.png"
import logoName from "../../assets/images/logo_name.png"
import {PATH} from "../Routes";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [pl, setPl] = useState(true);

    return (
        <header>
            <nav className="navbar " style={{ backgroundColor: "#9d0a0f", padding:"0"}}>
                <div className={style.container}>
                    <div className={style.logoBlock}>
                        <NavLink to={PATH.HOME}>
                        <img
                            className={style.image}
                            alt="logo"
                            src={logo}
                        />
                        </NavLink>
                      <div className={style.imageNameBlock}>
                          <img
                              className={style.imageName}
                              alt="logo"
                              src={logoName}
                          />
                      </div>

                    </div>
                    <div className={style.navbarLinks}>
                        <p>OUR WORK</p>
                        <p>TECHNOLOGY PROCESS</p>
                    </div>
                    <div className={style.navbarLinks}>

                    </div>
                    <div className={style.navbarLinks}>
                        <p>ABOUT US</p>
                        <p>CONTACT</p>
                        <div className="dropdown" >
                            <button className="btn  dropdown-toggle "  id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>


                            </button>
                            <ul className="dropdown-menu" >
                                <li><a className="dropdown-item" onClick={() => setPl(true)}>Pl</a></li>
                                <li><a className="dropdown-item" onClick={() => setPl(false)}>En</a></li>
                            </ul>
                            <span className="fs-7 link-light">{pl ? "PL" : "EN"}</span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;