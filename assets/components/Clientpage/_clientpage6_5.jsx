import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Element } from "react-scroll";
import { Parallax } from 'react-parallax';
import "../../styles/font.css"

function Clientpage6_5(item) {
  let slider = []
  console.log(item)
  if(item.item.length >0) {
    item.item.forEach(element => {
        console.log(element);
        let newSlider = undefined
        if(element.header){
            newSlider = (
              <SwiperSlide key={element.id} className="swiperSlide2">
                <a
                  href={`/projet/${element.id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div
                    className="boxCréation"
                    onMouseOut={(e) => RemoveBlurDetail(e)}
                    onMouseOver={(e) => BlurDetail(e)}
                  >
                    <div
                      style={{
                        width: "200px",
                        height: "100%",
                        position: "absolute",
                      }}
                    >
                      <p
                        style={{
                          pointerEvents: "none",
                          display: "none",
                          width: "200px",
                          textAlign: "center",
                          position: "absolute",
                          left: "0px",
                          top: "200px",
                        }}
                      >
                        {element.mission}
                      </p>
                    </div>
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={`/images/imageprojet/${element.header}`}
                      alt=""
                    />
                  </div>
                </a>
              </SwiperSlide>
            );            
        }else{
            newSlider = (
              <SwiperSlide key={element.id} className="swiperSlide2">
                <a
                  href={`/projet/${element.id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div
                    className="boxCréation"
                    onMouseOut={(e) => RemoveBlurDetail(e)}
                    onMouseOver={(e) => BlurDetail(e)}
                    style={{
                        background: "#02111D",}}
                  >
                    <div
                      style={{
                        width: "200px",
                        height: "100%",
                        position: "absolute",
                      }}
                    >
                      <p
                        style={{
                          pointerEvents: "none",
                          display: "none",
                          width: "200px",
                          textAlign: "center",
                          position: "absolute",
                          left: "0px",
                          top: "200px",
                        }}
                      >
                        {element.mission}
                      </p>
                    </div>
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      src={"/zenith/autre/noImg.png"}
                      alt=""
                    />
                  </div>
                </a>
              </SwiperSlide>
            );            
        }
        slider.push(newSlider) 
    });
  }else{
    slider = ( <h1 className="titreA medium letterSpacing marginStop">rien a voir</h1> )
  }
  function BlurDetail(e){
    console.log(e)
    e.target.style.backdropFilter = "blur(4px)";
    e.target.children[0].style.display = "inline"
  }
  function RemoveBlurDetail(e){
    console.log(e)
    e.target.style.backdropFilter = "blur(0)";
    e.target.children[0].style.display = "none"
  }
  if(slider.length > 0){
    return (
      <>
        {/* <div style={{backgroundImage: "url(/zenith/images/x9nes5V.jpg)"}} className="background">
  
          <video playsInline autoPlay muted loop>
            <source src="/zenith/video/videobg4.mp4" type="video/mp4"></source>
          </video> */}
        {/* <Element name="scroll-to-element4" className="element"></Element> */}
        <Parallax bgImage="/zenith/images/Z1zIJCKk.jpeg" strength={800}>
  
        <div className="" style={{paddingTop: '50px',paddingBottom: '75px'}}>
          <div
          //   data-aos="zoom-in"
          //   data-aos-mirror=""
          //   data-aos-once="false"
          //   data-aos-anchor-placement=""
          //   data-aos-duration="1500"
          >
            <div className="wrapper2">
              <h3
                className="titreA medium letterSpacing marginStop mb-5"
              //   data-aos="fade-up"
              //   data-aos-duration="1000"
              >
                PROJETS LIÉS
              </h3>
  
              <Swiper
              style={{height: '500px'}}
                slidesPerView={1}
                centeredSlides={false}
                spaceBetween={0}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 7,
                    spaceBetween: 1,
                  },
                }}
                className="swiper2"
              //   data-aos="fade-up"
              //   data-aos-duration="1000"
              >
                {slider}
                {/* <SwiperSlide className="swiperSlide2">
                <div className="boxCréation" onMouseOut={(e) => RemoveBlurDetail(e)} onMouseOver={(e) => BlurDetail(e)}><div style={{ width: "200px", height: "100%", position: "absolute"}}><p style={{pointerEvents: "none", display: "none", width: "200px", textAlign:"center",position:"absolute", left: "0px", top:"200px"}}>{item.item[1].mission}</p></div><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`/zenith/images/_DSC1300.jpg`} alt="" /></div>            
                </SwiperSlide>
                <SwiperSlide className="swiperSlide2">
                <div className="boxCréation" onMouseOut={(e) => RemoveBlurDetail(e)} onMouseOver={(e) => BlurDetail(e)}><div style={{ width: "200px", height: "100%", position: "absolute"}}><p style={{pointerEvents: "none", display: "none", width: "200px", textAlign:"center",position:"absolute", left: "0px", top:"200px"}}>{item.item[2].mission}</p></div><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`/zenith/images/1J4A5009 (1).jpg`} alt="" /></div>             
                </SwiperSlide>
                <SwiperSlide className="swiperSlide2">
                <div className="boxCréation" onMouseOut={(e) => RemoveBlurDetail(e)} onMouseOver={(e) => BlurDetail(e)}><div style={{ width: "200px", height: "100%", position: "absolute"}}><p style={{pointerEvents: "none", display: "none", width: "200px", textAlign:"center",position:"absolute", left: "0px", top:"200px"}}>{item.item[3].mission}</p></div><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`/zenith/images/Capture d’écran 2022-12-03 à 21.33.29.png`} alt="" /></div>            
                </SwiperSlide>
                <SwiperSlide className="swiperSlide2">
                <div className="boxCréation" onMouseOut={(e) => RemoveBlurDetail(e)} onMouseOver={(e) => BlurDetail(e)}><div style={{ width: "200px", height: "100%", position: "absolute"}}><p style={{pointerEvents: "none", display: "none", width: "200px", textAlign:"center",position:"absolute", left: "0px", top:"200px"}}>{item.item[4].mission}</p></div><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`/zenith/images/IMG_7487.jpg`} alt="" /></div>          
                </SwiperSlide>
                <SwiperSlide className="swiperSlide2">
                <div className="boxCréation" onMouseOut={(e) => RemoveBlurDetail(e)} onMouseOver={(e) => BlurDetail(e)}><div style={{ width: "200px", height: "100%", position: "absolute"}}><p style={{pointerEvents: "none", display: "none", width: "200px", textAlign:"center",position:"absolute", left: "0px", top:"200px"}}>{item.item[5].mission}</p></div><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`/zenith/images/IMG_0004.jpg`} alt="" /></div>
                </SwiperSlide>
                <SwiperSlide className="swiperSlide2">
                <div className="boxCréation" onMouseOut={(e) => RemoveBlurDetail(e)} onMouseOver={(e) => BlurDetail(e)}><div style={{ width: "200px", height: "100%", position: "absolute"}}><p style={{pointerEvents: "none", display: "none", width: "200px", textAlign:"center",position:"absolute", left: "0px", top:"200px"}}>{item.item[4].mission}</p></div><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`/zenith/images/IMG_9838.jpg`} alt="" /></div>          
                </SwiperSlide>
                <SwiperSlide className="swiperSlide2">
                <div className="boxCréation" onMouseOut={(e) => RemoveBlurDetail(e)} onMouseOver={(e) => BlurDetail(e)}><div style={{ width: "200px", height: "100%", position: "absolute"}}><p style={{pointerEvents: "none", display: "none", width: "200px", textAlign:"center",position:"absolute", left: "0px", top:"200px"}}>{item.item[5].mission}</p></div><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`/zenith/images/DIA_0759.jpg`} alt="" /></div>
                </SwiperSlide> */}
              </Swiper>
              <div>
              </div>
            </div>
          </div>
        </div>
        </Parallax>
      </>
    );
  }

}
export default Clientpage6_5;