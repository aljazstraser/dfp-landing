import Link from 'next/link';
import Image from 'next/image';
import NavMenuDfp from './nav-menu-dfp';
import LangLogo from "@assets/img/logo/logo-lang.png";
// Removed useSticky - header is now always fixed
import HamburgerBtn from '@/src/svg/hamburger-btn';
import React, { useEffect, useRef, useState } from 'react'; 
import HomeIcon from '@/src/svg/home-icon';
import SearchPopup from '@/src/modals/search-popup';
import MobileMenuDfp from '@/src/modals/mobile-menu-dfp';
import Logo from "@assets/img/logo/logo.png";

const HeaderDfp = () => {
   // Header is always fixed - top section hides on scroll
   const langToggleRef = useRef(null);
   const [searchOpen, setSearchOpen] = useState(false)
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
   const [showTopHeader, setShowTopHeader] = useState(true)

   const [isLangListOpen, setIsLangListOpen] = useState(false);
   
   // Handle scroll to hide/show top header
   useEffect(() => {
     // Set initial state immediately
     const initialScrollY = window.scrollY || window.pageYOffset;
     const initialShouldShow = initialScrollY < 50;
     setShowTopHeader(initialShouldShow);
     if (!initialShouldShow) {
       document.body.classList.add('header-top-hidden');
     }
     
     const handleScroll = () => {
       const scrollY = window.scrollY || window.pageYOffset;
       // Show top header when at top (within 50px), hide when scrolled down
       const shouldShow = scrollY < 50;
       setShowTopHeader(shouldShow);
       
       // Add class to body for CSS targeting
       if (shouldShow) {
         document.body.classList.remove('header-top-hidden');
       } else {
         document.body.classList.add('header-top-hidden');
       }
     };
     
     window.addEventListener('scroll', handleScroll, { passive: true });
     return () => {
       window.removeEventListener('scroll', handleScroll);
       document.body.classList.remove('header-top-hidden');
     };
   }, []);

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
            <style jsx>{`
                .tp-header-logo img {
                    height: 46px !important;
                    width: auto !important;
                }
                @media (max-width: 1199px) {
                    .tp-header-logo img {
                        height: 46px !important;
                        width: auto !important;
                    }
                }
                @media (max-width: 991px) {
                    .tp-header-logo img {
                        height: 46px !important;
                        width: auto !important;
                    }
                }
                @media (max-width: 767px) {
                    .tp-header-logo img {
                        height: 46px !important;
                        width: auto !important;
                    }
                }
                @media (max-width: 575px) {
                    .tp-header-logo img {
                        height: 46px !important;
                        width: auto !important;
                    }
                }
                .tp-header-main-left::after {
                    display: none !important;
                    content: none !important;
                }
                @media (max-width: 991px) {
                    .tp-header-bottom .tp-header-logo {
                        height: 100px !important;
                        line-height: 100px !important;
                    }
                    .tp-header-bottom .tp-header-hamburger-btn {
                        height: 100px !important;
                        line-height: 100px !important;
                    }
                }
                .tp-header-bottom-space {
                    padding-right: 0px !important;
                }
                @media (min-width: 992px) {
                    .tp-header-bottom-space {
                        padding-right: 0px !important;
                    }
                }
                @media (min-width: 1400px) {
                    .tp-header-bottom-space {
                        padding-right: 0px !important;
                    }
                }
                .tp-header-bottom-space .container-fluid {
                    padding-left: 0px !important;
                    padding-right: 0px !important;
                }
                .tp-header-bottom-space .row {
                    padding-left: 0px !important;
                    padding-right: 0px !important;
                }
                .tp-header-bottom-space .col-auto {
                    padding-left: 0 !important;
                    padding-right: 0 !important;
                }
                @media (min-width: 992px) {
                    .tp-header-bottom-space .container-fluid {
                        padding-left: 0 !important;
                        padding-right: 0 !important;
                    }
                    .tp-header-bottom-space .col-auto {
                        padding-left: 0 !important;
                        padding-right: 0 !important;
                    }
                    .tp-header-main-left {
                        padding-left: 32px !important;
                        padding-right: 0 !important;
                        margin-left: 0 !important;
                    }
                    .tp-header-logo {
                        padding-left: 0 !important;
                    }
                }
                @media (min-width: 1200px) {
                    .tp-header-main-left {
                        padding-left: 32px !important;
                        padding-right: 0 !important;
                    }
                }
                @media (min-width: 1400px) {
                    .tp-header-main-left {
                        padding-left: 32px !important;
                        padding-right: 0 !important;
                    }
                }
                @media (min-width: 1600px) {
                    .tp-header-main-left {
                        padding-left: 32px !important;
                        padding-right: 0 !important;
                    }
                }
                    .tp-header-top .container-fluid {
                        width: 100% !important;
                        max-width: 100% !important;
                        padding-left: 46px !important;
                        padding-right: 40px !important;
                    }
                    .tp-header-top .col-xxl-8 {
                        padding-left: 0 !important;
                    }
                    .tp-header-top .col-xxl-4 {
                        padding-right: 0 !important;
                    }
                    .tp-main-menu-area {
                        justify-content: flex-end !important;
                        width: 100%;
                        padding-right: 24px !important;
                        gap: 64px !important;
                    }
                    .tp-header-hamburger-btn {
                        margin-right: 0 !important;
                        flex-shrink: 0 !important;
                    }
                    .header-icon-hidden {
                        display: none !important;
                    }
                    ul li {
                        margin-right: 16px !important;
                    }
                    ul li a {
                        font-size: 12px !important;
                    }
                    .tp-header-top-info ul li a {
                        font-size: 14px !important;
                    }
                    .header-call a {
                        font-size: 14px !important;
                        line-height: 24px !important;
                        font-weight: 400 !important;
                        color: var(--tp-theme-primary) !important;
                        display: inline-block !important;
                    }
                    .header-call a span {
                        color: var(--tp-theme-secondary) !important;
                        display: inline-block !important;
                        margin-right: 7px !important;
                    }
                    .header-call a span i {
                        font-size: inherit !important;
                        height: auto !important;
                        width: auto !important;
                        line-height: inherit !important;
                        border-radius: 0 !important;
                        text-align: left !important;
                        background: none !important;
                        color: #5b9bd4 !important;
                        transform: none !important;
                    }
                    .tp-header-top-info ul li a span i {
                        color: #5b9bd4 !important;
                    }
                    .tp-header-top-info ul li a:hover span i {
                        color: #5b9bd4 !important;
                    }
                    .header-call a:hover span i {
                        color: #5b9bd4 !important;
                    }
                    /* Counter number position - align to right of label */
                    .tp-main-menu-area.counter .tp-main-menu nav ul li a {
                        position: relative;
                        display: inline-flex;
                        align-items: center;
                    }
                    .tp-main-menu-area.counter .tp-main-menu nav ul li a .menu-item-label {
                        position: relative;
                        display: inline-block;
                    }
                    ul li.home-item .home-menu-link .home-icon-inline {
                        color: #16A2AE !important;
                    }
                    ul li.home-item .home-menu-link .home-icon-inline svg {
                        width: 12px;
                        height: 12px;
                        color: #16A2AE !important;
                    }
                    ul li.home-item .home-menu-link .home-icon-inline svg path {
                        fill: #16A2AE !important;
                    }
                    ul li.home-item .home-menu-link .home-icon-inline::after {
                        display: none !important;
                        content: none !important;
                    }
                }
                .tp-header-area {
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    right: 0 !important;
                    width: 100% !important;
                    max-width: 100vw !important;
                    z-index: 9999 !important;
                    background: #ffffff !important;
                    box-shadow: 0px 4px 10px rgba(3, 4, 28, 0.1) !important;
                    overflow-x: hidden !important;
                }
                .tp-header-area * {
                    max-width: 100% !important;
                }
                @media (max-width: 991px) {
                    .tp-header-top .container-fluid {
                        padding-left: 15px !important;
                        padding-right: 15px !important;
                    }
                    .tp-header-bottom-space .container-fluid {
                        padding-left: 15px !important;
                        padding-right: 15px !important;
                    }
                }
                .tp-header-top {
                    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, max-height 0.3s ease-in-out !important;
                    transform-origin: top !important;
                }
                .tp-header-top.hidden {
                    transform: translateY(-100%) !important;
                    opacity: 0 !important;
                    max-height: 0 !important;
                    overflow: hidden !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .tp-header-bottom {
                    position: relative !important;
                    top: 0 !important;
                    transform: none !important;
                    transition: none !important;
                }
                @media (max-width: 991px) {
                    .tp-header-area {
                        top: 0 !important;
                        transform: none !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    .tp-header-bottom {
                        top: 0 !important;
                        transform: none !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                }
                /* When top header is visible, account for full height */
                #__next > main {
                    padding-top: 0 !important;
                    transition: padding-top 0.3s ease-in-out !important;
                }
                @media (min-width: 1200px) {
                    #__next > main {
                        padding-top: 162px !important;
                    }
                    body.header-top-hidden #__next > main {
                        padding-top: 101px !important;
                    }
                }
                @media (max-width: 1199px) {
                    #__next > main {
                        padding-top: 161px !important;
                    }
                    body.header-top-hidden #__next > main {
                        padding-top: 100px !important;
                    }
                }
                @media (max-width: 991px) {
                    #__next > main {
                        padding-top: 161px !important;
                    }
                    body.header-top-hidden #__next > main {
                        padding-top: 100px !important;
                    }
                }
            `}</style>
            <style dangerouslySetInnerHTML={{__html: `
                html, body {
                    overflow-x: hidden !important;
                    max-width: 100vw !important;
                    width: 100% !important;
                }
                header.tp-header-area {
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    right: 0 !important;
                    width: 100% !important;
                    max-width: 100vw !important;
                    z-index: 9999 !important;
                    background: #ffffff !important;
                    box-shadow: 0px 4px 10px rgba(3, 4, 28, 0.1) !important;
                    overflow-x: hidden !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                header.tp-header-area * {
                    max-width: 100% !important;
                }
                @media (max-width: 991px) {
                    .tp-header-area {
                        top: 0 !important;
                        transform: none !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    .tp-header-bottom {
                        top: 0 !important;
                        transform: none !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    .tp-header-top .container-fluid {
                        padding-left: 15px !important;
                        padding-right: 15px !important;
                    }
                    .tp-header-bottom-space .container-fluid {
                        padding-left: 15px !important;
                        padding-right: 15px !important;
                    }
                }
                #__next > main {
                    padding-top: 0 !important;
                }
                @media (min-width: 1200px) {
                    #__next > main {
                        padding-top: 162px !important;
                        transition: padding-top 0.3s ease-in-out !important;
                    }
                    body.header-top-hidden #__next > main {
                        padding-top: 101px !important;
                    }
                }
                @media (max-width: 1199px) {
                    #__next > main {
                        padding-top: 161px !important;
                        transition: padding-top 0.3s ease-in-out !important;
                    }
                    body.header-top-hidden #__next > main {
                        padding-top: 100px !important;
                    }
                }
                @media (max-width: 991px) {
                    #__next > main {
                        padding-top: 161px !important;
                        transition: padding-top 0.3s ease-in-out !important;
                    }
                    body.header-top-hidden #__next > main {
                        padding-top: 100px !important;
                    }
                }
            `}} />
            <header className={`tp-header-area tp-header-height p-relative ${!showTopHeader ? 'tp-header-top-hidden' : ''}`}>
               <div className={`tp-header-top d-none d-xl-block ${!showTopHeader ? 'hidden' : ''}`}>
                  <div className="container-fluid">
                     <div className="row align-items-center">
                        <div className="col-xxl-8 col-xl-8">
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
                        <div className="col-xxl-4 col-xl-4">
                           <div className="tp-header-top-right d-flex justify-content-end align-items-center">
                              <div className="header-call">
                                 <a href="tel:+33616646885"><span><i className="fa-solid fa-phone"></i></span> +33 (0) 6 16646885</a>
                              </div>
                              <div className="header-social d-xxl-block d-none">
                                 <Link href="https://www.facebook.com/Dragonflypads" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                                 <Link href="https://x.com/dragonflypads" target="_blank">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                 </Link>
                                 <Link href="https://linkedin.com/company/dragonflypads" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                                 <Link href="https://wa.me/+33616646885" target="_blank"><i className="fa-brands fa-whatsapp"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="header-sticky" 
               className="tp-header-bottom header__sticky p-relative">
                  <div className="tp-header-bottom-space p-relative">
                     <div className="container-fluid gx-0">
                        <div className="row gx-0 align-items-center">
                           <div className="col-auto">
                           <div className="tp-header-main-left d-flex align-items-center p-relative">
                                 <div className="tp-header-logo">
                                    <a href="#" onClick={(e) => {
                                       e.preventDefault();
                                       window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}>
                                       <Image src={Logo} alt="theme-pure" style={{height: '46px', width: 'auto'}} />
                                    </a>
                                 </div>
                              </div>
                              </div>
                           <div className="col-auto d-lg-none ms-auto">
                              <div className="tp-header-hamburger-btn offcanvas-open-btn" 
                               style={{backgroundImage: `url(/assets/img/icon/header-hamburger-shape.png)`}}
                               onClick={() => setMobileMenuOpen(true)}>
                                 <button className="hamburger-btn">
                                    <span> <HamburgerBtn /></span>
                                 </button>
                              </div>
                           </div>
                           <div className="col d-none d-lg-block">
                              <div className="tp-main-menu-area counter d-flex align-items-center justify-content-end">
                                 <div className="tp-main-menu menu-icon">
                                 <span className="header-icon header-icon-hidden"><HomeIcon /></span>
                                  <nav id="tp-mobile-menu">
                                       <NavMenuDfp /> 
                                    </nav>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <SearchPopup searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
            <MobileMenuDfp mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </>
    );
};

export default HeaderDfp;
