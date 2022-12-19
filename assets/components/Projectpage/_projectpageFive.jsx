import React from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import "../../styles/font.css";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

function ProjectpageFive(images) {
  const [open, setOpen] = React.useState(false);
  let arrayImage = []
  console.log(images.images);
  images.images.forEach(element => {
    let item = { src: `/images/imageprojet/${element.image}`}
    arrayImage.push(item)
  });

  if(arrayImage.length>0){
  console.log(arrayImage)
    return (
      <>
        <Parallax bgImage="/zenith/images/Z1zIJCKk.jpeg" strength={800}>
          <div className="wrapper" style={{height:"1500px"}}>
            <div className="parentClientView"style={{height:"1200"}}>
              <div className="clientGridView1">
                <div className="boxFlex">
                  {images.images[0] ? (
                    <img
                      className=" contain"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={"/images/imageprojet/" + images.images[0].image}
                      alt=""
                    />
                  ) : (
                    <img
                      className=" contain"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
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
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={"/images/imageprojet/" + images.images[1].image}
                      alt=""
                    />
                  ) : (
                    <img
                      className=" contain"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
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
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={"/images/imageprojet/" + images.images[2].image}
                      alt=""
                    />
                  ) : (
                    <img
                      className=" contain"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
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
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={"/images/imageprojet/" + images.images[3].image}
                      alt=""
                    />
                  ) : (
                    <img
                      className=" contain"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={"/zenith/autre/noImg.png"}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
              <div className="columns is-mobile is-centered" style={{ width: "100%"}}>            
                <button onClick={() => setOpen(true)} className="btnS center light letterSpacingM marginBottom2 mb-6">
                  EN VOIR +
                </button>
              </div>  
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              plugins={[Thumbnails]}
              slides={arrayImage}
            />
          </div>
        </Parallax>
      </>
    );
  }
}

export default ProjectpageFive;
