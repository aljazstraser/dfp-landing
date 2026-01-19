import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EmailAeroplan from '@/src/svg/email-aeroplan';
import SocialLinks from '@/src/common/social-links';

import  footer_shape_1 from "@assets/img/footer/shape-1.png";
import  footer_logo from "@assets/img/logo/footer-logo.png";
import menu_data from '@/src/layout/headers/menu-data';

// DFP header menu items (excluding Home)
const dfpMenuItems = [
    { title: "Platform", link: "#platform-section" },
    { title: "Business Model", link: "#business-model-section" },
    { title: "Technology", link: "#technology-section" },
    { title: "Use Cases", link: "#use-cases-section" },
    { title: "Partners", link: "#partners-section" },
    { title: "Company", link: "#company-section" },
    { title: "Contact", link: "#contact-section" }
];


const footer_two_content = {
    footer_widget: [
        "Parking permission",
        "Fire Service Noc",
        "Report a Parking Violation",
        "Residential Parking",
        "Vendor Registration",
    ],
    google_map: "https://www.google.com/maps/place/DragonFlyPads,+Bureau+46,+128+Rue+de+la+Boétie,+75008+Paris,+France",
    about_us: <>Enabling BVLOS (Beyond Visual Line of Sight) and Commercial UAS Success. DragonFlyPads Leads the Way with Turn-Key Solutions, Providing a Grid of Secure, Modular, Mobile, and Economical Vertipads.</>,
    address: "DragonFlyPads, Bureau 46, 128 Rue de la Boétie, 75008 Paris, France",
    phone: "+33 (0) 6 16646885",
    email: "contact@dragonflypads.com",
    footer_nav: [
        {title: "Home", link: "/"},
        {title: "Company", link: "/"},
        {title: "services", link: "/service"},
        {title: "Resources", link: "#"},
        {title: "Shop", link: "#"},
        {title: "contact", link: "/contact"},
    ],
    mobile: "+33 (0) 6 16646885",


}
const { footer_widget, google_map, about_us, address, phone, email, footer_nav, mobile } = footer_two_content

const FooterTwo = () => {
    const handleLogoClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleFooterLinkClick = (e, link) => {
        e.preventDefault();
        
        // Handle hash-based links (e.g., #platform-section)
        if (link.startsWith('#')) {
            const element = document.querySelector(link);
            if (element) {
                const headerHeight = 160;
                const elementPosition = element.offsetTop;
                const offsetPosition = elementPosition - headerHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
            return;
        }
        
        // Handle different link types
        if (link === '/contact') {
            window.location.href = link;
            return;
        }
        
        // Scroll to sections for CSS selector links (legacy support)
        const element = document.querySelector(link);
        if (element) {
            const headerHeight = 160;
            const elementPosition = element.offsetTop;
            const offsetPosition = elementPosition - headerHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        } else {
            console.log('Element not found:', link);
        }
    };

    return (
        <>
            <style jsx>{`
                .tp-footer-2-shape {
                    top: -42px !important;
                }
                .tp-footer-2-area {
                    padding-bottom: 80px !important;
                }
                .footer-links-column a:hover i {
                    opacity: 1 !important;
                }
            `}</style>
            <footer className="tp-footer-2-area p-relative" style={{ backgroundColor: '#364152' }}>
                <div className="tp-footer-overlay">
                    <div className="tp-footer-2-shape">
                        <Image src={footer_shape_1} alt="theme-pure" />
                    </div>
                    <div className="container">
                    <div className="tp-footer-2-main-area">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="tp-footer-widget tp-footer-2-col-1">
                                <div className="tp-footer-logo mb-4">
                                    <Link href="#" onClick={handleLogoClick}>
                                        <Image src={footer_logo} alt="DragonFlyPads" style={{height: '48px', width: 'auto'}} />
                                    </Link>
                                </div>
                                <div className="tp-footer-widget-content">
                                    <p style={{color: '#9BA0A9', marginBottom: '32px'}}>{about_us}</p>
                                    <div className="tp-footer-widget-social mt-5" style={{marginTop: '100px'}}>
                                        <div className="header-social d-flex">
                                            <Link href="https://www.facebook.com/Dragonflypads" target="_blank" style={{color: 'white', marginRight: '15px', fontSize: '24px'}}><i className="fa-brands fa-facebook"></i></Link>
                                            <Link href="https://x.com/dragonflypads" target="_blank" style={{color: 'white', marginRight: '15px', fontSize: '24px'}}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                                </svg>
                                            </Link>
                                            <Link href="https://linkedin.com/company/dragonflypads" target="_blank" style={{color: 'white', marginRight: '15px', fontSize: '24px'}}><i className="fa-brands fa-linkedin"></i></Link>
                                            <Link href="https://wa.me/+33616646885" target="_blank" style={{color: 'white', fontSize: '24px'}}><i className="fa-brands fa-whatsapp"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="tp-footer-widget tp-footer-2-col-2 d-flex align-items-start" style={{paddingTop: '20px'}}>
                                <div className="tp-footer-widget-content" style={{width: '100%'}}>
                                    <div className="d-flex justify-content-between" style={{gap: '60px'}}>
                                        <div className="footer-links-column" style={{flex: 1}}>
                                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                                {dfpMenuItems.slice(0, 3).map((item, i) => (
                                                    <li key={i} style={{marginBottom: '8px'}}>
                                                        <Link href={item.link} onClick={(e) => handleFooterLinkClick(e, item.link)} style={{color: '#9BA0A9', textDecoration: 'none', position: 'relative'}}>
                                                            {item.title}
                                                            <i className="fa-solid fa-arrow-up" style={{marginLeft: '8px', fontSize: '12px', opacity: 0, transition: 'opacity 0.3s ease'}}></i>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="footer-links-column" style={{flex: 1}}>
                                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                                {dfpMenuItems.slice(3).map((item, i) => (
                                                    <li key={i} style={{marginBottom: '8px'}}>
                                                        <Link href={item.link} onClick={(e) => handleFooterLinkClick(e, item.link)} style={{color: '#9BA0A9', textDecoration: 'none', position: 'relative'}}>
                                                            {item.title}
                                                            <i className="fa-solid fa-arrow-up" style={{marginLeft: '8px', fontSize: '12px', opacity: 0, transition: 'opacity 0.3s ease'}}></i>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterTwo;