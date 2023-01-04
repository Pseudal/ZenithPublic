import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Parallax } from 'react-parallax';
import "../../styles/font.css"

function Emotion() {
  const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`/api/emotions/1`,{method:'GET',headers:{Accept: 'application/json','Content-Type': 'application/json'}})
    .then(res => res.json())
    .then(
      (result) => {
      setIsLoaded(true);
      setItems(result);
      //console.log(result);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
      setIsLoaded(true);
      setError(error);
      }
    )
  }, [])
  return (
    <>
      {/* <div
        style={{ backgroundImage: "url(/zenith/images/x9nes5V.jpg)" }}
        className="background"
        alt="émotion"
      > */}
        {/* <video playsInline autoPlay muted loop>
          <source src="/zenith/video/videobg2.mp4" type="video/mp4"></source>
        </video> */}
        <Parallax bgImage="/zenith/images/Z1zIJCKk.jpeg" strength={200}>

        <div className="" style={{paddingTop: '50px'}}>
        <div data-aos="zoom-in" data-aos-mirror="true"data-aos-once="false"data-aos-anchor-placement="top-center" data-aos-duration="1500">  
          <div className="wrapper2">
            <div className="container2 ">
              <h1
                className="titreA medium letterSpacing marginStop"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                ÉMOTION
              </h1>
              <h6
                className="light letterSpacingS sousTitre"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                FAIRE VIBRER LA CORDE INVISIBLE
              </h6>
              <div className="containerFlex center">
                <div
                  className="boxVideo"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
					<iframe style={{width: '100%', height: '100%', objectFit: 'cover'}} src={`https://www.youtube.com/embed/${items["Video"]}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
              </div>
              <h4
                className="titreB light letterSpacing container center accroche"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                SUSCITER L’EMOTION EN UN INSTANT
              </h4>
              <button onClick={()=>{document.location = "/clients/1"}}
                className="marginBottom2 btnS center light letterSpacingM"
              >
                EN VOIR +
              </button>
            </div>
          </div>
        </div>
      </div>
      </Parallax>
    </>
  );
}

export default Emotion;
