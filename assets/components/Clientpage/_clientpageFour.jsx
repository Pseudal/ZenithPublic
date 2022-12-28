import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import "../../styles/font.css"


function ClientpageFour({preci, data2}) {
	console.log(preci)
	if(data2.elementprecision){
		return (
			<>
			<div style={{backgroundImage: "url(/zenith/images/6Wvemm3K.jpeg)", height: "1100px"}} className="background">	
			<div className=''style={{ height: "1100px"}}>
				<div className='wrapper2'>
					<div className='containerCenterA'>

					<div className='parent21 marginTop'>

						<div className='marginTop2' >
							<h3 className='light letterSpacingS'>ÉLÉMENTS DE PRÉCISION</h3>
							<div className='light containerCenterClient text-h5' style={{ textTransform: 'uppercase'}} dangerouslySetInnerHTML={{__html:data2.elementprecision}}></div>
						</div>

						<div className=' boxClient' style={{height: '800px', width:"600px"}}>
							{preci.image ? (<img className=' contain' style={{ width: "100%", height: "100%", objectFit: "cover" }} src={"/images/imageclient/" + preci.image} alt=""/>) : (<div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:"100%"}}><img style={{width:"50%"}} src={"/zenith/autre/noImg.png"} alt=""/></div>)}
						</div>
					</div>
					</div>

				</div>
			</div>
			</div>		




			</>
		);
	}}
 
export default ClientpageFour;