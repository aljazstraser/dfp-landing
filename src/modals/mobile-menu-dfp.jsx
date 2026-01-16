import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import menu_data from '@/src/layout/headers/menu-data';
import HomeIcon from '@/src/svg/home-icon';
import Logo from "@assets/img/logo/logo.png";

const MobileMenuDfp = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  // Menu item handlers (same as NavMenuDfp)
  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handlePlatformClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#platform-section');
    if (element) {
      const headerHeight = 160;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleBusinessModelClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#business-model-section');
    if (element) {
      const headerHeight = 160;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleTechnologyClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#technology-section');
    if (element) {
      const headerHeight = 160;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleUseCasesClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#use-cases-section');
    if (element) {
      const headerHeight = 160;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handlePartnersClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#partners-section');
    if (element) {
      const headerHeight = 160;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleCompanyClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#company-section');
    if (element) {
      const headerHeight = 160;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact-section');
    if (element) {
      const headerHeight = 160;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  return (
    <>
      <style jsx>{`
              .mobile-menu-dfp {
                position: fixed;
                top: -100vh;
                left: 0;
                right: 0;
                width: 100%;
                height: 100vh;
                height: 100dvh;
                background: #fff;
                z-index: 99999;
                transition: top 0.3s ease-in-out, transform 0.3s ease-in-out;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                overflow-y: auto;
                padding-top: env(safe-area-inset-top);
                transform: translateY(-100%);
              }

              .mobile-menu-dfp.menu-open {
                top: 0;
                transform: translateY(0);
              }
        
        .mobile-menu-dfp__header {
          height: 109px;
          padding: 0 30px;
          padding-right: 0;
          border-bottom: 1px solid #e6edf2;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fff;
          position: sticky;
          top: 0;
          z-index: 1;
          position: relative;
        }
        
        @media (max-width: 1199px) {
          .mobile-menu-dfp__header {
            height: 100px;
          }
        }
        
        @media (max-width: 991px) {
          .mobile-menu-dfp__header {
            height: 100px;
          }
        }
        
        @media (max-width: 767px) {
          .mobile-menu-dfp__header {
            height: 100px;
          }
        }
        
        @media (max-width: 575px) {
          .mobile-menu-dfp__header {
            height: 100px;
          }
        }
        
        .mobile-menu-dfp__logo {
          height: 46px;
          width: auto;
        }
        
        .mobile-menu-dfp__logo img {
          height: 46px !important;
          width: auto !important;
        }
        
        .mobile-menu-dfp__close {
          background: var(--tp-theme-primary, #364152);
          background-image: url(/assets/img/icon/header-hamburger-shape.png);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          width: 175px;
          height: 100px;
          line-height: 100px;
          text-align: center;
          cursor: pointer;
          border: none;
          padding: 0;
          margin: 0;
          position: absolute;
          right: 0;
          top: 0;
        }
        
        .mobile-menu-dfp__close .close-btn {
          background: none;
          border: none;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .mobile-menu-dfp__close .close-btn span {
          color: var(--tp-common-white, #fff);
          display: inline-block;
        }
        
        @media (max-width: 1199px) {
          .mobile-menu-dfp__close {
            height: 100px;
            line-height: 100px;
            width: 150px;
          }
        }
        
        @media (max-width: 991px) {
          .mobile-menu-dfp__close {
            height: 100px;
            line-height: 100px;
            width: 150px;
          }
        }
        
        @media (max-width: 767px) {
          .mobile-menu-dfp__close {
            width: 110px;
            height: 100px;
            line-height: 100px;
          }
        }
        
        @media (max-width: 575px) {
          .mobile-menu-dfp__close {
            width: 110px;
            height: 100px;
            line-height: 100px;
          }
        }
        
        .mobile-menu-dfp__content {
          padding: 20px;
        }
        
        .mobile-menu-dfp__content {
          padding: 0 30px 20px;
          display: flex;
          flex-direction: column;
          counter-reset: count;
        }
        
        .mobile-menu-dfp__content .mobile-menu-item {
          position: relative;
          padding: 0;
          border-bottom: 1px solid #f0f0f0;
          width: 100%;
        }
        
        .mobile-menu-dfp__content .mobile-menu-item:last-child {
          border-bottom: none;
        }
        
        .mobile-menu-dfp__content .mobile-menu-item .tp-main-menu {
          position: relative;
          padding-left: 40px;
        }
        
        
        .mobile-menu-dfp__content .mobile-menu-item .tp-main-menu .header-icon {
          position: absolute;
          left: 15px;
          top: 35%;
          color: #5b9bd4;
        }
        
        .mobile-menu-dfp__content .mobile-menu-item .tp-main-menu .header-icon.home-icon {
          display: block;
        }
        
        .mobile-menu-dfp__content .mobile-menu-item .tp-main-menu .header-icon.arrow-icon {
          display: block;
        }
        
        .mobile-menu-dfp__content .mobile-menu-item .tp-main-menu .header-icon.arrow-icon i {
          font-size: 10px;
          color: #5b9bd4;
        }
        
        .mobile-menu-dfp__content .mobile-menu-item .tp-main-menu ul {
          list-style: none;
          padding: 0;
          margin: 0;
          counter-reset: none;
        }
        
        .mobile-menu-dfp__content .mobile-menu-item .tp-main-menu ul li {
          margin: 0;
          padding: 0;
        }
        
        .mobile-menu-dfp__content .mobile-menu-item .tp-main-menu ul li a {
          position: relative;
          display: block;
          padding: 40px 0 20px 0;
          padding-left: 30px;
          padding-right: 50px;
          color: var(--tp-text-1, #364152);
          text-decoration: none;
          font-family: var(--tp-ff-poppins, 'Poppins', sans-serif);
          font-size: 16px;
          font-weight: 500;
          line-height: 21px;
          text-transform: capitalize;
          transition: color 0.3s ease;
          width: 100%;
        }
        
        .mobile-menu-dfp__content .mobile-menu-item .tp-main-menu ul li a:hover {
          color: #5b9bd4;
        }
        
        .mobile-menu-dfp__content .mobile-menu-item .tp-main-menu ul li a span {
          position: relative;
          display: inline-block;
          transform-origin: left bottom;
          will-change: transform;
          transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, -webkit-transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
        }
        
        .mobile-menu-dfp__content .mobile-menu-item .tp-main-menu ul li a span {
          counter-increment: count;
        }
        
        .mobile-menu-dfp__content .mobile-menu-item .tp-main-menu ul li a span::after {
          position: absolute;
          content: counter(count, decimal-leading-zero);
          left: 0;
          top: -40px;
          color: #939daf;
          font-family: var(--tp-ff-poppins, 'Poppins', sans-serif);
          font-size: 12px;
          font-weight: 500;
        }
        
        .mobile-menu-dfp__content .mobile-menu-item .tp-main-menu ul li a i {
          margin-left: 10px;
          font-size: 10px;
          color: #5b9bd4;
        }
        .mobile-menu-dfp__content .mobile-menu-item .tp-main-menu ul li a:hover i {
          color: #5b9bd4;
        }
        
        .mobile-menu-dfp__content .mobile-menu-item .tp-main-menu ul li .submenu {
          display: block;
          position: static;
          opacity: 1;
          visibility: visible;
          transform: none;
          box-shadow: none;
          background: transparent;
          padding: 0;
          margin: 0;
          padding-left: 25px;
          padding-top: 10px;
          padding-bottom: 10px;
        }
        
        .mobile-menu-dfp__content .mobile-menu-item .tp-main-menu ul li .submenu li {
          padding: 0 25px;
          border-bottom: none;
          margin: 0;
        }
        
        .mobile-menu-dfp__content .mobile-menu-item .tp-main-menu ul li .submenu li a {
          padding: 10px 0;
          font-size: 13px;
          color: var(--tp-common-black, #000);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          text-transform: none;
        }
        
        .mobile-menu-dfp__content .mobile-menu-item .tp-main-menu ul li .submenu li:last-child a {
          border-bottom: 0;
        }
        
        .mobile-menu-dfp__overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 99998;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
        }
        
        .mobile-menu-dfp__overlay.overlay-open {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
      
      {/* Overlay */}
      <div 
        className={`mobile-menu-dfp__overlay ${mobileMenuOpen ? 'overlay-open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      
      {/* Mobile Menu */}
      <div className={`mobile-menu-dfp ${mobileMenuOpen ? 'menu-open' : ''}`}>
        <div className="mobile-menu-dfp__header">
          <div className="mobile-menu-dfp__logo">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}>
              <Image src={Logo} alt="DragonFlyPads" style={{height: '46px', width: 'auto'}} />
            </a>
          </div>
          <div 
            className="mobile-menu-dfp__close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <button className="close-btn">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4L20 20M20 4L4 20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="mobile-menu-dfp__content">
          {menu_data.map((menu_item, i) => {
            const isHome = menu_item.title === "Home";
            const isCompany = menu_item.title === "Company";
            const isServices = menu_item.title === "Services";
            const isPages = menu_item.title === "Pages";
            const isBlog = menu_item.title === "Blog";
            const isContact = menu_item.title === "Contact";
            
            if (isContact || isHome) {
              return null;
            }
            
            return (
              <div key={i} className="mobile-menu-item">
                <div className="tp-main-menu menu-icon">
                  {isHome ? (
                    <span className="header-icon home-icon"><HomeIcon /></span>
                  ) : (
                    <span className="header-icon arrow-icon"><i className="fa-solid fa-arrow-down"></i></span>
                  )}
                  <ul>
                    <li className={isHome ? "home-item" : ""}>
                      {isHome ? (
                        <a href="#" onClick={handleHomeClick}>
                          <span></span>
                          {menu_item.title}
                          <i className="fa-solid fa-arrow-up" style={{marginLeft: '8px', fontSize: '12px'}}></i>
                        </a>
                      ) : isCompany ? (
                        <a href="#" onClick={handlePlatformClick}>
                          <span></span>
                          Platform
                          <i className="fa-solid fa-arrow-down" style={{marginLeft: '8px', fontSize: '12px'}}></i>
                        </a>
                      ) : isServices ? (
                        <a href="#" onClick={handleBusinessModelClick}>
                          <span></span>
                          Business Model
                          <i className="fa-solid fa-arrow-down" style={{marginLeft: '8px', fontSize: '12px'}}></i>
                        </a>
                      ) : isPages ? (
                        <a href="#" onClick={handleTechnologyClick}>
                          <span></span>
                          Technology
                          <i className="fa-solid fa-arrow-down" style={{marginLeft: '8px', fontSize: '12px'}}></i>
                        </a>
                      ) : isBlog ? (
                        <a href="#" onClick={handleUseCasesClick}>
                          <span></span>
                          Use Cases
                          <i className="fa-solid fa-arrow-down" style={{marginLeft: '8px', fontSize: '12px'}}></i>
                        </a>
                      ) : (
                        <Link href={menu_item.link}> 
                          <span></span>
                          {menu_item.title}
                          {menu_item.has_dropdown && (
                            <i className="fa-solid fa-arrow-down" style={{marginLeft: '8px', fontSize: '12px'}}></i>
                          )}
                        </Link>
                      )}
                      {menu_item.has_dropdown && menu_item.title !== "Home" && menu_item.title !== "Company" && menu_item.title !== "Services" && menu_item.title !== "Pages" && menu_item.title !== "Blog" && (
                        <ul className="submenu"> 
                          {menu_item.sub_menus.map((sub_menu, j) => (
                            <li key={j}>  
                              <Link href={sub_menu.link}><span>{sub_menu.title}</span></Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
          {/* Add Partners menu item */}
          <div className="mobile-menu-item">
            <div className="tp-main-menu menu-icon">
              <span className="header-icon arrow-icon"><i className="fa-solid fa-arrow-down"></i></span>
              <ul>
                <li>
                  <a href="#" onClick={handlePartnersClick}>
                    <span></span>
                    Partners
                    <i className="fa-solid fa-arrow-down" style={{marginLeft: '8px', fontSize: '12px'}}></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Add Company menu item */}
          <div className="mobile-menu-item">
            <div className="tp-main-menu menu-icon">
              <span className="header-icon arrow-icon"><i className="fa-solid fa-arrow-down"></i></span>
              <ul>
                <li>
                  <a href="#" onClick={handleCompanyClick}>
                    <span></span>
                    Company
                    <i className="fa-solid fa-arrow-down" style={{marginLeft: '8px', fontSize: '12px'}}></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Add Contact menu item */}
          {menu_data.find(item => item.title === "Contact") && (
            <div className="mobile-menu-item">
              <div className="tp-main-menu menu-icon">
                <span className="header-icon arrow-icon"><i className="fa-solid fa-arrow-down"></i></span>
                <ul>
                  <li>
                    <a href="#" onClick={handleContactClick}>
                      <span></span>
                      {menu_data.find(item => item.title === "Contact").title}
                      <i className="fa-solid fa-arrow-down" style={{marginLeft: '8px', fontSize: '12px'}}></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileMenuDfp;

