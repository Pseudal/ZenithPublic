import WorkpageOne from "./_workpageOne";
import Navbar from '../_navbar';
import RsButton from '../_rsButton';
import LinesTop from '../_linesTop';
import LinesBottom from '../_linesBottom';
import WorkpageTwo from "./_workpageTwo";
import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import MiniFooter from "../Homepage/_miniFooter";


function Workpage() {
	const { nbr } = useParams();
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isCountLoaded, setIsCountLoaded] = useState(false);
	const [isCatLoaded, setIsCatLoaded] = useState(false);
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

			fetch(`/gettAllProject/${nbr}`,{method:'GET',headers:{Accept: 'application/json','Content-Type': 'application/json'}})
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

			fetch(`/getCount/projet`,{method:'GET',headers:{Accept: 'application/json','Content-Type': 'application/json'}})
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
	  } else if (!isLoaded || !isCountLoaded|| !isCatLoaded || document.readyState !== 'complete') {
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
		<WorkpageOne setLoading={setLoading} cat={cat}></WorkpageOne>
		<WorkpageTwo loaded={unload} data={items} page={nbr} count={count}></WorkpageTwo>
		<MiniFooter loaded={unload}></MiniFooter>
		</>
	 );
}
}
export default Workpage;