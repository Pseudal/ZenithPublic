import React, { useEffect, useState } from 'react'
import { Parallax } from 'react-parallax';
import { a } from 'react-router-dom';
import "../../styles/font.css"

function Satisfaction() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
  
	// Remarque : le tableau vide de dépendances [] indique
	// que useEffect ne s’exécutera qu’une fois, un peu comme
	// componentDidMount()
	useEffect(() => {
    fetch("/getSatisfaction")
		.then(res => res.json())
		.then(
		  (result) => {
        setIsLoaded(true);
        setItems(result);
      console.log(result)
		  },
		  // Remarque : il faut gérer les erreurs ici plutôt que dans
		  // un bloc catch() afin que nous n’avalions pas les exceptions
		  // dues à de véritables bugs dans les composants.
		  (error) => {
			setIsLoaded(true);
			setError(error);
		  }
		)
	}, [])
  
	if (error) {
	  return <div>Erreur : {error.message}</div>;
	} else if (!isLoaded) {
	  return <div>Chargement...</div>;
	} else {
    console.log(items);
		return (
			<>
      {/* <div style={{backgroundImage: "url(/zenith/images/x9nes5V.jpg)"}} className="background">

      <video playsInline autoPlay muted loop>
					<source src="/zenith/video/videobg5.mp4" type="video/mp4"></source>
				</video> */}
      {/* <Parallax bgImage="/zenith/images/aWELhk8A.jpeg" strength={0}> */}

      <div className="" style={{paddingTop: '50px', backgroundImage: "url(/zenith/images/aWELhk8A.jpeg)", height:"auto", paddingBottom: "1px"}}>
        <div>
        <div className="wrapper2">


          <h1 className="titreA medium letterSpacing marginStop" data-aos="fade-up" data-aos-duration="1000">SATISFACTION</h1>
          <h6 className="titreCenter light letterSpacingS" data-aos="fade-up" data-aos-duration="1000">ÊTRE À VOS CÔTÉS, C’EST AVANT TOUT DES RENCONTRES.</h6>
          <h6 className="titreCenter light letterSpacingS paddingBottom" data-aos="fade-up" data-aos-duration="1000">DES HISTOIRES HUMAINES, EXCEPTIONNELLES, ORIGINALES.</h6>
          
          <div className="containerMax center">
            <a rel="stylesheet" href={`/client/${items[0][0].id}`} ><div data-aos="fade-up" data-aos-delay="0" data-aos-once="false" data-aos-duration="1000" style={{marginLeft:"88px"}} className="boxXS"><img src={`/images/logoclient/${items[0][0].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[0][1].id}`} ><div data-aos="fade-up" data-aos-delay="0" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[0][1].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[0][2].id}`} ><div data-aos="fade-up" data-aos-delay="0" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[0][2].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[0][3].id}`} ><div data-aos="fade-up" data-aos-delay="0" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[0][3].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[0][4].id}`} ><div data-aos="fade-up" data-aos-delay="0" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[0][4].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[0][5].id}`} ><div data-aos="fade-up" data-aos-delay="0" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[0][5].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[0][6].id}`} ><div data-aos="fade-up" data-aos-delay="0" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[0][6].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[0][7].id}`} ><div data-aos="fade-up" data-aos-delay="0" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[0][7].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[0][8].id}`} ><div data-aos="fade-up" data-aos-delay="0" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[0][8].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[0][9].id}`} ><div data-aos="fade-up" data-aos-delay="0" data-aos-once="false" data-aos-duration="1000" style={{marginRight:"88px"}} className="boxXS"><img src={`/images/logoclient/${items[0][9].logo}`} alt="" width={70} /></div></a>
          </div>

          <div className="containerMax center">
           <a rel="stylesheet" href={`/client/${items[1][19].id}`} ><div data-aos="fade-up" data-aos-delay="600" data-aos-once="false" data-aos-duration="1000" style={{marginLeft:"88px"}} className="boxXS"><img src={`/images/logoclient/${items[1][19].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[1][0].id}`} ><div data-aos="fade-up" data-aos-delay="600" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[1][0].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[1][1].id}`} ><div data-aos="fade-up" data-aos-delay="600" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[1][1].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[1][2].id}`} ><div data-aos="fade-up" data-aos-delay="600" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[1][2].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[1][3].id}`} ><div data-aos="fade-up" data-aos-delay="600" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[1][3].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[1][4].id}`} ><div data-aos="fade-up" data-aos-delay="600" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[1][4].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[1][5].id}`} ><div data-aos="fade-up" data-aos-delay="600" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[1][5].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[1][6].id}`} ><div data-aos="fade-up" data-aos-delay="600" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[1][6].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[1][7].id}`} ><div data-aos="fade-up" data-aos-delay="600" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[1][7].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[1][8].id}`} ><div data-aos="fade-up" data-aos-delay="600" data-aos-once="false" data-aos-duration="1000" style={{marginRight:"88px"}} className="boxXS"><img src={`/images/logoclient/${items[1][8].logo}`} alt="" width={70} /></div></a>
          </div>

          <div className="containerMax center">
            <a rel="stylesheet" href={`/client/${items[1][9].id}`} ><div data-aos="fade-up" data-aos-delay="1200" data-aos-once="false" data-aos-duration="1000" style={{marginLeft:"88px"}} className="boxXS"><img src={`/images/logoclient/${items[0][9].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[1][10].id}`} ><div data-aos="fade-up" data-aos-delay="1200" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[1][10].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[1][11].id}`} ><div data-aos="fade-up" data-aos-delay="1200" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[1][11].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[1][12].id}`} ><div data-aos="fade-up" data-aos-delay="1200" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[1][12].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[1][13].id}`} ><div data-aos="fade-up" data-aos-delay="1200" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[1][13].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[1][14].id}`} ><div data-aos="fade-up" data-aos-delay="1200" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[1][14].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[1][15].id}`} ><div data-aos="fade-up" data-aos-delay="1200" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[1][15].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[1][16].id}`} ><div data-aos="fade-up" data-aos-delay="1200" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[1][16].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[1][17].id}`} ><div data-aos="fade-up" data-aos-delay="1200" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={`/images/logoclient/${items[1][17].logo}`} alt="" width={70} /></div></a>
            <a rel="stylesheet" href={`/client/${items[1][18].id}`} ><div data-aos="fade-up" data-aos-delay="1200" data-aos-once="false" data-aos-duration="1000" style={{marginRight:"88px"}} className="boxXS"><img src={`/images/logoclient/${items[1][18].logo}`} alt="" width={70} /></div></a>

          </div>
        


          <h4 className="titreB light letterSpacing container center accroche marginBottom2" style={{marginBottom:"6vh"}} data-aos="fade-up" data-aos-duration="1000">LE RESTE ON L’ÉCRIRA ENSEMBLE</h4>

        </div>

      </div>
      </div>
      {/* </Parallax> */}

			</>
		);
	}
}
 
export default Satisfaction;