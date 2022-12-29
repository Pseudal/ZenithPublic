import React, { useEffect, useRef, useState } from "react"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll' 
import "../styles/font.css"

//import scrollIntoView from 'scroll-into-view-if-needed'
import Homepage from './Homepage/_homepage';
import Wordpage from './Homepage/_word';
import Emotion from './Homepage/_emotion';
import Action from './Homepage/_action';
import Creation from './Homepage/_creation';
import Satisfaction from './Homepage/_satisfaction';
import Chiffres from './Homepage/_chiffres';
import Vision from './Homepage/_vision';
import Footer from './Homepage/_footer';
import Instaflux from './Homepage/_insta';
import Navbar from './_navbar';
import RsButton from './_rsButton';
import LinesTop from './_linesTop';
import LinesBottom from './_linesBottom';
import { Parallax } from 'react-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../styles/loader.css"



function Home() {
	const [items, setItems] = useState([]);
	const [insta, setInsta] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false)
	useEffect(() => {
		fetch(`/gettAllCreation`,{method:'GET',headers:{Accept: 'application/json','Content-Type': 'application/json'}})
		.then(res => res.json())
		.then(
		  (result) => {
			console.log(result);
			setIsLoaded(true);
			setItems(result)
		  },
		  // Note: it's important to handle errors here
		  // instead of a catch() block so that we don't swallow
		  // exceptions from actual bugs in components.
		  (error) => {
			console.log(error)
		  }
		)

		// fetch(`https://www.instagram.com/agencezenith/?__a=1?__a=1&__d=dis`,{method:'GET',})
		// .then(res => res.json())
		// .then((resultInsta) => {
		// 	console.log("toto")
		// 	console.log(resultInsta)
		//   },
		//   // Note: it's important to handle errors here
		//   // instead of a catch() block so that we don't swallow
		//   // exceptions from actual bugs in components.
		//   (error) => {
		// 	console.log(error)
		//   }
		// )
	  }, [])

	if(isLoaded == false || document.readyState !== 'complete') {
		return (
			<>
				<svg id="ReactLoader" width="200" height="200" viewBox="0 0 100 100">
					<polyline className="line-cornered stroke-still" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
					<polyline className="line-cornered stroke-still" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
					<polyline className="line-cornered stroke-animation" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
					<polyline className="line-cornered stroke-animation" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
				</svg>
			</>
		);
	}else{
		return (
			<>
			<Navbar></Navbar>
			<LinesTop></LinesTop>
			<LinesBottom></LinesBottom>
			<RsButton></RsButton>
			

				<Element name="scroll-to-element1" className="element">			

					<Homepage ></Homepage>
					
				</Element>	

				{/* <div style={{width:"100%", height:"50px", backgroundColor:"white"}}></div> */}
				<Wordpage ></Wordpage>
				{/* <div style={{width:"100%", height:"50px", backgroundColor:"white"}}></div> */}



				<Element name="scroll-to-element3" className="element">

					<Emotion ></Emotion>

				</Element>


				<Element name="scroll-to-element4" className="element">
					<Action ></Action>
				</Element>

				<Element name="scroll-to-element5" className="element">

					<Creation item={items}></Creation>

				</Element>

				<Element name="scroll-to-element6" className="element">

					<Satisfaction ></Satisfaction>

				</Element>

				<Element name="scroll-to-element7" className="element">

						<Chiffres ></Chiffres>
						
				</Element>

				<Element name="scroll-to-element8" className="element">

					<Vision ></Vision>

				</Element>

				<Element name="scroll-to-element8" className="element">

						<Instaflux ></Instaflux>

				</Element>



				<Footer ></Footer>


			{/* <Element name="scroll-to-element10" className="element"></Element> */}
			</>
		);		
	}

}
export default Home;
