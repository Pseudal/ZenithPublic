import React, { useState } from 'react'
import { useEffect } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function MiniFooter(loaded) {
	const [values, setValues] = useState({
		email: '',
	});
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch(`/api/footers/1`,{method:'GET',headers:{Accept: 'application/json','Content-Type': 'application/json'}})
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
		// setError(error);
		}
		)
  }, [])
	const MySwal = withReactContent(Swal)

	const handleEmailInputChange = (event) => {
		event.persist();
		setValues((values) => ({
			...values,
			email: event.target.value,
			
		}));
		console.log(values.email)
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		e.target.children[1].disabled = true;
		MySwal.fire(
			'Merci!',
			'Votre email à bien été enregistré',
			'success'
		  )
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ "email": values.email, "new": true }),
		};
		fetch('/api/emails', requestOptions)
			.then(response => response.json())
	};
	if(loaded.loaded == true){

		return (
			<>
				<div style={{backgroundImage: "url(/zenith/images/nxsX0oGc.jpeg)"}} className="demiblocFooter2" alt="footer">
				<div className="demibloc2">
              <div className="parent4">
                <div className="divC">
                  <img
                    className="center mb-5"
                    src="/zenith/images/wX2LCIT.png"
                    alt=""
                    width="220"
                  />
                  <ul className="ul2">
                    <li className="li2 mt-3">
                      <a href="" className="footerText light text-h5">
                        ZENITH
                      </a>
                    </li>
                    <li className="li2">
                      <a
                        href=""
                        style={{ textTransform: "uppercase" }}
                        className="footerText light text-h5"
                      >
                        {items.adresse}
                      </a>
                    </li>
                    <li className="li2">
                      <a
                        href="mailto:contact@agencezenith.com"
                        style={{ textTransform: "uppercase" }}
                        className="footerText light text-h5"
                      >
                        {items.email}
                      </a>
                    </li>
                    <li className="li2">
                      <a
                        href=""
                        style={{ textTransform: "uppercase" }}
                        className="footerText light text-h5"
                      >
                        {items.tel}
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="divD">
                  <h4
                    className="titreD medium letterSpacing marginBottom"
                    style={{ marginTop: "20px" }}
                  >
                    REJOIGNEZ <br /> L’AVENTURE
                  </h4>
                  <div className="rs2 centerFlex center">
                    <a
                      className="fb2"
                      href="https://www.facebook.com/AGENCEZENITH/"
                    ></a>
                    <a
                      className="insta2"
                      href="https://www.instagram.com/agencezenith/?hl=fr"
                    ></a>
                    <a
                      className="linkedin2"
                      href="https://www.linkedin.com/company/agence-zenith/"
                    ></a>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <h4 className="titreD medium letterSpacing marginBottom ">
                      {" "}
                      NEWSLETTER
                    </h4>
                    <input
                      className="inputMail center"
                      type="email"
                      id="email"
                      size="30"
                      name="email"
                      value={values.email}
                      onChange={handleEmailInputChange}
                      required
                    ></input>
                  </form>
                </div>

                <div className="divE">
                  <h4 className="titreC medium letterSpacing">SITE MAP</h4>
                  <ul className="ul2">
                    <li className="li2">
                      <a href="/" className="footerText light text-h5">
                        ACCUEIL
                      </a>
                    </li>
                    <li className="li2">
                      <a href="/clients/1" className="footerText light text-h5">
                        CLIENT
                      </a>
                    </li>
                    <li className="li2">
                      <a href="/projets/1" className="footerText light text-h5">
                        PROJETS
                      </a>
                    </li>
                    <li className="li2">
                      <a href="/contact" className="footerText light text-h5">
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="light footerCredit letterSpacingS">
                © AGENCE ZENITH / TOUS DROITS RÉSERVÉS
              </p>
            </div>
				</div>
          



			</>
		);
	}
	}

 
export default MiniFooter;