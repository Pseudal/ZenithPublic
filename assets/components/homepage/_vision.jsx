import React from 'react'

function Vision()  {

    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
      }
    }
		return (
			<>
			<div className="background" alt="vision">
      <div className="opacityBlue">
        <div className="wrapper">

          <h1 className="titreA medium letterSpacing marginStop">VISION</h1>
          <h6 className="light letterSpacingS sousTitre">LA RENCONTRE QUI CHANGE TOUT</h6>
          <div className="slider">
          
          <input type="radio" name="slider" title="slide1" checked="checked" class="slider__nav"/>
          <input type="radio" name="slider" title="slide2" class="slider__nav"/>
          {/* <input type="button" name="slider" title="slide1" value="1" className="slider__nav  "/>
          <input type="button" name="slider" title="slide2" value="2" className="slider__nav  "/> */}

          {/* <div className="inline">
          <button className="btnNP center" onclick="plusSlides(-1)" >&lt; PREC&nbsp;&nbsp;</button> 
          <span className="line6">          
          </span>         
            <button className="btnNP center" onclick="plusSlides(1)">&nbsp;&nbsp;SUIV &gt;</button>
          </div> */}

            <div className="slider__inner">
              
              <div className="slider__contents">
                <div className="parent3">
                    <div className="visionBox">
                    </div>
                    <ul>
                    <h2 className="visionText2 medium">RON</h2>
                    <li className="visionText light text-h4">CONSEIL</li> 
                    <li className="visionText light text-h4">NÉGOCIATION</li> 
                    <li className="visionText light text-h4">ÉVÉNEMENTIEL</li> 
                    <li className="visionText light text-h4">GESTION DE PROJET</li> 
                    <li className="visionText light text-h4">DIRECTION ARTISTIQUE</li> 
                    <li className="visionText light text-h4">DIRECTION D'EXPLOITATION</li>
                    <li className="visionText light text-h4">DÉVELOPPEMENT COMMERCIAL </li>

                    </ul>
                </div>
              </div>

              <div class="slider__contents">
                <div className="parent3">
                    <div className="visionBox">
                    </div>
                    <ul>
                    <h2 className="visionText2 medium">MATHIS</h2>
                    <li className="visionText light text-h4">CONSEIL</li> 
                    <li className="visionText light text-h4">NÉGOCIATION</li> 
                    <li className="visionText light text-h4">ÉVÉNEMENTIEL</li> 
                    <li className="visionText light text-h4">GESTION DE PROJET</li> 
                    <li className="visionText light text-h4">DIRECTION ARTISTIQUE</li> 
                    <li className="visionText light text-h4">DIRECTION D'EXPLOITATION</li>
                    <li className="visionText light text-h4">DÉVELOPPEMENT COMMERCIAL </li>
                    </ul>
                </div>
              </div>

              
            </div>
                </div>
          
          {/* <div className="parent3 mySlides">
            <div className="visionBox">
            
            </div>
            <ul>
            <h2 className="visionText2 medium">RON</h2>
            <li className="visionText light text-h4">CONSEIL</li> 
            <li className="visionText light text-h4">NÉGOCIATION</li> 
            <li className="visionText light text-h4">ÉVÉNEMENTIEL</li> 
            <li className="visionText light text-h4">GESTION DE PROJET</li> 
            <li className="visionText light text-h4">DIRECTION ARTISTIQUE</li> 
            <li className="visionText light text-h4">DIRECTION D'EXPLOITATION</li>
            <li className="visionText light text-h4">DÉVELOPPEMENT COMMERCIAL </li>
            
            </ul>
            
            
            
          </div> */}




        </div>
    </div>
</div>

			</>
		);
	}

 
export default Vision;