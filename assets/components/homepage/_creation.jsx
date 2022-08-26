import React from 'react'
import Carousel from '../_carousel'
import { Link } from "react-router-dom";


function Creation() {
  const items = ['', '', '', '', '', '','','','','','','',]
  const setting = {
    dragSpeed: 0.4,
    itemWidth: 200,
    itemHeight: 464,
    itemSideOffsets: 40,
  }
  const itemStyle = {
    width: `${setting.itemWidth}px`,
    height: `${setting.itemHeight}px`,
    margin: `0px ${setting.itemSideOffsets}px`
  }
  return ( 
    <>
    			<div className="background" alt="création">
      <div className="opacityBlue">
      <div className="wrapper2">
      <h1 className="titreA medium letterSpacing marginStop">CRÉATION</h1>
      <h6 className="light letterSpacingS sousTitre">UNE HISTOIRE. UN ENJEU. UNE RÉPONSE.</h6>

      <div className='containerC'>
        <Carousel _data={items} {...setting}>
          {
            items.map((i, _i) => (
              <div
                key={_i}
                className='item'
                style={{ ...itemStyle }}>
              </div>
            ))
          }
        </Carousel>
      </div>

      <h4 className="titreB light letterSpacing container center accroche">PROPULSER L’IMAGINAIRE PLUS LOIN</h4>
      <button className="btnS center light letterSpacingM">
      <Link to="/projets" className="textDeco">DÉCOUVRIR</Link>

      </button>
      </div>
    

      </div>
    	</div>
    </>
   );
}

export default Creation;