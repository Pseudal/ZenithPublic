import React from 'react'
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import "../../styles/font.css"

function SearchPageTwo(data) {
	// console.log(count)
	// let pageNbr = Math.ceil(count / 20)
	// let nbr = parseInt(page)
	// function onChange(params) {
	//   document.location = `/projets/${params}`
	// }
  
	let box = [];
	if(data.data.length > 0){

	
		for (let index = 0; index < data.data.length; index++) {
			let item = (
			  <div key={index} className="column columns is-one-fifth is-centered">
				<div className="is-half">
				<a href={"/projet/" + data.data[index].id}>
				  <div className="boxWorkpage1">
					<p style={{ position: "absolute" }} className="textDeco">
					  {data.data[index].mission}
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
	}else{
		box = (<p>Vraiment désolé, nous n'avons rien trouvé :c</p>)
		
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
 
export default SearchPageTwo;