import Link from 'next/link';
import Image from 'next/image';
import NavMenu from './nav-menu';
import LangLogo from "@assets/img/logo/logo-lang.png";
import useSticky from '@/src/hooks/use-sticky';
import HamburgerBtn from '@/src/svg/hamburger-btn';
import React, { useEffect, useRef, useState } from 'react'; 
import HomeIcon from '@/src/svg/home-icon';
import SearchPopup from '@/src/modals/search-popup';
import Sidebar from '@/src/modals/sidebar';
import Logo from "@assets/img/logo/logo.png";

const HeaderOne = () => {
   const {sticky}  =  useSticky()
   const langToggleRef = useRef(null);
   const [searchOpen, setSearchOpen] = useState(false)
   const [sidebarOpen, setSidebarOpen] = useState(false)

   const [isLangListOpen, setIsLangListOpen] = useState(false);
   useEffect(() => {
     if (langToggleRef.current) {
       const handleClickOutside = (e) => {
         if (langToggleRef.current.contains(e.target)) {
           setIsLangListOpen(!isLangListOpen);
         } else {
           setIsLangListOpen(false);
         }
       };
       window.addEventListener('click', handleClickOutside);
       return () => {
         window.removeEventListener('click', handleClickOutside);
       };
     }
   }, [isLangListOpen, langToggleRef]);


    return (
        <>
            <header className="tp-header-area tp-header-height p-relative">
               <div className="tp-header-top tp-header-space d-none d-xl-block">
                  <div className="container-fluid">
                     <div className="row align-items-center">
                        <div className="col-xxl-6 col-xl-8">
                           <div className="tp-header-top-info">
                              <ul>
                                 <li>
                                    <a href="https://www.google.com/maps/place/DragonFlyPads,+Bureau+46,+128+Rue+de+la+Boétie,+75008+Paris,+France" 
                                    target="_blank"><span>
                                       <i className="fa-sharp fa-solid fa-location-dot"></i>
                                       </span>DragonFlyPads, Bureau 46, 128 Rue de la Boétie, 75008 Paris, France</a>
                                 </li>
                                 <li>
                                    <a href="mailto:contact@dragonflypads.com"><span>
                                       <i className="fa-solid fa-envelope"></i></span>contact@dragonflypads.com
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-xxl-6 col-xl-4">
                           <div className="tp-header-top-right d-flex justify-content-end align-items-center">
                              <div className="header-call">
                                 <a href="tel:+33616646885"><i className="fa-solid fa-phone"></i> +33 (0) 6 16646885</a>
                              </div>
                              <div className="header-social d-xxl-block d-none">
                                 <Link href="https://www.facebook.com/Dragonflypads" target="_blank"><i className="fa-brands fa-facebook"></i> Facebook</Link>
                                 <Link href="https://x.com/dragonflypads" target="_blank">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg> Twitter/X
                                 </Link>
                                 <Link href="https://linkedin.com/company/dragonflypads" target="_blank"><i className="fa-brands fa-linkedin"></i> Linkedin</Link>
                                 <Link href="https://wa.me/+33616646885" target="_blank"><i className="fa-brands fa-whatsapp"></i> WhatsApp</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="header-sticky" 
               className={`tp-header-bottom header__sticky p-relative ${sticky && "tp-header-sticky"}`}>
                  <div className="tp-header-bottom-space p-relative">
                     <div className="container-fluid gx-0">
                        <div className="row gx-0 align-items-center">
                           <div className="col-xxl-3 col-xl-3">
                           <div className="tp-header-main-left d-flex align-items-center p-relative">
                              <div className="tp-header-hamburger-btn offcanvas-open-btn" 
                               style={{backgroundImage: `url(/assets/img/icon/header-hamburger-shape.png)`}}
                               onClick={() => setSidebarOpen(true)}>
                                 <button className="hamburger-btn">
                                    <span> <HamburgerBtn /></span>
                                 </button>
                                 </div>
                                 <div className="tp-header-logo">
                                    <Link href="/">
                                       <Image src={Logo} alt="theme-pure" style={{width: '50%', height: 'auto'}} />
                                    </Link>
                                 </div>
                              </div>
                              </div>
                           <div className="col-xxl-6 col-xl-6 d-none d-xl-block">
                              <div className="tp-main-menu-area counter d-flex align-items-center">
                                 <div className="tp-main-menu menu-icon">
                                 <span className="header-icon"><HomeIcon /></span>
                                  <nav id="tp-mobile-menu">
                                       <NavMenu /> 
                                    </nav>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xxl-3 col-xl-3">
                           <div className="tp-header-main-right d-flex align-items-center justify-content-xl-end">
                                 <div className="tp-header-btn d-none d-xl-block">
                                    <Link className="tp-btn" href="mailto:contact@dragonflypads.com">Contact us</Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <SearchPopup searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </>
    );
};

export default HeaderOne;