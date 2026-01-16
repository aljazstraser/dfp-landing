import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {

  // Carousel items from the removed bullet point list
  const carouselItems = [
    "Interoperability layer between UTM/USSP and ground infrastructures",
    "Optimized scheduling, charging, weather, and service allocation",
    "100% agnostic to drone, operator, or infrastructure",
    "API-ready platform for smart, autonomous logistics",
    "Enabling BVLOS operations through integrated ground-UTM coordination"
  ];

  return (
    <>
      <section className="tp-hero-area tp-hero-space" style={{minHeight: '100vh', padding: '0', paddingTop: '0', paddingBottom: '60px', display: 'flex', alignItems: 'center', position: 'relative', marginTop: 0, overflow: 'hidden'}}>
        {/* Video Background Layer - Absolute positioned to cover entire section */}
        <div 
          className="tp-hero-video-background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            overflow: 'hidden'
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              top: 'calc(50% - 4px)',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              minWidth: '100%',
              minHeight: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          >
            <source src="/assets/vid/hero-01-loop.mp4?v=3" type="video/mp4" />
          </video>
        </div>
        
        {/* Content Layer - Above Video */}
        <div className="container" style={{position: 'relative', zIndex: 10, paddingTop: '60px', paddingBottom: '60px', width: '100%'}}>
          <div className="tp-hero-wrapper p-relative" style={{width: '100%'}}> 
            <div className="hero-active-1" style={{width: '100%'}}>
              <div className="tp-hero-inner-1" style={{width: '100%', position: 'relative'}}>
                <div className="tp-hero-1">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="tp-hero-content p-relative" style={{display: 'flex', justifyContent: 'flex-start'}}>
                        {/* Box design as background container */}
                        <div className="tp-hero-box-design" style={{position: 'relative', maxWidth: '700px', width: '100%'}}>
                          {/* Main white semi-transparent box */}
                          <div style={{
                            width: '100%',
                            minHeight: '500px',
                            backgroundColor: 'rgba(255, 255, 255, 0.6)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '8px',
                            position: 'relative',
                            padding: '60px 60px',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            zIndex: 1
                          }}>
                            {/* Content inside the box */}
                            <div className="tp-hero-title-wrapper wow fadeInUp" data-wow-delay="0.8s" style={{position: 'relative', zIndex: 3, textAlign: 'left'}}>
                              <span className="tp-section-title__pre p-relative">
                                {" "}
                                <span className="title-pre-color">
                                  {""}
                                </span>
                              </span>
                              <h3 className="tp-hero-title dfp-hero-title" style={{fontSize: '38px', lineHeight: '1.2', textAlign: 'left'}}>
                                Connecting Air and Ground.{" "}
                                <span style={{color: '#4e9ee9'}}>
                                  Seamlessly.
                                </span>
                              </h3>
                              <p className="tp-hero-subtext" style={{fontSize: '24px', fontWeight: '500', color: 'var(--tp-text-2)', marginBottom: '30px', marginTop: '20px', textAlign: 'left'}}>DragonFlyPads is a SaaS platform for real-time orchestration of drone operations. We connect flight systems, vertipads, and services into one intelligent, interoperable network.</p>
                              
                              {/* Carousel for bullet points */}
                              <div className="tp-hero-carousel" style={{marginTop: '20px', textAlign: 'left'}}>
                                <Swiper
                                  modules={[Autoplay, Pagination]}
                                  spaceBetween={30}
                                  slidesPerView={1}
                                  autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                  }}
                                  pagination={{
                                    clickable: true,
                                    bulletClass: 'swiper-pagination-bullet hero-carousel-bullet',
                                    bulletActiveClass: 'swiper-pagination-bullet-active hero-carousel-bullet-active',
                                  }}
                                  loop={true}
                                  style={{
                                    paddingBottom: '40px'
                                  }}
                                >
                                  {carouselItems.map((item, index) => (
                                    <SwiperSlide key={index}>
                                      <p style={{
                                        fontSize: '18px',
                                        fontWeight: '400',
                                        color: 'var(--tp-text-2)',
                                        margin: 0,
                                        padding: '0',
                                        textAlign: 'left'
                                      }}>
                                        {item}
                                      </p>
                                    </SwiperSlide>
                                  ))}
                                </Swiper>
                              </div>
                            </div>
                            
                            {/* Detail boxes around the main box - positioned behind content */}
                            {/* Top left detail box - white */}
                            <div style={{
                              position: 'absolute',
                              top: '-20px',
                              left: '-20px',
                              width: '60px',
                              height: '60px',
                              backgroundColor: 'rgba(255, 255, 255, 0.3)',
                              borderRadius: '4px',
                              border: '1px solid rgba(255, 255, 255, 0.4)',
                              zIndex: 0
                            }}></div>
                            
                            {/* Top right detail box - green */}
                            <div style={{
                              position: 'absolute',
                              top: '-20px',
                              right: '-20px',
                              width: '50px',
                              height: '50px',
                              backgroundColor: '#5b9bd4',
                              borderRadius: '4px',
                              opacity: 0.8,
                              zIndex: 0
                            }}></div>
                            
                            {/* Bottom left detail box - blueish black */}
                            <div style={{
                              position: 'absolute',
                              bottom: '-20px',
                              left: '-20px',
                              width: '55px',
                              height: '55px',
                              backgroundColor: '#48ba4e',
                              borderRadius: '4px',
                              opacity: 0.9,
                              zIndex: 0
                            }}></div>
                            
                            {/* Bottom right detail box - white */}
                            <div style={{
                              position: 'absolute',
                              bottom: '-20px',
                              right: '-20px',
                              width: '45px',
                              height: '45px',
                              backgroundColor: 'rgba(255, 255, 255, 0.25)',
                              borderRadius: '4px',
                              border: '1px solid rgba(255, 255, 255, 0.3)',
                              zIndex: 0
                            }}></div>
                            
                            {/* Left side detail box - green */}
                            <div style={{
                              position: 'absolute',
                              left: '-30px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              width: '40px',
                              height: '40px',
                              backgroundColor: '#5b9bd4',
                              borderRadius: '4px',
                              opacity: 0.7,
                              zIndex: 0
                            }}></div>
                            
                            {/* Right side detail box - blueish black */}
                            <div style={{
                              position: 'absolute',
                              right: '-30px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              width: '50px',
                              height: '50px',
                              backgroundColor: '#48ba4e',
                              borderRadius: '4px',
                              opacity: 0.8,
                              zIndex: 0
                            }}></div>
                            
                            {/* Top center detail box - white */}
                            <div style={{
                              position: 'absolute',
                              top: '-30px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '35px',
                              height: '35px',
                              backgroundColor: 'rgba(255, 255, 255, 0.2)',
                              borderRadius: '4px',
                              border: '1px solid rgba(255, 255, 255, 0.3)',
                              zIndex: 0
                            }}></div>
                            
                            {/* Bottom center detail box - green */}
                            <div style={{
                              position: 'absolute',
                              bottom: '-30px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '42px',
                              height: '42px',
                              backgroundColor: '#5b9bd4',
                              borderRadius: '4px',
                              opacity: 0.75,
                              zIndex: 0
                            }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Custom styles for carousel pagination */}
        <style dangerouslySetInnerHTML={{__html: `
          .hero-carousel-bullet {
            width: 8px !important;
            height: 8px !important;
            border-radius: 50% !important;
            background: #ffffff !important;
            opacity: 1 !important;
            transition: all 0.3s ease !important;
            margin: 0 4px !important;
            cursor: pointer !important;
          }
          
          .hero-carousel-bullet-active {
            width: 32px !important;
            height: 8px !important;
            border-radius: 4px !important;
            background: #4e9ee9 !important;
            opacity: 1 !important;
          }
          
          .tp-hero-carousel .swiper-pagination {
            bottom: 0 !important;
            text-align: left !important;
            left: 0 !important;
            right: auto !important;
            width: auto !important;
          }
          
          @media (max-width: 575px) {
            .tp-hero-title.dfp-hero-title {
              font-size: 30px !important;
            }
            .tp-hero-subtext {
              font-size: 16px !important;
            }
          }
          
          @media (max-width: 767px) {
            .tp-hero-subtext {
              font-size: 18px !important;
            }
          }
          
          .tp-hero-area.tp-hero-space {
            padding-top: 0 !important;
            margin-top: 0 !important;
          }
          
          .tp-hero-video-background {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            z-index: 1 !important;
            overflow: hidden !important;
          }
          
          .tp-hero-video-background video {
            position: absolute !important;
            top: calc(50% - 4px) !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            width: 100% !important;
            height: 100% !important;
            min-width: 100% !important;
            min-height: 100% !important;
            object-fit: cover !important;
            object-position: center !important;
          }
          
          @media (min-width: 992px) {
            .tp-hero-area.tp-hero-space {
              min-height: auto !important;
              max-height: 900px !important;
            }
            .tp-hero-area.tp-hero-space .container {
              padding-top: 60px !important;
            }
          }
          
          @media (max-width: 991px) {
            .tp-hero-area.tp-hero-space {
              min-height: 100vh !important;
              min-height: 100dvh !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              margin-top: -80px !important;
              padding-top: 0 !important;
            }
            .tp-hero-area.tp-hero-space .container {
              padding-top: 48px !important;
              padding-bottom: 48px !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
            }
            .tp-hero-content {
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
              padding-top: 48px !important;
              padding-bottom: 48px !important;
            }
            .tp-hero-box-design {
              margin: 0 auto !important;
            }
            .tp-hero-video-background {
              top: 0 !important;
              margin-top: -80px !important;
              padding-top: 0 !important;
            }
            .tp-hero-video-background video {
              top: 50% !important;
              margin-top: 0 !important;
            }
          }
        `}} />
      </section>

    </>
  );
};

export default HeroSlider;
