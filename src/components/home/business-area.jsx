import React, { useState } from 'react';
import Image from 'next/image';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import ImagePopup from '@/src/modals/ImagePopup';

import  business_shape_1 from "@assets/img/hero/drone-blue.png";
import  business_shape_2 from "@assets/img/hero/drone-blue.png";
import  business_shape_3 from "@assets/img/hero/drone-green.png";
import  business_shape_4 from "@assets/img/business/shape-4.png" ;

import AngleArrow from '@/src/svg/angle-arrow';
import LineArrowTwo from '@/src/svg/line-arrow-2';
import CodeIcon from '@/src/svg/code-icon';
import TechIcon from '@/src/svg/tech-icon';
import Link from 'next/link';
import LineArrowSix from '@/src/svg/line-arrow-6';

const BusinessArea = () => {
    // Generate image paths for UI screenshots
    const uiImages = Array.from({ length: 12 }, (_, i) => 
        `/assets/pics/dfp-ui-${String(i + 1).padStart(2, '0')}.webp`
    );

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const handleThumbnailClick = (index) => {
        // Set photoIndex first, then open after a tiny delay to ensure state is updated
        setPhotoIndex(index);
        // Use setTimeout to ensure state is updated before opening
        setTimeout(() => {
            setIsOpen(true);
        }, 0);
    };

    const swiperSettings = {
        modules: [Pagination, Autoplay],
        spaceBetween: 12,
        slidesPerView: 3,
        pagination: {
            clickable: true,
            bulletClass: 'swiper-pagination-bullet ui-carousel-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active ui-carousel-bullet-active',
        },
        loop: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 12,
            },
        },
    };
    return (
        <>
            <style jsx>{`
               .tp-business-thumb img {
                  border-radius: 0 !important;
                  transform: translateY(0) !important;
               }
               @media (min-width: 992px) {
                  .tp-business-thumb-wrapper {
                     margin-right: 32px;
                  }
               }
               #platform-section .title-left-shape svg path {
                  fill: #5b9bd4 !important;
               }
               #platform-section .tp-business-title-wrapper > p::after {
                  background: #5b9bd4 !important;
               }
               #platform-section .shape-2 {
                  width: 26px !important;
                  height: 26px !important;
               }
               .tp-ui-thumbnails {
                  margin-top: 40px;
                  padding-left: 20px;
               }
               .tp-ui-thumbnail-item {
                  cursor: pointer;
                  position: relative;
                  overflow: hidden;
                  border-radius: 8px;
                  border: 2px solid #e0e0e0;
                  transition: border-color 0.3s ease;
                  aspect-ratio: 16 / 9;
               }
               .tp-ui-thumbnail-item:hover {
                  border-color: #4e9ee9;
               }
               .tp-ui-thumbnail-item img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
               }
               /* Pagination dots styling - matching hero section */
               .tp-ui-thumbnails :global(.swiper-pagination) {
                  position: relative;
                  margin-top: 20px;
                  text-align: center;
                  padding-left: 0;
               }
               .tp-ui-thumbnails :global(.ui-carousel-bullet) {
                  width: 8px;
                  height: 8px;
                  background: #e0e0e0;
                  opacity: 1;
                  border-radius: 4px;
                  margin: 0 4px;
                  transition: all 0.3s ease;
                  cursor: pointer;
               }
               .tp-ui-thumbnails :global(.ui-carousel-bullet-active) {
                  width: 24px;
                  height: 8px;
                  background: #4e9ee9;
                  border-radius: 4px;
               }
            `}</style>
            <section id="platform-section" className="tp-business-area p-relative pt-110">
            <div className="tp-business-shape">
               <Image className="shape-1 d-none d-lg-block" src={business_shape_1} alt="theme-pure" />
               <Image className="shape-2" src={business_shape_2} alt="theme-pure" />
               <Image className="shape-3" src={business_shape_3} alt="theme-pure" />
               <Image className="shape-4" src={business_shape_4} alt="theme-pure" />
            </div>
            <div className="container">
               <div className="row align-items-start">
                  <div className="col-lg-7">
                     <div className="tp-business-thumb-wrapper p-relative">
                        <div className="tp-business-thumb text-center">
                           <Image src="/assets/pics/app-laptop-01-missions.webp" alt="DragonFlyPads Platform" width={1200} height={800} style={{width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', borderRadius: '0'}} />
                        </div>
                        <div className="circle-animation business-4">
                           <span className="tp-circle-1"></span>
                        </div>
                        <div className="circle-animation business-3">
                           <span className="tp-circle-2"></span>
                        </div>
                        <div className="circle-animation business-2">
                           <span className="tp-circle-3"></span>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-5">
                     <div className="tp-business-title-wrapper">
                        <span className="tp-section-title__pre d-none">
                           feature <span className="title-pre-color">IT Solutions</span> 
                           <AngleArrow />
                        </span>
                        <h3 className="tp-section-title"><span style={{color: '#4e9ee9'}}>The Operating System</span><br />for Drone Infrastructures
                           <span className="title-left-shape"> 
                              <LineArrowTwo />
                           </span>
                        </h3>
                        <p><strong>DragonFlyPads provides the missing digital layer between airspace management and ground operations.</strong> Our SaaS platform enables any vertipad, logistics site, or aeronautical infrastructure to connect, exchange data, and monetize services in real time.</p>
                        
                        {/* UI Screenshots Thumbnail Carousel */}
                        <div className="tp-ui-thumbnails mt-40">
                           <Swiper {...swiperSettings} className="ui-thumbnails-carousel">
                              {uiImages.map((image, index) => (
                                 <SwiperSlide key={index}>
                                    <div 
                                       className="tp-ui-thumbnail-item"
                                       onClick={() => handleThumbnailClick(index)}
                                    >
                                       <Image 
                                          src={image} 
                                          alt={`DragonFlyPads UI Screenshot ${index + 1}`}
                                          width={400}
                                          height={225}
                                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                       />
                                    </div>
                                 </SwiperSlide>
                              ))}
                           </Swiper>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {isOpen && (
            <ImagePopup
               images={uiImages}
               setIsOpen={setIsOpen}
               photoIndex={photoIndex}
               setPhotoIndex={setPhotoIndex}
            />
         )}
        </>
    );
};

export default BusinessArea;
