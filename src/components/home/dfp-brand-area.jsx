import Image from 'next/image';
import React from 'react';
import LineArrowTwo from '@/src/svg/line-arrow-2';

// Partner logos - Companies
import partner_rungis from "@assets/img/partners/rungis.png";
import partner_edeis from "@assets/img/partners/edeis.png";
import partner_hologarde from "@assets/img/partners/hologarde.png";
import partner_unifly from "@assets/img/partners/unifly.png";
import partner_port_antwerp from "@assets/img/partners/port-of-antwerp.png";
import partner_omniopti from "@assets/img/partners/omniopti.png";
import partner_kepler from "@assets/img/partners/kepler.png";
import partner_pilgrim from "@assets/img/partners/pilgrim-technology.png";
import partner_adlc from "@assets/img/partners/adlc.png";
import partner_trueweather from "@assets/img/partners/trueweather.png";
import partner_packet_digital from "@assets/img/partners/packet-digital.png";
import partner_mvertiport from "@assets/img/partners/mvertiport.png";

// Partner logos - Institutionals
import partner_adif from "@assets/img/partners/adif.png";
import partner_anme from "@assets/img/partners/anme.png";
import partner_iso from "@assets/img/partners/iso.png";
import partner_region_france from "@assets/img/partners/region-france.png";
import partner_und from "@assets/img/partners/und.png";

// Placeholder SVG component for missing logos (square format)
const PlaceholderLogo = ({ name, size = 80 }) => (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
        <rect width={size} height={size} fill="transparent" stroke="#ddd" strokeWidth="1" rx="4"/>
        <text 
            x={size / 2} 
            y={size / 2} 
            fontSize={size / 6} 
            fill="#666" 
            textAnchor="middle" 
            dominantBaseline="middle"
            fontFamily="Arial, sans-serif"
        >
            {name}
        </text>
    </svg>
);

// Companies logos
const companyLogos = [
    { name: "Rungis International Market", src: partner_rungis, isPlaceholder: false },
    { name: "EDEIS", src: partner_edeis, isPlaceholder: false },
    { name: "Hologarde / Groupe ADP", src: partner_hologarde, isPlaceholder: false },
    { name: "Unifly", src: partner_unifly, isPlaceholder: false },
    { name: "Port of Antwerp", src: partner_port_antwerp, isPlaceholder: false },
    { name: "Omniopti", src: partner_omniopti, isPlaceholder: false },
    { name: "Kepler Digitals", src: partner_kepler, isPlaceholder: false },
    { name: "Pilgrim Technology", src: partner_pilgrim, isPlaceholder: false },
    { name: "ADLC", src: partner_adlc, isPlaceholder: false },
    { name: "TrueWeather Solutions", src: partner_trueweather, isPlaceholder: false },
    { name: "Packet Digital", src: partner_packet_digital, isPlaceholder: false },
    { name: "MVertiport", src: partner_mvertiport, isPlaceholder: false },
];

// Institutionals logos
const institutionalLogos = [
    { name: "Région Île-de-France", src: partner_region_france, isPlaceholder: false },
    { name: "UND", src: partner_und, isPlaceholder: false },
    { name: "ISO", src: partner_iso, isPlaceholder: false },
    { name: "ADIF", src: partner_adif, isPlaceholder: false },
    { name: "AFNOR", src: partner_anme, isPlaceholder: false }, // Using existing anme logo as placeholder
];

