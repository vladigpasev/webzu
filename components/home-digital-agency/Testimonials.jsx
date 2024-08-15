'use client';
import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Testimonials() {
  const swiperOptions = {
    modules: [Pagination, Navigation],
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.testimonials-minim .swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.testimonials-minim .swiper-button-next',
      prevEl: '.testimonials-minim .swiper-button-prev',
    },
  };
  return (
    <section className="testimonials">
      <div className="container section-padding bord-bottom-grd">
        <div className="row">
          <div className="col-lg-4 md-mb50">
            <div className="img-full">
              <div className="fit-img">
                <img src="/assets/imgs/testim/bg.jpg" alt="" />
              </div>
              <div className="fix-img">
                <img src="/assets/imgs/arw1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cont-full">
              <div
                className="testim-swiper"
                data-carousel="swiper"
                data-loop="true"
                data-space="30"
              >
                <Swiper
                  {...swiperOptions}
                  id="content-carousel-container-unq-testim"
                  className="swiper-container"
                  data-swiper="container"
                >
                  <SwiperSlide>
                    <div className="item">
                      <div className="content">
                        <div className="text">
                          <p className="fz-30">
                            I have been hiring people in this space for a number
                            of years and I have never seen this level of
                            professionalism. It really feels like you are
                            working with a team that can get the job done.
                          </p>
                        </div>
                        <div className="info d-flex align-items-center pt-40 mt-40 bord-thin-top">
                          <div>
                            <div className="fit-img circle">
                              <img src="/assets/imgs/testim/t1.jpg" alt="" />
                            </div>
                          </div>
                          <div className="ml-20">
                            <h5>Adam Beckley</h5>
                            <span className="sub-title main-color">
                              Founder & CEO
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <div className="content">
                        <div className="text">
                          <p className="fz-30">
                            I have been hiring people in this space for a number
                            of years and I have never seen this level of
                            professionalism. It really feels like you are
                            working with a team that can get the job done.
                          </p>
                        </div>
                        <div className="info d-flex align-items-center pt-40 mt-40 bord-thin-top">
                          <div>
                            <div className="fit-img circle">
                              <img src="/assets/imgs/testim/t2.jpg" alt="" />
                            </div>
                          </div>
                          <div className="ml-20">
                            <h5>Adam Beckley</h5>
                            <span className="sub-title main-color">
                              Founder & CEO
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="256.721"
                  height="208.227"
                  viewBox="0 0 256.721 208.227"
                  className="qout-svg"
                >
                  <path
                    data-name="Path"
                    d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                    transform="translate(121.55 640.568)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                    opacity="0.322"
                  ></path>
                </svg>
              </div>
              <div className="swiper-arrow-control control-abslout">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
              <div className="circle-blur">
                <img src="/assets/imgs/patterns/blur1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
