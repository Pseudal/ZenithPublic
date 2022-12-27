import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import "../../styles/font.css"

function ClientpageThree(data) {
	console.log(data)
	if(data.length > 0){
		return (
			<>
				<div className='wrapperDarkBlueClient' style={{height:"800px", width:"100%"}}>
					<img src={"/images/imageclient/" + data.data.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
				</div>
			</>
		);
	}
 }
 
export default ClientpageThree;