const DfpBrandArea = () => {
    return (
        <>
            <div id="partners-section" className="tp-brand-3-area p-relative pt-120 pb-120" style={{backgroundColor: '#FFFFFF'}}>
                <style dangerouslySetInnerHTML={{__html: `
                    .dfp-partners-title .title-center-shape {
                        position: absolute;
                        bottom: -24px;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    .dfp-partners-subtitle {
                        position: relative;
                    }
                    .dfp-partners-subtitle .title-center-shape {
                        position: absolute;
                        bottom: -24px;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    /* Responsive logo sizing based on columns */
                    .tp-brand-3-thumb {
                        min-height: 64px !important;
                        background-color: transparent !important;
                    }
                    /* XL: 6 columns - larger logos */
                    @media (min-width: 1200px) {
                        .tp-brand-3-thumb {
                            height: 110px !important;
                            width: 110px !important;
                        }
                        .tp-brand-3-thumb img {
                            height: 92px !important;
                            width: 92px !important;
                        }
                        .tp-brand-3-thumb svg {
                            width: 92px !important;
                            height: 92px !important;
                        }
                    }
                    /* LG: 4 columns - medium logos */
                    @media (min-width: 992px) and (max-width: 1199px) {
                        .tp-brand-3-thumb {
                            height: 100px !important;
                            width: 100px !important;
                        }
                        .tp-brand-3-thumb img {
                            height: 80px !important;
                            width: 80px !important;
                        }
                        .tp-brand-3-thumb svg {
                            width: 80px !important;
                            height: 80px !important;
                        }
                    }
                    /* MD: 3 columns - larger logos */
                    @media (min-width: 768px) and (max-width: 991px) {
                        .tp-brand-3-thumb {
                            height: 120px !important;
                            width: 120px !important;
                        }
                        .tp-brand-3-thumb img {
                            height: 100px !important;
                            width: 100px !important;
                        }
                        .tp-brand-3-thumb svg {
                            width: 100px !important;
                            height: 100px !important;
                        }
                    }
                    /* SM: 2 columns - even larger logos */
                    @media (min-width: 576px) and (max-width: 767px) {
                        .tp-brand-3-thumb {
                            height: 140px !important;
                            width: 140px !important;
                        }
                        .tp-brand-3-thumb img {
                            height: 120px !important;
                            width: 120px !important;
                        }
                        .tp-brand-3-thumb svg {
                            width: 120px !important;
                            height: 120px !important;
                        }
                    }
                    /* XS: 2 columns - largest logos */
                    @media (max-width: 575px) {
                        .tp-brand-3-thumb {
                            height: 120px !important;
                            width: 120px !important;
                        }
                        .tp-brand-3-thumb img {
                            height: 100px !important;
                            width: 100px !important;
                        }
                        .tp-brand-3-thumb svg {
                            width: 100px !important;
                            height: 100px !important;
                        }
                    }
                `}} />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-section-title-wrapper text-center mb-60">
                                <h3 className="tp-section-title dfp-partners-title" style={{maxWidth: '600px', margin: '0 auto', position: 'relative'}}>
                                    <span style={{color: '#4e9ee9'}}>Trusted by</span> <br /> 
                                    <span>Innovators and Institutions</span>
                                   <span className="title-center-shape"> 
                                      <LineArrowTwo />
                                   </span>
                                </h3>
                                <h4 className="tp-section-subtitle" style={{maxWidth: '800px', margin: '40px auto 0', fontSize: '16px', lineHeight: '28px', color: '#5A627D', fontWeight: '400'}}>DragonFlyPads collaborates with airports, logistics hubs, and national drone programs to define the future of autonomous infrastructure.</h4>
                            </div>
                        </div>
                    </div>
                    
                    {/* Companies Section */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-business-title-wrapper text-center mb-40">
                                <h3 className="tp-section-title dfp-partners-subtitle" style={{fontSize: '24px', lineHeight: '28px', position: 'relative', color: '#364152'}}>
                                    Companies
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mb-60">
                        {companyLogos.map((logo, i) => 
                            <div key={i} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
                                <div className="tp-brand-3-thumb" style={{
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    margin: '0 auto',
                                    overflow: 'hidden',
                                    backgroundColor: 'transparent'
                                }}>
                                    {logo.isPlaceholder ? (
                                        <div style={{filter: 'grayscale(1) sepia(0.4) hue-rotate(200deg) saturate(1.5) brightness(0.8)', opacity: 0.7, transition: 'all 0.3s ease'}}>
                                            <PlaceholderLogo name={logo.name} size={80} />
                                        </div>
                                    ) : (
                                        <Image 
                                            src={logo.src} 
                                            alt={logo.name} 
                                            style={{
                                                objectFit: 'contain',
                                                backgroundColor: 'transparent',
                                                filter: 'grayscale(1) sepia(0.4) hue-rotate(200deg) saturate(1.5) brightness(0.8)',
                                                opacity: 0.7,
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.filter = 'none';
                                                e.target.style.opacity = '1';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.filter = 'grayscale(1) sepia(0.4) hue-rotate(200deg) saturate(1.5) brightness(0.8)';
                                                e.target.style.opacity = '0.7';
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        )} 
                    </div>

                    {/* Institutionals Section */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-business-title-wrapper text-center mb-40">
                                <h3 className="tp-section-title dfp-partners-subtitle" style={{fontSize: '24px', lineHeight: '28px', position: 'relative', color: '#364152'}}>
                                    Institutionals
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {institutionalLogos.map((logo, i) => 
                            <div key={i} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
                                <div className="tp-brand-3-thumb" style={{
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    margin: '0 auto',
                                    overflow: 'hidden',
                                    backgroundColor: 'transparent'
                                }}>
                                    {logo.isPlaceholder ? (
                                        <div style={{filter: 'grayscale(1) sepia(0.4) hue-rotate(200deg) saturate(1.5) brightness(0.8)', opacity: 0.7, transition: 'all 0.3s ease'}}>
                                            <PlaceholderLogo name={logo.name} size={80} />
                                        </div>
                                    ) : (
                                        <Image 
                                            src={logo.src} 
                                            alt={logo.name} 
                                            style={{
                                                objectFit: 'contain',
                                                backgroundColor: 'transparent',
                                                filter: 'grayscale(1) sepia(0.4) hue-rotate(200deg) saturate(1.5) brightness(0.8)',
                                                opacity: 0.7,
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.filter = 'none';
                                                e.target.style.opacity = '1';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.filter = 'grayscale(1) sepia(0.4) hue-rotate(200deg) saturate(1.5) brightness(0.8)';
                                                e.target.style.opacity = '0.7';
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        )} 
                    </div>
                    
                    {/* Slogan Section */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-service-3-trend text-center mt-50">
                                <p style={{color: '#48ba4e', lineHeight: '1.2'}}>
                                    DragonFlyPads is the Booking.com for drones
                                </p>
                                <p style={{color: '#364152', marginTop: '10px', lineHeight: '1.2'}}>
                                    optimizing existing infrastructures through software, not hardware.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DfpBrandArea;
