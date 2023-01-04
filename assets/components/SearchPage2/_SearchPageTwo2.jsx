import React from 'react'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../../styles/font.css"
import { Parallax } from "react-parallax";

function SearchPageTwo2(data) {
	const { type } = useParams();
	// console.log(count)
	// let pageNbr = Math.ceil(count / 20)
	// let nbr = parseInt(page)
	// function onChange(params) {
	//   document.location = `/projets/${params}`
	// }
  
	let box = [];
	if(data.data.length > 0){

		for (let index = 0; index < data.data.length; index++) {
			if(type == "projet"){
				let item = (
				  <div key={index} className="column columns is-one-fifth is-centered">
					<div className="is-half">
					<a href={"/projet/" + data.data[index].id}>
					  <div className="boxWorkpage1">
						<p style={{ position: "absolute" }} className="textDeco">
						  {data.data[index].mission}
						</p>
						{data.data[index].header !== "rien a voir, circulez" ? (<img
						  style={{ width: "100%", height: "100%", objectFit: "cover" }}
						  src={"/images/imageprojet/" + data.data[index].header}
						  alt=""
						/>) : (<img style={{width: "100%", height: "100%", objectFit: "cover"}} src={"/zenith/autre/noImg.png"} alt=""/>)}
					  </div>
					</a>
					</div>
				  </div>
				);
				box.push(item);
			}
			if(type == "client"){
				let item = (
				  <div key={index} className="column columns is-one-fifth is-centered">
					<div className="is-half">
					<a href={"/client/" + data.data[index].id}>
					  <div className="boxWorkpage1">
						<p style={{ position: "absolute" }} className="textDeco">
						  {data.data[index].mission}
						</p>
						{data.data[index].header !== "rien a voir, circulez" ? (<img
						  style={{ width: "100%", height: "100%", objectFit: "cover" }}
						  src={"/images/imageclient/" + data.data[index].header}
						  alt=""
						/>) : (<img style={{width: "100%", height: "100%", objectFit: "cover"}} src={"/zenith/autre/noImg.png"} alt=""/>)}
						
					  </div>
					</a>
					</div>
				  </div>
				);
				box.push(item);
			}
		}

	}else{
		box = (
			<>
			<div>
				<img src='/zenith/images/search_no_result.png'></img>
				<p style={{ textAlign: "center"}}>désolé, nous n'avons rien trouvé</p>
			</div>
			</>
		)
	}

	
	return (
	  <>
	  <Parallax bgImage="/zenith/images/Z1zIJCKk.jpeg" blur={{ min: -1, max: 3 }} strength={400}>
		<div className="pt-6" style={{paddingBottom:"80px"}} alt="action">
		  <div className="pt-6">
			<div className="">
			  <div className="columns is-multiline is-centered">
				{box}
			  </div>
			  {/* <div className="columns is-mobile is-centered" style={{ width: "100%", height: "150px"}}>            
				<Pagination
				  current={nbr}
				  onChange={onChange}
				  pageSize={1}
				  total={pageNbr}
				  showTitle={false}
				/>
			  </div>   */}
			  {/* <button className="btnL center light letterSpacingM">
				<Link to="/contact" className="textDeco">
				  Voir plus
				</Link>
			  </button> */}
			</div>
		  </div>
		</div>
	  </Parallax>
	  </>
	);
}
 
export default SearchPageTwo2;