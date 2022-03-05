import React from 'react';
import style from "./Header.module.scss"
import logo from "../../assets/images/logo.png"
import logoName from "../../assets/images/logo_name.png"

const Header = () => {
    return (
        <>
            <nav className="navbar" style={{ backgroundColor: "#9d0a0f", padding:"0"}}>
                <div className={style.container}>
                    <div
                        className={style.logoBlock}
                        href="#home">
                        <img
                            className={style.image}
                            alt="logo"
                            src={logo}

                        />
                        <img
                            className={style.imageName}
                            alt="logo"
                            src={logoName}
                        />
                    </div>
                    <div className={style.navbarLinks}>
                        <p>OUR WORK</p>
                        <p>TECHNOLOGY PROCESS</p>
                    </div>
                    <div className={style.navbarLinks}>
                        <p>ABOUT US</p>
                        <p>CONTACT</p>
                        <div className="dropdown" >
                            <button className="btn  dropdown-toggle "  id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
                                {/*&#9660;*/}

                            </button>
                            <ul className="dropdown-menu" >
                                <li><a className="dropdown-item" href="#">Pl</a></li>
                                <li><a className="dropdown-item" href="#">En</a></li>
                            </ul>
                            <span className="fs-7 link-light">PL</span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;