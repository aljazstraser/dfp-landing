import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import HomeIcon from '@/src/svg/home-icon';
import menu_data from "./menu-data";
import { navigateHome, navigateToSection } from "@/src/utils/scroll-to-section";

const NavMenuDfp = () => {
  const router = useRouter();

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigateHome(router);
  };

  const handlePlatformClick = (e) => {
    e.preventDefault();
    navigateToSection("platform-section", router);
  };

  const handleBusinessModelClick = (e) => {
    e.preventDefault();
    navigateToSection("business-model-section", router);
  };

  const handleTechnologyClick = (e) => {
    e.preventDefault();
    navigateToSection("technology-section", router);
  };

  const handleUseCasesClick = (e) => {
    e.preventDefault();
    navigateToSection("use-cases-section", router);
  };

  const handlePartnersClick = (e) => {
    e.preventDefault();
    navigateToSection("partners-section", router);
  };

  const handleCompanyClick = (e) => {
    e.preventDefault();
    navigateToSection("company-section", router);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    navigateToSection("contact-section", router);
  };

  return (
    <>
      <style jsx>{`
        ul li {
          margin-right: 24px !important;
        }
        ul li:last-child {
          margin-right: 0 !important;
        }
        ul li a {
          font-size: 15px !important;
        }
        ul li.home-item .home-menu-link .home-icon-inline {
          counter-increment: none !important;
        }
        ul li.home-item .home-menu-link .home-icon-inline::after {
          display: none !important;
        }
        ul li a .menu-item-arrow i,
        ul li .menu-item-arrow i {
          color: #5b9bd4 !important;
        }
        ul li a:hover .menu-item-arrow i,
        ul li:hover .menu-item-arrow i,
        ul li:hover > a .menu-item-arrow i {
          color: #5b9bd4 !important;
        }
        ul li a:hover .menu-item-label,
        ul li:hover .menu-item-label,
        ul li:hover > a .menu-item-label {
          color: #5b9bd4 !important;
        }
        ul li:hover > a {
          color: #5b9bd4 !important;
        }
      `}</style>
      <ul> 
        {menu_data.map((menu_item, i) => {
          // Custom handling for specific menu items
          const isHome = menu_item.title === "Home";
          const isCompany = menu_item.title === "Company";
          const isServices = menu_item.title === "Services";
          const isPages = menu_item.title === "Pages";
          const isBlog = menu_item.title === "Blog";
          const isContact = menu_item.title === "Contact";
          
          // Skip Contact and Home from the original loop since we'll add Contact manually
          if (isContact || isHome) {
            return null;
          }
          
          return (
            <li key={i} className={isHome ? "home-item" : ""}>
              {isHome ? (
                <a href="#" onClick={handleHomeClick} className="home-menu-link">
                  {menu_item.title}
                  <span className="home-icon-inline" style={{marginLeft: '8px', display: 'inline-block'}}>
                    <HomeIcon />
                  </span>
                </a>
              ) : isCompany ? (
                <a href="#" onClick={handlePlatformClick} className="menu-item-with-arrow">
                  <span className="menu-item-label">Platform</span>
                  <span className="menu-item-arrow"><i className="fa-solid fa-arrow-down" style={{marginLeft: '8px', fontSize: '12px'}}></i></span>
                </a>
              ) : isServices ? (
                <a href="#" onClick={handleBusinessModelClick} className="menu-item-with-arrow">
                  <span className="menu-item-label">Business Model</span>
                  <span className="menu-item-arrow"><i className="fa-solid fa-arrow-down" style={{marginLeft: '8px', fontSize: '12px'}}></i></span>
                </a>
              ) : isPages ? (
                <a href="#" onClick={handleTechnologyClick} className="menu-item-with-arrow">
                  <span className="menu-item-label">Technology</span>
                  <span className="menu-item-arrow"><i className="fa-solid fa-arrow-down" style={{marginLeft: '8px', fontSize: '12px'}}></i></span>
                </a>
              ) : isBlog ? (
                <a href="#" onClick={handleUseCasesClick} className="menu-item-with-arrow">
                  <span className="menu-item-label">Use Cases</span>
                  <span className="menu-item-arrow"><i className="fa-solid fa-arrow-down" style={{marginLeft: '8px', fontSize: '12px'}}></i></span>
                </a>
              ) : (
                <Link href={menu_item.link} className={menu_item.has_dropdown ? "menu-item-with-arrow" : "menu-item-no-arrow"}> 
                  <span className="menu-item-label">{menu_item.title}</span>
                  {menu_item.has_dropdown && (
                    <span className="menu-item-arrow"><i className="fa-solid fa-arrow-down" style={{marginLeft: '8px', fontSize: '12px'}}></i></span>
                  )}
                </Link>
              )}
            {menu_item.has_dropdown && menu_item.title !== "Home" && menu_item.title !== "Company" && menu_item.title !== "Services" && menu_item.title !== "Pages" && menu_item.title !== "Blog" && (
              <ul className="submenu"> 
                {menu_item.sub_menus.map((sub_menu, i) => (
                  <li key={i}>  
                    <Link href={sub_menu.link}><span>{sub_menu.title}</span></Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          );
        })}
        {/* Add Partners menu item */}
        <li>
          <a href="#" onClick={handlePartnersClick} className="menu-item-with-arrow">
            <span className="menu-item-label">Partners</span>
            <span className="menu-item-arrow"><i className="fa-solid fa-arrow-down" style={{marginLeft: '8px', fontSize: '12px'}}></i></span>
          </a>
        </li>
        {/* Add Company menu item */}
        <li>
          <a href="#" onClick={handleCompanyClick} className="menu-item-with-arrow">
            <span className="menu-item-label">Company</span>
            <span className="menu-item-arrow"><i className="fa-solid fa-arrow-down" style={{marginLeft: '8px', fontSize: '12px'}}></i></span>
          </a>
        </li>
        {/* Add Contact menu item (last) */}
        {menu_data.find(item => item.title === "Contact") && (
            <li>
                <a href="#" onClick={handleContactClick} className="menu-item-no-arrow">
                    <span className="menu-item-label">{menu_data.find(item => item.title === "Contact").title}</span>
                </a>
            </li>
        )}
      </ul>
    </>
  );
};

export default NavMenuDfp;
