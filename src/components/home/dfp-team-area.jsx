import Link from 'next/link';
import Image from 'next/image';
import dfp_team_data from '@/src/data/dfp-team-data';
import React from 'react';

import PlusIcon from '@/src/svg/plus-icon';
import LineArrowTwo from '@/src/svg/line-arrow-2';
import { SocialLinksTwo } from '@/src/common/social-links';

const DfpTeamArea = () => {
    
    return (
        <>
            <section id="company-section" className="tp-team-area p-relative pt-120 pb-100" style={{backgroundColor: '#F8F9FA'}}>
                <style dangerouslySetInnerHTML={{__html: `
                    #company-section .title-center-shape {
                        margin-top: 40px !important;
                    }
                `}} />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-team-title-wrapper text-center mb-50">
                                <h3 className="tp-section-title">Our Mission: <br />Making Drone Operations <br /><span style={{color: '#4e9ee9'}}>Effortless, Everywhere.</span>
                                   <span className="title-center-shape" style={{left: '50%', transform: 'translateX(-50%)'}}> 
                                      <LineArrowTwo />
                                   </span>
                                </h3>
                                <p className="mt-4 mb-0" style={{maxWidth: '800px', margin: '20px auto 0', fontSize: '16px', lineHeight: '28px', color: '#5A627D'}}>Founded in 2020, DragonFlyPads is a French SaaS company pioneering the Ground-UTM layer — the missing link between air traffic management and drone logistics. Our team combines expertise in software engineering, mathematics, real estate, and aerospace logistics to deliver scalable, interoperable solutions for the drone ecosystem.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <style jsx>{`
                        @media (min-width: 992px) {
                            .dfp-team-grid {
                                justify-content: center;
                            }
                        }
                    `}</style>
                    <div className="row dfp-team-grid">
                        {dfp_team_data.filter(member => !member.hidden).map((member) =>  
                            <div key={member.id} className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 mb-30">
                                <div className="tp-team-wrapper p-relative">
                                    <div className="tp-team-wrapper-thumb">
                                        <Link href={`mailto:${member.email}`}>
                                            <Image src={member.img} alt={member.name} />
                                        </Link>
                                        {/* <div className="tp-team-social-info"> 
                                            <SocialLinksTwo /> 
                                        </div> */}
                                    </div>
                                    <div className="tp-team-wrapper-content d-flex align-items-center justify-content-between">
                                        <div className="tp-team-wrapper-content-text">
                                            <h3 className="team-title"><Link href={`mailto:${member.email}`}>{member.name}</Link></h3>
                                            <p style={{color: '#48ba4e'}}>{member.job_title}</p>
                                        </div>
                                        {/* <div className="tp-team-wrapper-icon">
                                            <span className="tp-team-social">
                                                <PlusIcon /> 
                                            </span>
                                        </div> */}
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

export default DfpTeamArea;