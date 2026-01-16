import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import poc_img from "@assets/img/dfp/poc-01.webp";
import AngleArrow from '@/src/svg/angle-arrow';
import LineArrowTwo from '@/src/svg/line-arrow-2';

const ProofArea = () => {
    return (
        <>
            <style jsx>{`
                .poc-image {
                    width: 512px !important;
                    height: auto !important;
                    max-width: 100% !important;
                }
                @media (max-width: 1200px) {
                    .poc-image {
                        width: 450px !important;
                    }
                }
                @media (max-width: 992px) {
                    .poc-image {
                        width: 400px !important;
                    }
                }
                @media (max-width: 768px) {
                    .poc-image {
                        width: 300px !important;
                    }
                }
                @media (max-width: 576px) {
                    .poc-image {
                        width: 250px !important;
                    }
                }
                #technology-section .title-left-shape svg path {
                    fill: #5b9bd4 !important;
                }
                #technology-section .tp-business-title-wrapper > p::after {
                    background: #5b9bd4 !important;
                }
                @media (max-width: 991px) {
                    #technology-section .col-lg-6:last-child {
                        margin-top: 0 !important;
                        padding-top: 0 !important;
                        margin-bottom: 0 !important;
                        padding-bottom: 0 !important;
                        display: flex !important;
                        align-items: flex-start !important;
                    }
                    #technology-section .tp-business-thumb-wrapper {
                        margin-top: 0 !important;
                        padding-top: 0 !important;
                        margin-bottom: 0 !important;
                        padding-bottom: 0 !important;
                        width: 100% !important;
                    }
                    #technology-section .tp-business-thumb {
                        margin-bottom: 0 !important;
                        padding-bottom: 0 !important;
                        width: 100% !important;
                    }
                    #technology-section .poc-image {
                        margin-bottom: 0 !important;
                        padding-bottom: 0 !important;
                        display: block !important;
                    }
                }
            `}</style>
            <section id="technology-section" className="tp-business-area tp-poc-section p-relative pt-110 pb-115" style={{backgroundColor: '#FFFFFF'}}>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="tp-business-title-wrapper">
                        <h3 className="tp-section-title">
                           <span style={{color: '#4e9ee9'}}>Built for Autonomy.</span> <br />
                           <span>Designed for Interoperability.</span>
                           <span className="title-left-shape"> 
                              <LineArrowTwo />
                           </span>
                        </h3>
                        <p style={{color: '#5A627D'}}>Our software scales across civil and defense environments, ensuring secure, sovereign control of ground-based drone operations.</p>
                        <p style={{color: '#5A627D'}} className="mt-3">We comply with <strong style={{color: '#4e9ee9'}}>EASA U-Space</strong>, <strong style={{color: '#4e9ee9'}}>ISO TC20/SC16</strong>, and <strong style={{color: '#4e9ee9'}}>AFNOR</strong> standards — positioning DragonFlyPads as the European benchmark for Vertiport and Ground-UTM digitalization.</p>
                        
                        <div className="mt-60">
                           <h3 className="tp-section-title" style={{fontSize: '24px', lineHeight: '28px', position: 'relative'}}>
                              <span style={{color: '#4e9ee9'}}>Key</span> <span>Features</span>
                              <span className="title-left-shape" style={{position: 'absolute', bottom: '-24px', left: '0'}}> 
                                 <LineArrowTwo />
                              </span>
                           </h3>
                           <ul style={{color: '#5A627D', marginTop: '50px', paddingLeft: '20px', listStyle: 'none'}}>
                              <li style={{marginBottom: '12px', position: 'relative', paddingLeft: '20px'}}>
                                 <span style={{position: 'absolute', left: '0'}}>·</span>
                                 Modular, cloud-native architecture (<strong>AWS</strong> / <strong>sovereign hosting compatible</strong>)
                              </li>
                              <li style={{marginBottom: '12px', position: 'relative', paddingLeft: '20px'}}>
                                 <span style={{position: 'absolute', left: '0'}}>·</span>
                                 Advanced data encryption and identity management
                              </li>
                              <li style={{marginBottom: '12px', position: 'relative', paddingLeft: '20px'}}>
                                 <span style={{position: 'absolute', left: '0'}}>·</span>
                                 API & SDK suite for integration with any <strong>USSP</strong> or <strong>UTM</strong> provider
                              </li>
                              <li style={{marginBottom: '12px', position: 'relative', paddingLeft: '20px'}}>
                                 <span style={{position: 'absolute', left: '0'}}>·</span>
                                 API integration with Blockchain (<strong>Kepler Digitals</strong>) for mission traceability and data immutability
                              </li>
                              <li style={{marginBottom: '12px', position: 'relative', paddingLeft: '20px'}}>
                                 <span style={{position: 'absolute', left: '0'}}>·</span>
                                 API integration with <strong>TrueWeather Solutions</strong> for real-time micro-meteorological forecasting
                              </li>
                              <li style={{marginBottom: '12px', position: 'relative', paddingLeft: '20px'}}>
                                 <span style={{position: 'absolute', left: '0'}}>·</span>
                                 Real-time analytics and predictive insights for operational optimization
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="tp-business-thumb-wrapper p-relative">
                        <div className="tp-business-thumb text-center">
                           <Image 
                              src={poc_img} 
                              alt="DragonFlyPads PoC Operations" 
                              style={{
                                 width: '512px',
                                 height: 'auto',
                                 maxWidth: '100%'
                              }}
                              className="poc-image"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        </>
    );
};

export default ProofArea;
