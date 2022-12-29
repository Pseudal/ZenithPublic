import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/font.css"


function ProjectpageTwo(data) {
	if(data.data.demande || data.data.defi || data.data.action){
		return (
			<>
				<div style={{backgroundImage: "url(/zenith/images/6Wvemm3K.jpeg)", textAlign: "center"}} className='demiblocClient'>
					<div className='columns'>
						<div className='column columns is-centered'>
							{data.data.demande &&
							<div className='column is-centered is-4' style={{marginTop:"48px", marginRight:"auto", marginLeft:"auto"}}>
								<h4 className='light'>UNE DEMANDE</h4>
								<div style={{width:"100%"}} className='light containerCenterClient px-6'dangerouslySetInnerHTML={{__html:data.data.demande}}></div>
							</div> 
							}

							{data.data.defi &&
							<div className='column is-centered is-4' style={{marginTop:"48px", marginRight:"auto", marginLeft:"auto"}}>
								<h4 className='light'>UN DÉFI</h4>
								<div style={{width:"100%"}} className='light containerCenterClient columns is-vcentered is-centered px-6' dangerouslySetInnerHTML={{__html:data.data.defi}}></div>
							</div>
							}

							{data.data.action &&
							<div className='column is-centered is-4'  style={{marginTop:"48px", marginRight:"auto", marginLeft:"auto"}}>
								<h4 className='light'>UNE ACTION</h4>
								<div style={{width:"100%"}} className='light containerCenterClient columns is-vcentered is-centered px-6' dangerouslySetInnerHTML={{__html:data.data.action}}></div>
							</div>
							}

						</div>
					</div>
				</div>
			</>
		);
	}
	}
 
export default ProjectpageTwo;
