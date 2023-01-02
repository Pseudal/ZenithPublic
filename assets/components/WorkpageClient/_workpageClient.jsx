import WorkpageClientOne from './_workpageClientOne';
import Navbar from '../_navbar';
import RsButton from '../_rsButton';
import LinesTop from '../_linesTop';
import LinesBottom from '../_linesBottom';
import WorkpageClientTwo from './_workpageClientTwo';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/font.css"
import "../../styles/loader.css"
import MiniFooter from '../Homepage/_miniFooter';


function WorkpageClient() {
	const { nbr } = useParams();
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isCountLoaded, setIsCountLoaded] = useState(false);
	const [isCatLoaded, setIsCatLoaded] = useState(false);
	const [isLoadedNextPrev, setIsLoadedNextPrev] = useState(false);
	const [isImgReady, setImgReady] = useState(false);
	const [items, setItems] = useState([]);
	const [cat, setCat] = useState([]);
	const [count, setCount] = useState([]);
	const [load, setLoad] = useState("hidden")
	const [unload, setUnload] = useState(false)

	const setLoading = param => {
		if(param == true) {
			setLoad("visible");		
			setUnload(true);				
		}
	}
	useEffect(() => {

		fetch(`/gettAllClient/${nbr}`,{method:'GET',headers:{Accept: 'application/json','Content-Type': 'application/json'}})
		.then(res => res.json())
		.then(
			(result) => {
			setItems(result);
			setIsLoaded(true);
			console.log(result);
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

		fetch(`/getCount/client`,{method:'GET',headers:{Accept: 'application/json','Content-Type': 'application/json'}})
		.then(res => res.json())
		.then(
			(result) => {
			setCount(result);
			setIsCountLoaded(true);
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			(error) => {
			setIsCountLoaded(true);
			setError(error);
			console.log(error);
			}
		)
		fetch(`/api/categories`,{method:'GET',headers:{Accept: 'application/json','Content-Type': 'application/json'}})
		.then(res => res.json())
		.then(
			(result) => {
			setCat(result);
			setIsCatLoaded(true);
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			(error) => {
			setIsCountLoaded(true);
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
		
		<WorkpageClientOne setLoading={setLoading} cat={cat}></WorkpageClientOne>
		{/* <div style={{ display:unload}}>				
			<svg id="ReactLoader2" width="200" height="200" viewBox="0 0 100 100">
				<polyline className="line-cornered stroke-still" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
				<polyline className="line-cornered stroke-still" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
				<polyline className="line-cornered stroke-animation" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
				<polyline className="line-cornered stroke-animation" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
			</svg>
		</div> */}
		<WorkpageClientTwo loaded={unload} data={items} page={nbr} count={count}></WorkpageClientTwo>
		<MiniFooter loaded={unload}></MiniFooter>
		
		{/* <WorkpageThree></WorkpageThree>
		<WorkpageFour></WorkpageFour>
		<WorkpageFive></WorkpageFive>
		<MiniFooter></MiniFooter> */}
		</>
	 );
}
}
export default WorkpageClient;