import SearchPageOne2 from "./_SearchPageOne2";
import Navbar from '../_navbar';
import RsButton from '../_rsButton';
import LinesTop from '../_linesTop';
import LinesBottom from '../_linesBottom';
import SearchPageTwo2 from "./_SearchPageTwo2";
import MiniFooter from "../Homepage/_miniFooter";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/font.css"
import "../../styles/loader.css"


function SearchPage2() {
	const { info } = useParams();
	const { name } = useParams();
	const { type } = useParams();
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isLoadedImg, setIsLoadedImg] = useState(false);
	const [isLoadedNextPrev, setIsLoadedNextPrev] = useState(false);
	const [isImgReady, setImgReady] = useState(false);
	const [items, setItems] = useState([]);
	const [images, setImages] = useState([]);
	const [header, setHeader] = useState([]);
	const [preci, setPreci] = useState([]);
	const [second, setSecond] = useState([]);
	const [display, setDisplay] = useState([]);
	const [NextPrev, setNextPrev] = useState([]);
	const [load, setLoad] = useState("hidden")

		const setLoading = param => {
			if(param == true) {
				console.log("gotcha")
				setLoad("visible");
			}
		}
		useEffect(() => {

			fetch(`/getsearchcat/${info}/${type}`,{method:'GET',headers:{Accept: 'application/json','Content-Type': 'application/json'}})
			.then(res => res.json())
			.then(
				(result) => {
				setItems(result);
				console.log(result);
				setIsLoaded(true);
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
				setIsLoaded(true);
				setError(error);
				console.log(error);
				}
			)
		}, [])		



	if (error) {
		 return <div>Error: {error.message}</div>;
	  } else if (!isLoaded || document.readyState !== 'complete') {
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
	  } else {
			return (  
		<>
		<Navbar></Navbar>
		<RsButton></RsButton>
		<LinesTop></LinesTop>
		<LinesBottom></LinesBottom>
		
		<SearchPageOne2 setLoading={setLoading} data = {name}></SearchPageOne2>
		<div style={{visibility:load}}><SearchPageTwo2 data={items}></SearchPageTwo2></div>
		
		{/* <WorkpageThree></WorkpageThree>
		<WorkpageFour></WorkpageFour>
		<WorkpageFive></WorkpageFive>*/}
		<MiniFooter></MiniFooter> 
		</>
	 );
}
}
export default SearchPage2;