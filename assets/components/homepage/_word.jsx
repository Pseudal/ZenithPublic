import React, { useState } from "react";
import { Element } from "react-scroll";
import Marquee from "react-fast-marquee";
import "swiper/css";
import { Parallax } from "react-parallax";
import "../../stylesheets/bulma/helpers/spacing.sass";
import "../../styles/font.css";

const Wordpage = ({}) => {
  return (
    <>
      {/* <Parallax bgImage="/zenith/images/6Wvemm3K.jpeg" strength={0}> */}
      <div
        style={{
          backgroundImage: "url(/zenith/images/6Wvemm3K.jpeg)",
          height: "570px",
        }}
        className="demibloc"
        alt="wordpage"
      >
        {/* <video playsInline autoPlay muted loop> */}
        {/* <source src="/zenith/video/videobg4.mp4" type="video/mp4"></source> */}
        {/* </video> */}

        <div className="" alt="Liste de mots" style={{ height: "100%" }}>
          <div
            style={{ width: "100%" }}
            data-aos="zoom-in"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-center"
          >
            <div className="parent">
              <Marquee
                style={{
                  width: "100%",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  height: "170px",
                }}
                gradient={false}
              >
                <h1
                  className="wordpage letterSpacing light grid1 px-6"
                  id="wordpage"
                >
                  RÉACTIVITÉ
                </h1>
                <h1 className="margin medium wordpageText grid2 pr-5">·</h1>
                <h1 className="wordpage letterSpacing outline normal grid3 px-6">
                  PROXIMITÉ
                </h1>
                <h1 className=" margin medium wordpageText outline grid4 pr-5">·</h1>
                <h1 className="wordpage light letterSpacing grid5 px-6">PASSION</h1>
                <h1 className=" wordpageText  medium grid6 pr-5">·</h1>
                <h1 className="wordpage normal outline letterSpacing grid7 px-6">
                  STRATÉGIE
                </h1>
                <h1 className=" wordpageText outline medium grid6 pr-5">·</h1>
              </Marquee>
              <Marquee
                style={{
                  width: "100%",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  height: "170px",
                }}
                direction={"right"}
                gradient={false}
              >
                <h1 className="wordpage normal letterSpacing grid9 px-6">EVENT</h1>
                <h1 className=" wordpageText medium grid10 pr-5">·</h1>
                <h1 className="wordpage marron normal letterSpacing grid11 px-6">
                  ZENITH
                </h1>
                <h1 className=" wordpageText outline medium grid12 pr-5">·</h1>
                <h1 className="wordpage normal letterSpacing grid13 px-6">
                  CONSEIL
                </h1>
                <h1 className=" wordpageText medium grid14 pr-5">·</h1>
                <h1 className="wordpage normal letterSpacing grid15 px-6">
                  COMMUNICATION
                </h1>
                <h1 className=" wordpageText outline medium grid6 pr-5">·</h1>
              </Marquee>
              <Marquee
                style={{
                  width: "100%",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  height: "170px",
                }}
                gradient={false}
              >
                <h1 className="wordpage medium letterSpacing grid17 px-6">
                  CRÉATIVITÉ
                </h1>
                <h1 className=" wordpageText medium grid18 pr-5">·</h1>
                <h1 className="wordpage light outline letterSpacing grid19 px-6">
                  RÊVER
                </h1>
                <h1 className=" wordpageText outline medium grid20 pr-5">·</h1>
                <h1 className="wordpage light letterSpacing grid21 px-6">
                  AMBITION
                </h1>
                <h1 className=" wordpageText medium grid22 pr-5">·</h1>
                <h1 className="wordpage outline normal letterSpacing grid23 px-6">
                  IMAGINATION
                </h1>
                <h1 className=" wordpageText outline medium grid6 pr-5">·</h1>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      {/* </Parallax> */}
    </>
  );
};

export default Wordpage;
