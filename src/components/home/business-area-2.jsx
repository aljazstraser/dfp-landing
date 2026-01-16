import React from 'react';
import Image from 'next/image';

import LineArrowTwo from '@/src/svg/line-arrow-2';
import Link from 'next/link';

const BusinessArea2 = () => {
    return (
        <>
            <style jsx>{`
               .modules-overview-title {
                  position: relative;
               }
               .modules-overview-title .title-center-shape {
                  position: absolute;
                  bottom: -24px;
                  left: 50%;
                  transform: translateX(-50%);
               }
               @media (min-width: 992px) {
                  .tp-business-box {
                     height: 100%;
                     display: flex;
                     flex-direction: column;
                  }
                  .tp-business-box p {
                     flex-grow: 1;
                  }
                  .tp-modules-row-2 {
                     margin-top: 30px;
                  }
               }
               .tp-business-box {
                  border: 1px solid #e6edf2;
                  transition: border-color 0.3s ease, border-width 0.3s ease;
               }
               .tp-business-box:hover {
                  border: 2px solid #48ba4e !important;
               }
            `}</style>
            <section className="tp-business-area p-relative pt-20 pb-115">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="tp-business-title-wrapper text-center">
                        <h3 className="tp-section-title modules-overview-title" style={{fontSize: '24px', lineHeight: '28px'}}>
                           <span style={{color: '#4e9ee9'}}>Modules</span> <span>Overview</span>
                           <span className="title-center-shape"> 
                              <LineArrowTwo />
                           </span>
                        </h3>
                     </div>
                  </div>
               </div>
               <div className="row justify-content-center">

                        <div className="col-xl-4 col-lg-4 col-md-6">
                           <div className="tp-business-box mb-30">
                              <div className="tp-business-box-title d-flex align-items-center">
                                 <span> 
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                       <path fill="none" stroke="#5b9bd4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M12,23c6.1,0,11-4.9,11-11S18.1,1,12,1,1,5.9,1,12s4.9,11,11,11Z"/>
                                       <path fill="none" stroke="#5b9bd4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M12,18.6c3.6,0,6.6-3,6.6-6.6s-3-6.6-6.6-6.6-6.6,3-6.6,6.6,3,6.6,6.6,6.6Z"/>
                                       <path fill="none" stroke="#5b9bd4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M12,14.2c1.2,0,2.2-1,2.2-2.2s-1-2.2-2.2-2.2-2.2,1-2.2,2.2,1,2.2,2.2,2.2Z"/>
                                    </svg>
                                 </span>
                                 <h4 className="tp-business-title">PadOS<sup>™</sup></h4>
                              </div>
                              <p>Smart scheduling and resource management <span style={{color: '#939daf'}}>(charging, take-off, maintenance)</span></p>
                           </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6">
                           <div className="tp-business-box mb-30">
                              <div className="tp-business-box-title d-flex align-items-center">
                                 <span> 
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                       <path fill="#5b9bd4" d="M13.4,9.2h-2.1v5.6h1.4v-1.4h.7c1.2,0,2.1-.9,2.1-2.1s-.9-2.1-2.1-2.1h0ZM13.4,12h-.7v-1.4h.7c.4,0,.7.3.7.7s-.3.7-.7.7Z"/>
                                       <path fill="#5b9bd4" d="M8,9.2c-1.2,0-2.1.9-2.1,2.1v3.5h1.4v-1.4h1.4v1.4h1.4v-3.5c0-1.2-.9-2.1-2.1-2.1h0ZM7.3,12v-.7c0-.4.3-.7.7-.7s.7.3.7.7v.7h-1.4Z"/>
                                       <path fill="#5b9bd4" d="M16.4,9.2h1.4v5.6h-1.4v-5.6Z"/>
                                       <path fill="#5b9bd4" d="M17.1,4.4l.9-1.6h1.8c.3.8,1.1,1.4,2,1.4s2.1-.9,2.1-2.1S23.1,0,21.9,0s-1.7.6-2,1.4h-2.6l-1.3,2.3c-.6-.3-1.2-.5-1.8-.6V0h-1.4v2.9c-.2,0-.5,0-.7,0s-.5,0-.7,0V0h-1.4v3.1c-.6.1-1.2.4-1.8.6l-1.3-2.3h-2.6C3.8.6,3,0,2.1,0S0,.9,0,2.1s.9,2.1,2.1,2.1,1.7-.6,2-1.4h1.8l.9,1.6c-1,.7-1.9,1.6-2.6,2.7H0v1.4h3.5c-.4.9-.6,1.8-.7,2.8H0v1.4h2.9c0,1,.3,1.9.7,2.8H0v1.4h4.3c.7,1,1.6,2,2.6,2.7l-.9,1.6h-1.8c-.3-.8-1.1-1.4-2-1.4S0,20.7,0,21.9s.9,2.1,2.1,2.1,1.7-.6,2-1.4h2.6l1.3-2.3c.6.3,1.2.5,1.8.6v3.1h1.4v-2.9c.2,0,.5,0,.7,0s.5,0,.7,0v2.9h1.4v-3.1c.6-.1,1.2-.4,1.8-.6l1.3,2.3h2.6c.3.8,1.1,1.4,2,1.4s2.1-.9,2.1-2.1-.9-2.1-2.1-2.1-1.7.6-2,1.4h-1.8l-.9-1.6c1-.7,1.9-1.6,2.6-2.7h4.3v-1.4h-3.5c.4-.9.6-1.8.7-2.8h2.9v-1.4h-2.9c0-1-.3-1.9-.7-2.8h3.5v-1.4h-4.3c-.7-1-1.6-2-2.6-2.7ZM21.9,1.4c.4,0,.7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7ZM2.1,2.8c-.4,0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7ZM2.1,22.6c-.4,0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7ZM21.9,21.2c.4,0,.7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7ZM12,19.8c-4.3,0-7.8-3.5-7.8-7.8s3.5-7.8,7.8-7.8,7.8,3.5,7.8,7.8-3.5,7.8-7.8,7.8Z"/>
                                    </svg>
                                 </span>
                                 <h4 className="tp-business-title">Connect API</h4>
                              </div>
                              <p>Seamless integration with UTM/USSP systems <span style={{color: '#939daf'}}>(including API connectivity to leading providers)</span></p>
                           </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6">
                           <div className="tp-business-box mb-30">
                              <div className="tp-business-box-title d-flex align-items-center">
                                 <span> 
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                       <path fill="#5b9bd4" d="M.4,21.8l4.3,2.1c0,0,.2,0,.3,0h0c.1,0,.2,0,.3,0l4.2-2.1c.2-.1.4-.4.4-.6v-2.8h4.2v2.8c0,.3.2.5.4.6l4.2,2.1c.2.1.4,0,.6,0l4.3-2.1c.2-.1.4-.4.4-.6v-5.6c0-.3-.1-.5-.4-.6,0,0,0,0,0,0l-4.3-2.1c-.2,0-.4,0-.6,0l-1.2.6-2.1-3.8,1.1-.6c.2-.1.4-.4.4-.6V2.8c0-.3-.2-.5-.4-.6L12.3,0c-.2,0-.4,0-.6,0l-4.2,2.1c-.2.1-.4.4-.4.6v5.7c0,.3.2.5.4.6l1.1.6-2.1,3.8-1.2-.6c-.2,0-.4,0-.6,0L.4,14.9c-.2.1-.4.4-.4.6v5.6c0,.3.2.5.4.6ZM1.4,16.7l2.9,1.4v4.1l-2.9-1.4v-4.1ZM8.5,20.8l-2.8,1.4v-4.1l2.8-1.4v4.1ZM15.5,16.7l2.8,1.4v4.1l-2.8-1.4v-4.1ZM22.6,20.8l-2.9,1.4v-4.1l2.9-1.4v4.1ZM19,14.2l2.7,1.3-2.7,1.3-2.6-1.3,2.6-1.3ZM15.5,8l-2.8,1.4v-4.1l2.8-1.4v4.1ZM12,1.5l2.6,1.3-2.6,1.3-2.6-1.3,2.6-1.3ZM8.5,4l2.8,1.4v4.1l-2.8-1.4V4ZM9.8,10.3l1.8.9c0,0,.2,0,.3,0h0c.1,0,.2,0,.3,0l1.8-.9,2.1,3.8-1.7.9c-.2.1-.4.4-.4.6v1.4h-4.2v-1.4c0-.3-.2-.5-.4-.6l-1.7-.9,2.1-3.8ZM5,14.2l2.6,1.3-2.6,1.3-2.7-1.3,2.7-1.3Z"/>
                                    </svg>
                                 </span>
                                 <h4 className="tp-business-title">TraceChain<sup>™</sup></h4>
                              </div>
                              <p>Blockchain-secured traceability for flight and service data <span style={{color: '#939daf'}}>(API connectivity with Kepler Digitals for mission security and data integrity)</span></p>
                           </div>
                        </div>
               </div>
               <div className="row justify-content-center tp-modules-row-2">

                        <div className="col-xl-4 col-lg-4 col-md-6">
                           <div className="tp-business-box mb-30">
                              <div className="tp-business-box-title d-flex align-items-center">
                                 <span> 
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                       <g>
                                          <g>
                                             <path fill="#5b9bd4" d="M13.5,24c-1,0-1.9-.4-2.6-1.1-.6-.6-.9-1.4-.9-2.2s.3-1.6.9-2.2c.5-.5,1.1-.8,1.8-.8s1.4.3,1.8.8c.3.3.3.7,0,1-.3.3-.7.3-1,0-.2-.2-.5-.4-.9-.4s-.6.1-.9.4c-.3.3-.5.7-.5,1.2s.2.9.5,1.2,1,.7,1.6.7,1.2-.2,1.6-.7.9-1.3.9-2.1-.3-1.6-.9-2.1c-.7-.7-1.7-1.2-2.8-1.2h-4.5c-.4,0-.7-.3-.7-.7s.3-.7.7-.7h4.5c1.4,0,2.8.6,3.8,1.6.8.8,1.3,1.9,1.3,3.1s-.5,2.3-1.3,3.1c-.7.7-1.6,1.1-2.6,1.1Z"/>
                                             <path fill="#5b9bd4" d="M5,16.5H.7c-.4,0-.7-.3-.7-.7s.3-.7.7-.7h4.3c.4,0,.7.3.7.7s-.3.7-.7.7Z"/>
                                          </g>
                                          <circle fill="#5b9bd4" cx="5" cy="21" r=".7"/>
                                          <circle fill="#5b9bd4" cx="19.8" cy="2.9" r=".7"/>
                                          <circle fill="#5b9bd4" cx="2.9" cy="6.2" r=".7"/>
                                       </g>
                                       <g>
                                          <path fill="#5b9bd4" d="M18.9,13.7H6c-.4,0-.7-.3-.7-.7s.3-.7.7-.7h13c1.1,0,2-.4,2.8-1.2.6-.6.9-1.3.9-2.1s-.3-1.6-.9-2.1c-.4-.4-1-.7-1.6-.7s-1.2.2-1.6.7c-.3.3-.5.7-.5,1.2s.2.9.5,1.2c.2.2.5.4.9.4s.6-.1.9-.4c.3-.3.7-.3,1,0,.3.3.3.7,0,1-.5.5-1.1.8-1.8.8s-1.4-.3-1.8-.8c-.6-.6-.9-1.4-.9-2.2s.3-1.6.9-2.2c.7-.7,1.6-1.1,2.6-1.1s1.9.4,2.6,1.1c.8.8,1.3,1.9,1.3,3.1s-.5,2.3-1.3,3.1c-1,1-2.4,1.6-3.8,1.6Z"/>
                                          <path fill="#5b9bd4" d="M3.1,13.7H.7c-.4,0-.7-.3-.7-.7s.3-.7.7-.7h2.4c.4,0,.7.3.7.7s-.3.7-.7.7Z"/>
                                          <path fill="#5b9bd4" d="M15.2,5.8l-1.6.4-.9-.5c0-.1,0-.3,0-.4s0-.3,0-.4l.9-.5,1.6.4c.4.1.8-.1.9-.5s-.1-.8-.5-.9l-1.2-.3.3-1.2c.1-.4-.1-.8-.5-.9-.4-.1-.8.1-.9.5l-.4,1.6-.9.5c-.2-.2-.4-.3-.7-.4v-1l1.2-1.2c.3-.3.3-.7,0-1s-.7-.3-1,0l-.9.9-.9-.9c-.3-.3-.7-.3-1,0s-.3.7,0,1l1.2,1.2v1c-.2,0-.5.2-.7.4l-.9-.5-.4-1.6c-.1-.4-.5-.6-.9-.5s-.6.5-.5.9l.3,1.2-1.2.3c-.4.1-.6.5-.5.9s.5.6.9.5l1.6-.4.9.5c0,.1,0,.3,0,.4s0,.3,0,.4l-.9.5-1.6-.4c-.4-.1-.8.1-.9.5-.1.4.1.8.5.9l1.2.3-.3,1.2c-.1.4.1.8.5.9s.8-.1.9-.5l.4-1.6.9-.5c.2.2.4.3.7.4v1l-1.2,1.2c-.3.3-.3.7,0,1s.7.3,1,0l.9-.9.9.9c.3.3.7.3,1,0s.3-.7,0-1l-1.2-1.2v-1c.2,0,.5-.2.7-.4l.9.5.4,1.6c.1.4.5.6.9.5.4-.1.6-.5.5-.9l-.3-1.2,1.2-.3c.4-.1.6-.5.5-.9-.1-.4-.5-.6-.9-.5h0ZM10.6,4.7c.4,0,.7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7Z"/>
                                       </g>
                                    </svg>
                                 </span>
                                 <h4 className="tp-business-title">MicroWeather AI</h4>
                              </div>
                              <p>Hyperlocal forecasting for automated go/no-go decisions <span style={{color: '#939daf'}}>(API connection with TrueWeather Solutions for precise micro-meteorological data)</span></p>
                           </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6">
                           <div className="tp-business-box mb-30">
                              <div className="tp-business-box-title d-flex align-items-center">
                                 <span> 
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                       <g>
                                          <path fill="#5b9bd4" stroke="#5b9bd4" strokeMiterlimit="10" strokeWidth=".5" d="M12.6,12.9c.2,0,.3,0,.4-.2.5-.4,4.4-3.8,4.4-7.2,0-2.7-2.2-4.9-4.9-4.9s-4.9,2.2-4.9,4.9,4,6.8,4.4,7.2c.1.1.3.2.4.2h0ZM8.4,5.6c0-2.3,1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2-2.6,5.3-4.2,6.6c-1.6-1.3-4.2-4.2-4.2-6.6h0Z"/>
                                          <path fill="#5b9bd4" stroke="#5b9bd4" strokeMiterlimit="10" strokeWidth=".5" d="M15.2,5.6c0-1.4-1.2-2.6-2.6-2.6s-2.6,1.2-2.6,2.6,1.2,2.6,2.6,2.6c1.4,0,2.6-1.2,2.6-2.6ZM12.6,7.6c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2c0,1.1-.9,2-2,2Z"/>
                                          <path fill="#5b9bd4" stroke="#5b9bd4" strokeMiterlimit="10" strokeWidth=".5" d="M20.4,8.9c-1.1,0-2.1.5-2.7,1.4s-.8,2-.4,3l-1.3.7c-.1-.4-.3-.7-.5-1.1,0-.1-.2-.2-.3-.2-.1,0-.3,0-.3.2s0,.3,0,.4c1,1.6.9,3.8-.2,5.3s-3.2,2.2-5,1.7-3.2-2.2-3.3-4.1.9-3.8,2.7-4.6c.1,0,.2-.2.2-.3s0-.3-.2-.4c-.1,0-.3,0-.4,0-.5.2-.9.5-1.3.9l-2-2.9c1.1-1,1.3-2.8.4-4s-2.7-1.5-3.9-.6S0,6.9.7,8.2s2.4,1.8,3.8,1.1l2.1,3c-.8,1-1.3,2.2-1.3,3.5,0,.8.2,1.7.6,2.4l-1.2.8c-.9-1-2.4-1.1-3.4-.3-1,.8-1.3,2.3-.6,3.4.7,1.1,2.2,1.5,3.3.8s1.6-2.1,1.1-3.3l1.2-.7c.9,1.4,2.5,2.3,4.2,2.4,1.7.1,3.3-.6,4.4-1.8l1.9,1c-.3,1.1.2,2.2,1.2,2.6,1,.4,2.2,0,2.7-1s.2-2.2-.7-2.8c-.9-.6-2.2-.4-2.9.5l-1.7-1c.8-1.2,1.1-2.6.8-4l1.4-.8c.9,1.3,2.6,1.8,4,1.2s2.3-2.2,2-3.7c-.3-1.5-1.7-2.7-3.2-2.7h0ZM1.1,6.7c0-1.2,1-2.1,2.1-2.1s2.1,1,2.1,2.1-1,2.1-2.1,2.1c-1.2,0-2.1-1-2.1-2.1ZM2.9,22.5c-1,0-1.8-.8-1.8-1.8s.8-1.8,1.8-1.8,1.8.8,1.8,1.8c0,1-.8,1.7-1.8,1.8ZM18.8,19.8c.8,0,1.4.6,1.4,1.4s-.6,1.4-1.4,1.4-1.4-.6-1.4-1.4.6-1.4,1.4-1.4ZM20.4,14.7c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5Z"/>
                                       </g>
                                    </svg>
                                 </span>
                                 <h4 className="tp-business-title">FleetSync</h4>
                              </div>
                              <p>Interoperability hub for operators and service providers</p>
                           </div>
                        </div>
               </div>
               {/* Button and text - commented out for potential future use or copying to another section */}
               {/* <div className="row justify-content-center">
                  <div className="col-xl-12">
                     <div className="tp-business-btn-area d-flex align-items-center justify-content-center mt-20">
                        <Link className="tp-btn" href="mailto:contact@dragonflypads.com?subject=Demo Request" target="_blank" rel="noopener noreferrer">Request a Demo</Link>
                        <i style={{marginLeft: '40px', textTransform: 'none'}}>
                           We'd love to show you what's next
                           <span> 
                              <LineArrowSix /> 
                           </span>
                        </i>
                     </div>
                  </div>
               </div> */}
            </div>
         </section>
        </>
    );
};

export default BusinessArea2;
