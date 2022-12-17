import React from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import "../../styles/font.css";

function ProjectpageFive(images) {
  console.log(images.images);
  return (
    <>
      <Parallax bgImage="/zenith/images/Z1zIJCKk.jpeg" strength={800}>
        <div className="wrapper">
          <div className="parentClientView">
            <div className="clientGridView1">
              <div className="boxFlex">
                {images.images[0] ? (
                  <img
                    className=" contain"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    src={"/images/imageprojet/" + images.images[0].image}
                    alt=""
                  />
                ) : (
                  <img
                    className=" contain"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    src={"/zenith/autre/noImg.png"}
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="clientGridView2">
              <div className="boxFlex">
                {images.images[1] ? (
                  <img
                    className=" contain"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    src={"/images/imageprojet/" + images.images[1].image}
                    alt=""
                  />
                ) : (
                  <img
                    className=" contain"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    src={"/zenith/autre/noImg.png"}
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="clientGridView3">
              <div className="boxFlex">
                {images.images[2] ? (
                  <img
                    className=" contain"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    src={"/images/imageprojet/" + images.images[2].image}
                    alt=""
                  />
                ) : (
                  <img
                    className=" contain"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    src={"/zenith/autre/noImg.png"}
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="clientGridView4">
              <div className="boxFlex">
                {images.images[3] ? (
                  <img
                    className=" contain"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    src={"/images/imageprojet/" + images.images[3].image}
                    alt=""
                  />
                ) : (
                  <img
                    className=" contain"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    src={"/zenith/autre/noImg.png"}
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
}

export default ProjectpageFive;
