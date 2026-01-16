import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import solution images
import solution_img_1 from "@assets/img/dfp-vertipads/rural-01.webp";
import solution_img_2 from "@assets/img/dfp-vertipads/industrial-01.webp";
import solution_img_3 from "@assets/img/dfp-vertipads/defense-01.webp";
import solution_img_4 from "@assets/img/dfp-vertipads/ports-01.webp";

import LineArrowTwo from '@/src/svg/line-arrow-2';

const solution_data = [
    {
        id: 1,
        img: solution_img_1,
        category: "Your city",
        title: "Rural delivery",
        titleSuffix: "networks",
        description: "Coordinate fleets and pad access dynamically."
    },
    {
        id: 2,
        img: solution_img_2,
        category: "Your fields",
        title: "Industrial",
        titleSuffix: "sites",
        description: "Manage internal logistics and automated ground movements."
    },
    {
        id: 3,
        img: solution_img_3,
        category: "Your home",
        title: "Emergency",
        titleSuffix: "and defense",
        description: "Secure, real-time orchestration of multi-site drone missions."
    },
    {
        id: 4,
        img: solution_img_4,
        category: "Your streets",
        title: "Airports",
        titleSuffix: "and ports",
        description: "Integrate drone traffic with existing ground operations."
    }
];

const DfpSolutionArea2 = () => {
    return (
        <>
            <section id="use-cases-section" className="tp-portfolio-area pt-120 pb-60" style={{backgroundColor: '#F8F9FA'}}>
                <style dangerouslySetInnerHTML={{__html: `
                    .dfp-solution-title-2 .title-center-shape {
                        position: absolute;
                        bottom: -24px;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    #use-cases-section .tp-portfolio-item-thumb {
                        position: relative;
                        width: 100% !important;
                        margin-left: 0 !important;
                        margin-right: 0 !important;
                    }
                    @media (max-width: 991px) {
                        #use-cases-section .tp-portfolio-item-thumb {
                            aspect-ratio: 1 / 1 !important;
                        }
                        #use-cases-section .tp-portfolio-item-thumb img {
                            aspect-ratio: 1 / 1 !important;
                            object-fit: cover !important;
                        }
                    }
                    #use-cases-section .tp-portfolio-item-wrapper:hover .tp-portfolio-item-content {
                        background-color: #273141 !important;
                    }
                    #use-cases-section .tp-portfolio-item-title a {
                        color: var(--tp-theme-primary) !important;
                        transition: color 0.3s ease !important;
                    }
                    #use-cases-section .tp-portfolio-item-wrapper:hover .tp-portfolio-item-title a {
                        color: #ffffff !important;
                    }
                    #use-cases-section .tp-portfolio-item-description {
                        color: #5A627D !important;
                        transition: color 0.3s ease !important;
                    }
                    #use-cases-section .tp-portfolio-item-wrapper:hover .tp-portfolio-item-description {
                        color: #ffffff !important;
                    }
                `}} />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-section-title-wrapper text-center mb-60">
                                <h3 className="tp-section-title dfp-solution-title-2" style={{maxWidth: '600px', margin: '0 auto', position: 'relative'}}>
                                    <span style={{color: '#4e9ee9'}}>From Urban Logistics</span> <br /> 
                                    <span>to Defense Operations</span>
                                   <span className="title-center-shape"> 
                                      <LineArrowTwo />
                                   </span>
                                </h3>
                                <h4 className="tp-section-subtitle" style={{maxWidth: '800px', margin: '40px auto 0', fontSize: '16px', lineHeight: '28px', color: '#5A627D', fontWeight: '400'}}>A single software platform — unlimited operational scenarios.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {solution_data.map((item, i) => 
                            <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                                <div className="tp-portfolio-item-wrapper">
                                    <div className="tp-portfolio-item-thumb" style={{aspectRatio: '1/1', overflow: 'hidden'}}>
                                        <Image src={item.img} alt={item.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                                    </div>
                                    <div className="tp-portfolio-item-content">
                                        <h3 className="tp-portfolio-item-title">
                                            <Link href="#solution">
                                                {item.title}<br />
                                                <span style={{color: '#4e9ee9'}}>{item.titleSuffix}</span>
                                            </Link>
                                        </h3>
                                        <p className="tp-portfolio-item-description">{item.description}</p>
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

export default DfpSolutionArea2;

