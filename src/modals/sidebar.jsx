import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import Logo from "@assets/img/logo/logo.png";

const Sidebar = ({sidebarOpen, setSidebarOpen, home_three}) => {

    return (
        <>
            <div className={`offcanvas__area ${sidebarOpen ? "offcanvas-opened" : ""} ${home_three ? "home-3-pos" : ""}`}>
                <div className="offcanvas__wrapper">
                    <div className="offcanvas__close">
                        <button className="offcanvas__close-btn offcanvas-close-btn" onClick={() => setSidebarOpen(false)}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1 1L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                <div className="offcanvas__content">
                    <div className="offcanvas__top mb-50 d-flex justify-content-between align-items-center">
                        <div className="offcanvas__logo logo">
                            <Link href="/">
                            <Image src={Logo} alt="logo" style={{width: '33.33%', height: 'auto'}} />
                            </Link>
                        </div>
                    </div>
                    <div className="offcanvas__contact">
                        <h4 className="offcanvas__title">Contacts</h4>
                        <div className="offcanvas__contact-content d-flex">
                            <div className="offcanvas__contact-content-icon">
                            <i className="fa-sharp fa-solid fa-location-dot"></i>
                            </div>
                            <div className="offcanvas__contact-content-content">
                            <a href="https://www.google.com/maps/search/86+Road+Broklyn+Street,+600+New+York,+USA/@40.6897806,-74.0278086,12z/data=!3m1!4b1">86 Road Broklyn Street, 600 </a>
                            </div>
                        </div>
                        <div className="offcanvas__contact-content d-flex">
                            <div className="offcanvas__contact-content-icon">
                            <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="offcanvas__contact-content-content">
                            <a href="mailto:needhelp@company.com">Needhelp@company.com  </a>
                            </div>
                        </div>
                        <div className="offcanvas__contact-content d-flex">
                            <div className="offcanvas__contact-content-icon">
                            <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="offcanvas__contact-content-content">
                            <a href="tel:01310-069824"> +92 666 888 0000</a>
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas__social"> 
                        <a className="icon facebook" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="icon twitter" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="icon youtube" href="#"><i className="fab fa-youtube"></i></a>
                        <a className="icon linkedin" href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                </div>
            </div>
         <div className={`body-overlay ${sidebarOpen && "opened"}`} onClick={() => setSidebarOpen(false)}></div>
        </>
    );
};

export default Sidebar;