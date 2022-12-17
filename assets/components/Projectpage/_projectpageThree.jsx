import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/font.css"


function ProjectpageThree(data) {
		return (
			<>

				<div className='wrapperDarkBlueClient' style={{height:"800px", width:"100%"}}>
					<img src={"/images/imageprojet/" + data.data.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
				</div>
			</>
		);
	}
 
export default ProjectpageThree;