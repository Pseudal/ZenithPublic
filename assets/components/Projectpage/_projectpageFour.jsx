import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/font.css"


function ProjectpageFour({preci, data2}) {
	console.log(preci)
	if(data2.focus){
		return (
			<>
			<div style={{backgroundImage: "url(/zenith/images/6Wvemm3K.jpeg)", height: "1100px"}} className="background">	
			<div className=''style={{ height: "1100px"}}>
				<div className='wrapper2'>
					<div className='containerCenterA'>

					<div className='parent21 marginTop'>

						<div className='marginTop2' >
							<h3 className='light letterSpacingS'>Focus</h3>
							<div className='light containerCenterClient text-h5' style={{ textTransform: 'uppercase'}} dangerouslySetInnerHTML={{__html:data2.focus}}></div>
						</div>

						<div className=' boxClient' style={{height: '800px', width:"600px"}}>
							<img className=' contain' style={{ width: "100%", height: "100%", objectFit: "cover" }} src={"/images/imageprojet/" + preci.image} alt=""/>
						</div>
					</div>
					</div>

				</div>
			</div>
			</div>		




			</>
		);
	}}
 
export default ProjectpageFour;