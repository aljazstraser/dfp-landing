import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import solution images - using webp images from public/assets/pics

import LineArrowTwo from '@/src/svg/line-arrow-2';

const solution_data = [
    {
        id: 1,
        img: "/assets/pics/business-infrastructures.webp",
        category: "Monetize your site.",
        title: "Aeronautical",
        titleSuffix: "Infrastructures",
        description: "Airports, vertipads, logistics hubs, and private landing areas can be referenced on our software and open their infrastructures to drone operators.",
        contactText: "If you wish to list your infrastructure on the DragonFlyPads network, contact us here.",
        contactLink: "mailto:contact@dragonflypads.com?subject=Infrastructure Listing"
    },
    {
        id: 2,
        img: "/assets/pics/business-operators.webp",
        category: "Automate your fleet.",
        title: "Commercial",
        titleSuffix: "Drone Operators",
        description: "Fleet managers and service providers use our platform to automate scheduling, charging, maintenance, and flight permissions across multiple sites.",
        contactText: "If you are an operator seeking to optimize multi-site operations, contact us here.",
        contactLink: "mailto:contact@dragonflypads.com?subject=Operator Inquiry"
    },
    {
        id: 3,
        img: "/assets/pics/business-pilots.webp",
        category: "Access authorized pads.",
        title: "Drone",
        titleSuffix: "Pilots",
        description: "BVLOS-certified or mission-based pilots can access available vertipads, book slots, and synchronize missions with connected infrastructures.",
        contactText: "If you are a pilot wishing to join the platform, contact us here.",
        contactLink: "mailto:contact@dragonflypads.com?subject=Pilot Inquiry"
    }
];

const DfpSolutionArea = () => {
    return (
        <>
            <section id="business-model-section" className="tp-portfolio-area tp-business-model-section pt-120 pb-60" style={{backgroundColor: '#F8F9FA'}}>
                <style dangerouslySetInnerHTML={{__html: `
                    .dfp-solution-title .title-center-shape {
                        position: absolute;
                        bottom: -24px;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    .tp-business-model-section .tp-portfolio-item-content {
                        margin-top: -40px !important;
                    }
                    .tp-business-model-section .tp-portfolio-item-thumb {
                        position: relative;
                        width: calc(100% - 8px) !important;
                        margin-left: 4px !important;
                        margin-right: 4px !important;
                    }
                    .tp-business-model-section .tp-portfolio-item-wrapper:hover .tp-portfolio-item-content {
                        background-color: #273141 !important;
                    }
                    .tp-business-model-section .tp-portfolio-item-title a {
                        color: var(--tp-theme-primary) !important;
                        transition: color 0.3s ease !important;
                    }
                    .tp-business-model-section .tp-portfolio-item-wrapper:hover .tp-portfolio-item-title a {
                        color: #ffffff !important;
                    }
                    .tp-business-model-section .tp-portfolio-item-description {
                        color: #5A627D !important;
                        transition: color 0.3s ease !important;
                    }
                    .tp-business-model-section .tp-portfolio-item-wrapper:hover .tp-portfolio-item-description {
                        color: #ffffff !important;
                    }
                `}} />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-section-title-wrapper text-center mb-60">
                                <h3 className="tp-section-title dfp-solution-title" style={{maxWidth: '600px', margin: '0 auto', position: 'relative'}}>
                                    <span style={{color: '#4e9ee9'}}>Software-Only. Scalable.</span> <br /> 
                                    <span>Revenue-Sharing by Design.</span>
                                   <span className="title-center-shape"> 
                                      <LineArrowTwo />
                                   </span>
                                </h3>
                                <h4 className="tp-section-subtitle" style={{maxWidth: '800px', margin: '40px auto 0', fontSize: '16px', lineHeight: '28px', color: '#5A627D', fontWeight: '400'}}>DragonFlyPads operates as a B2B SaaS platform, connecting every layer of the drone ecosystem through a unified, interoperable network.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {solution_data.map((item, i) => 
                            <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                                <div className="tp-portfolio-item-wrapper">
                                    <div className="tp-portfolio-item-thumb" style={{aspectRatio: '4/3', overflow: 'hidden'}}>
                                        <Image src={item.img} alt={item.title} width={800} height={600} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                                    </div>
                                    <div className="tp-portfolio-item-content">
                                        <span className="tp-portfolio-item-subtitle">{item.category}</span>
                                        <h3 className="tp-portfolio-item-title">
                                            <Link href="#solution">
                                                {item.title}<br />
                                                <span style={{color: '#4e9ee9'}}>{item.titleSuffix}</span>
                                            </Link>
                                        </h3>
                                        {item.description && <p className="tp-portfolio-item-description">{item.description}</p>}
                                        {item.contactText && (
                                            <p className="tp-portfolio-item-description" style={{marginTop: '10px'}}>
                                                <Link href={item.contactLink} style={{color: '#48ba4e', textDecoration: 'underline'}}>{item.contactText}</Link>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )} 
                    </div>
                </div>
            </section>
        </>
    );
};

export default DfpSolutionArea;