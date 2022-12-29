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
	if(type == "projet"){
		for (let index = 0; index < data.data.length; index++) {
			let item = (
			  <div key={index} className="column columns is-one-fifth is-centered">
				<div className="is-half">
				<a href={"/projet/" + data.data[index].id}>
				  <div className="boxWorkpage1">
					<p style={{ position: "absolute" }} className="textDeco">
					  {data.data[index].projet}
					</p>
					<img
					  style={{ width: "100%", height: "100%", objectFit: "cover" }}
					  src={"/images/imageprojet/" + data.data[index].header}
					  alt=""
					/>
				  </div>
				</a>
				</div>
			  </div>
			);
			box.push(item);
		}
	}
	if(type == "client"){
		for (let index = 0; index < data.data.length; index++) {
			let item = (
			  <div key={index} className="column columns is-one-fifth is-centered">
				<div className="is-half">
				<a href={"/projet/" + data.data[index].id}>
				  <div className="boxWorkpage1">
					<p style={{ position: "absolute" }} className="textDeco">
					  {data.data[index].nomClient}
					</p>
					<img
					  style={{ width: "100%", height: "100%", objectFit: "cover" }}
					  src={"/images/imageprojet/" + data.data[index].header}
					  alt=""
					/>
				  </div>
				</a>
				</div>
			  </div>
			);
			box.push(item);
		}
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