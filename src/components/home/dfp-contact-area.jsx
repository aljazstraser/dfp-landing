import ContactForm from '@/src/forms/contact-form'; 
import LineArrowTwo from '@/src/svg/line-arrow-2';
import React from 'react';

const DfpContactArea = () => {
    return (
        <>
            <section id="contact-section" className="tp-contact-area pt-120 pb-90">
                <style dangerouslySetInnerHTML={{__html: `
                    #contact-section .tp-contact-btn .tp-btn {
                        background: #273141 !important;
                    }
                    #contact-section .tp-contact-btn .tp-btn::after {
                        background: #48be64 !important;
                    }
                    #contact-section .tp-contact-btn .tp-btn::before {
                        background: #48be64 !important;
                    }
                    #contact-section .tp-contact-btn .tp-btn:hover {
                        color: var(--tp-common-white) !important;
                    }
                    #contact-section .tp-contact-item-title a {
                        color: inherit;
                        text-decoration: none;
                        transition: color 0.3s ease;
                    }
                    #contact-section .tp-contact-item-title a:hover {
                        color: #48be64 !important;
                    }
                `}} />
                <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="tp-contact-wrapper">
                            <div className="tp-contact-title-wrapper">
                            <h3 className="tp-contact-title" style={{textTransform: 'none', position: 'relative', lineHeight: '1.2'}}>Let's Build the <br /><span style={{color: '#4e9ee9'}}>Network of Tomorrow.</span>
                                <span className="title-center-shape" style={{position: 'absolute', bottom: '-8px', left: '0', display: 'flex', justifyContent: 'flex-start'}}>
                                    <LineArrowTwo />
                                </span>
                            </h3> 
                            <p>Interested in connecting your infrastructure or integrating your UTM system?</p>
                            <p style={{marginBottom: '64px'}}>Request a demo and discover how DragonFlyPads can power your ground operations.</p>
                            </div>
                            <div className="tp-contact-content">
                            <div className="tp-contact-content-mail d-flex align-items-center" style={{marginBottom: '20px', position: 'relative'}}>
                                <div className="tp-contact-content-mail-icon" style={{width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" version="1.1" viewBox="0 0 64 64">
                                        <path style={{fill: '#5b9bd4'}} d="M52.2,24.9h.1c0-.1.2-.3.2-.3.2-.2.4-.4.7-.6.2-.2.4-.4.6-.6l1.7-1.6c.4-.4.6-1,.4-1.7-.1-.2-.2-.4-.3-.6-.5-.5-1.3-.6-2-.3-.1.1-.2.1-.3.2l-1.3,1.2c-4.1,3.7-8.2,7.3-12.3,11.1-.9.8-1.9,1.7-2.8,2.5-1.4,1.2-3.2,1.9-5,1.9s-3.4-.5-5-1.9c-.9-.8-1.9-1.7-2.8-2.5-4.1-3.7-8.2-7.3-12.3-11.1l-1.3-1.2c-.1-.1-.2-.1-.3-.2-.6-.4-1.4-.2-2,.3-.2.2-.3.4-.3.6-.2.5,0,1.2.4,1.7l1.7,1.6.6.6c.2.2.4.4.7.6l.2.2h.1c2,2,4,3.7,6,5.5.7.6,1.4,1.3,2.3,2.1-.1.1-.2.2-.3.3-3.2,3.2-6.4,6.3-9.6,9.5-.1.1-.3.3-.4.4-.4.5-.4,1.2-.1,1.8.4.5,1,.8,1.7.5.3-.1.6-.3.8-.6,3.2-3.1,6.4-6.3,9.6-9.4l.5-.5c.9.8,1.8,1.6,2.6,2.3,1.7,1.6,3.7,2.5,6,2.7.4,0,.8.1,1.2.1s.8,0,1.2-.1c2.3-.2,4.2-1.2,6-2.7.8-.7,1.7-1.6,2.6-2.3.2.2.4.3.5.5,3.2,3.1,6.4,6.3,9.6,9.4.2.2.5.5.8.6.6.2,1.2,0,1.7-.5s.3-1.2-.1-1.8l-.4-.4c-3.2-3.2-6.4-6.3-9.6-9.5l-.3-.3c.7-.7,1.4-1.3,2.3-2.1,2-1.8,4-3.5,6-5.4Z"/>
                                        <path style={{fill: '#5b9bd4'}} d="M54.5,55.6H9.4c-5.2,0-9.4-4.2-9.4-9.4v-28.3c0-5.2,4.2-9.4,9.4-9.4h45.2c5.2,0,9.4,4.2,9.4,9.4v28.3c-.1,5.2-4.2,9.4-9.5,9.4ZM9.4,11.9c-3.3,0-5.9,2.7-5.9,5.9v28.3c0,3.3,2.7,5.9,5.9,5.9h45.2c3.3,0,5.9-2.7,5.9-5.9v-28.3c0-3.3-2.7-5.9-5.9-5.9H9.4Z"/>
                                    </svg>
                                </div>
                                <div style={{marginLeft: '52px', position: 'absolute', left: '52px'}}>
                                    <h3 className="tp-contact-item-title"><a href="mailto:contact@dragonflypads.com">contact@dragonflypads.com</a></h3>
                                </div>
                            </div>
                            <div className="tp-contact-content-phone d-flex align-items-center" style={{marginBottom: '20px', position: 'relative'}}>
                                <div className="tp-contact-content-phone-icon" style={{width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" version="1.1" viewBox="0 0 64 64">
                                        <path style={{fill: '#5b9bd4'}} d="M50.6,39.8c-1.3-1.4-2.9-2.1-4.6-2.1s-3.3.7-4.6,2.1l-4.3,4.3c-.4-.2-.7-.4-1-.5-.5-.2-.9-.5-1.3-.7-4-2.5-7.6-5.8-11.1-10.1-1.7-2.1-2.8-3.9-3.6-5.8,1.1-1,2.1-2.1,3.1-3.1.4-.4.8-.8,1.1-1.1,2.8-2.8,2.8-6.5,0-9.3l-3.7-3.7c-.4-.4-.9-.9-1.3-1.3-.8-.8-1.7-1.7-2.5-2.5-1.3-1.3-2.9-2-4.5-2s-3.2.7-4.6,2h0s-4.6,4.7-4.6,4.7C1.3,12.2.3,14.3.1,16.8c-.3,3.9.8,7.6,1.7,10,2.2,5.9,5.5,11.4,10.3,17.2,5.9,7.1,13,12.6,21.2,16.6,3.1,1.5,7.3,3.2,11.9,3.5.3,0,.6,0,.9,0,3.1,0,5.7-1.1,7.8-3.3,0,0,0,0,0,0,.7-.9,1.5-1.6,2.4-2.4.6-.6,1.2-1.1,1.8-1.7,1.3-1.4,2-3,2-4.7s-.7-3.3-2.1-4.6l-7.4-7.4ZM55.4,54c-.5.6-1.1,1.1-1.6,1.6-.9.8-1.8,1.7-2.6,2.7-1.4,1.5-3,2.1-5.1,2.1s-.4,0-.6,0c-4-.3-7.7-1.8-10.5-3.2-7.6-3.7-14.4-9-19.9-15.6-4.6-5.6-7.7-10.7-9.7-16.2-1.3-3.4-1.7-6-1.5-8.5.1-1.6.7-2.9,1.9-4l4.6-4.6c.7-.6,1.4-1,2.1-1s1.5.5,2,.9c0,0,0,0,0,0,.8.8,1.6,1.6,2.4,2.4.4.4.9.9,1.3,1.3l3.7,3.7c1.4,1.4,1.4,2.8,0,4.2s-.8.8-1.2,1.2c-1.1,1.2-2.2,2.2-3.4,3.3,0,0,0,0,0,0-1.2,1.2-.9,2.3-.7,3.1,0,0,0,0,0,.1,1,2.3,2.3,4.5,4.4,7.1h0c3.7,4.6,7.7,8.2,12,10.9.6.4,1.1.6,1.7.9.5.2.9.5,1.3.7,0,0,.1,0,.2,0,.5.2.9.3,1.3.3,1.1,0,1.8-.7,2.1-.9l4.6-4.6c.5-.5,1.2-1,2-1s1.5.5,1.9,1t0,0l7.4,7.4c1.4,1.4,1.4,2.8,0,4.2Z"/>
                                        <path style={{fill: '#5b9bd4'}} d="M34.6,15.4c3.5.6,6.8,2.3,9.3,4.8s4.2,5.8,4.8,9.3c.1.9.9,1.5,1.8,1.5s.2,0,.3,0c1-.2,1.7-1.1,1.5-2.1-.7-4.3-2.8-8.2-5.8-11.3-3.1-3.1-7-5.1-11.3-5.8-1-.2-1.9.5-2.1,1.5-.2,1,.5,1.9,1.5,2.1Z"/>
                                        <path style={{fill: '#5b9bd4'}} d="M63.9,28.4c-1.2-7.1-4.5-13.5-9.6-18.6C49.2,4.7,42.8,1.4,35.7.2c-1-.2-1.9.5-2.1,1.5-.2,1,.5,1.9,1.5,2.1,6.3,1.1,12,4.1,16.6,8.6,4.6,4.6,7.5,10.3,8.6,16.6.1.9.9,1.5,1.8,1.5s.2,0,.3,0c1-.1,1.7-1.1,1.5-2.1Z"/>
                                    </svg>
                                </div>
                                <div style={{marginLeft: '52px', position: 'absolute', left: '52px'}}>
                                    <h3 className="tp-contact-item-title">
                                        <a href="tel:+33616646885">+33 (0) 6 16646885</a>
                                    </h3>
                                </div>
                            </div>
                            <div className="tp-contact-location-wrapper d-flex" style={{marginTop: '40px'}}>
                                <div className="tp-contact-location">
                                    <h3 className="tp-contact-location-title">
                                        Office Location
                                    </h3>
                                    <p>DragonFlyPads, Bureau 46, 128 Rue de la Boétie, 75008 Paris, France</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="tp-contact-form">
                            <h3 className="tp-contact-location-title">Quick message</h3>
                            <p>Your email address will not be published. Required fields <br  /> are marked *</p>
                            <ContactForm /> 
                            <p className="ajax-response"></p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default DfpContactArea;