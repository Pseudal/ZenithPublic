import React from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import "../../styles/font.css";
import "../../stylesheets/bulma/elements/container.sass"
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

function ClientpageFive(images) {
  const [open, setOpen] = React.useState(false);
  let arrayImage = []
  for (let index = 0; index < images.images.length; index++) {
	  const element = images.images[index];
	  if(element.visible == false){
		continue;
	 }
	 let item = { src: `/images/imageclient/${element.image}`}
	 arrayImage.push(item)	  
  }


  if(arrayImage.length>0){
    console.log("first")
    console.log(arrayImage)
    return (
      <>
        <Parallax bgImage="/zenith/images/Z1zIJCKk.jpeg" strength={800}>
          <div className="wrapper">

          <div style={{width:"100%",height:"100%", display:"flex",justifyContent:"center"}}>

            <div className="columns is-centered" style={{height:"90%",width:"80%", paddingTop:"50px"}}>
              <div className="column is-one-third" style={{background:"#02111D", padding:"0", padding:"0"}}>
              {arrayImage[0] ? (
                    <img
                      className=" "
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        padding:"0"
                      }}
                      src={arrayImage[0].src}
                      alt=""
                    />
                  ) : (<div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:"100%"}}><img style={{width:"50%"}} src={"/zenith/autre/noImg.png"} alt=""/></div>)}
              </div>

              <div className="column is-one-third columns is-multiline mx-5">

                  <div className="column is-full my-5" style={{background:"#02111D", padding:"0"}}>                  
                    {arrayImage[0] ? (
                      <img
                        className=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          padding:"0"
                        }}
                        src={arrayImage[1].src}
                        alt=""
                      />
                    ) : (<div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:"100%"}}><img style={{width:"50%"}} src={"/zenith/autre/noImg.png"} alt=""/></div>)}
                  </div>
                  <div className="column is-full my-5" style={{background:"#02111D", padding:"0"}}>                    
                    {arrayImage[0] ? (
                        <img
                          className=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            padding:"0"
                          }}
                          src={arrayImage[2].src}
                          alt=""
                        />
                      ) : (<div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:"100%"}}><img style={{width:"50%"}} src={"/zenith/autre/noImg.png"} alt=""/></div>)}
                    </div>
              </div>

              <div className="column is-one-third is-mobile" style={{background:"#02111D", padding:"0"}}>
              {arrayImage[0] ? (
                      <img
                        className=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          padding:"0"
                        }}
                        src={arrayImage[3].src}
                        alt=""
                      />
                    ) : (<div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:"100%"}}><img style={{width:"50%"}} src={"/zenith/autre/noImg.png"} alt=""/></div>)}
              </div>
            </div>
          </div>
            <div className="columns is-mobile is-centered mt-5-fullhd" style={{position: "absolute", bottom:"25px", width:"101%"}}>            
              <button onClick={() => setOpen(true)} className="btnS center light letterSpacingM mb-6 mt-0">
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

export default ClientpageFive;
