import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import "../../styles/font.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function ContactPageOne() {
	const MySwal = withReactContent(Swal)
	const [values, setValues] = useState({
		email: '',
		name: '',
		message: '',
	});

	const handleInputChange = (event) => {
		event.persist();
		setValues({
			...values,
			[event.target.name]: event.target.value,
			
		});
		console.log(values.email)
	};

	const handleSubmit = (e) => {
		e.target.children[3].disabled = true;
		e.preventDefault();
		MySwal.fire({
			text: 'Un mail de confirmation vous a été envoyé',
			toast: true,
			icon: 'success',
			title: 'Bien reçu!',
			position: 'top-right',
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
			  toast.addEventListener('mouseenter', Swal.stopTimer)
			  toast.addEventListener('mouseleave', Swal.resumeTimer)
			}
		  });
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ "email": values.email, "name": values.name, "message": values.message, "new": true }),
		};
		// fetch('/sendemail', requestOptions)
		// 	.then(response => response.json())
		fetch(`/sendemail`,{method:'POST',headers:{Accept: 'application/json','Content-Type': 'application/json'},body: JSON.stringify({ "email": values.email, "name": values.name, "message": values.message, "new": true })})
		.then(res => res.json())
		.then(
			(result) => {
				console.log(result)
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			(error) => {
				console.error(error);
			}
		)
	};
	AOS.init()
		return (
			<>


			<div className="background1" alt="homepage">

			<video playsInline autoPlay muted loop>
				<source src="/zenith/video/videobg.mp4" type="video/mp4"></source>
				</video>

				<div className="opacityBlue">
					<div className="wrapper">
						<div className="container center2">
			
							<div className="containerCenter" data-aos="fade-up">
								<Link to="/">
									<img src="/zenith/images/bIO1r9F.png" alt="Logo" width={200} className="center" />
								</Link>							
							</div>

							<div className='parent5'>
								<div className="containerCenter2 divC4" >
									<h1 className="medium">Contactez Nous</h1> 
									<h6 className="light">Présentez votre projet et laissez-nous vos
									informations de contact. Nous reviendrons vers
									vous dans un délai de 24h.</h6>
								</div>
								<form onSubmit={handleSubmit}>
									<div className="form__group field  divC1">
										<input type="input" className="form__field" placeholder="Name" name="name" id='name' value={values.name}onChange={handleInputChange} required></input>
										<label for="name" className="form__label">Votre nom</label>

									</div>

									<div className="form__group2 field divC2">
										<input type="input" className="form__field" placeholder="email" name="email" id='email' value={values.email} onChange={handleInputChange} required />
										<label for="name" className="form__label">Votre adresse e-mail</label>

									</div>

									<div className="textarea__group field divC3">
										<textarea type="input" className="form__field" placeholder="message" name="message" id='message' value={values.message} onChange={handleInputChange} required />
										<label for="name" className="form__label">Votre besoin</label>

									</div>
									<button
									style={{marginTop:"50px"}}
										type="submit"
										className="marginBottom2 btnS light letterSpacingM"
									>
										Envoyer
									</button>
								</form>
							</div>

						</div>
						 
					</div>
				</div>
			</div>

			</>
		);
	}
 
//modifier a partir de la ligne 
// ajouter <form> <field> etc
// function contact pageOne ne fait rien ne declare rien etc.. 
//deifinir un etat d origine pour les zone de texte 
//ajouter un button quand clique prend les information dans les champs 



export default ContactPageOne;



