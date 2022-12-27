// import React from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Link } from "react-router-dom";
// import "../../styles/font.css"


// function ClientpageTwo(data) {
// 	AOS.init()
// 	if(data.data.enjeu || data.data.histoire || data.data.reponse){
// 		return (
// 			<>
// 				<div style={{backgroundImage: "url(/zenith/images/x9nes5V.jpg)"}} className='demiblocClient'>
// 					<div className='demiblocClientOpacity'>
// 						<div className='parentClient'>
// 							{data.data.enjeu &&
// 							<div className='clientGrid1'>
// 								<h4 className='light'>UNE ENJEU</h4>
// 								<div className='light containerCenterClient' dangerouslySetInnerHTML={{__html:data.data.enjeu}}></div>
// 							</div> 
// 							}

// 							{data.data.histoire &&
// 							<div className='clientGrid2'>
// 								<h4 className='light'>UNE HISTOIRE</h4>
// 								<div className='light containerCenterClient' dangerouslySetInnerHTML={{__html:data.data.histoire}}></div>
// 							</div>
// 							}

// 							{data.data.reponse &&
// 							<div className='clientGrid3'>
// 								<h4 className='light'>UNE REPONSE</h4>
// 								<div className='light containerCenterClient' dangerouslySetInnerHTML={{__html:data.data.reponse}}></div>
// 							</div>
// 							}

// 						</div>
// 					</div>
// 				</div>
// 			</>
// 		);
// 	}
// }
import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/font.css"


function ClientpageTwo(data) {
 	if(data.data.enjeu || data.data.histoire || data.data.reponse){
		return (
			<>
				<div style={{backgroundImage: "url(/zenith/images/6Wvemm3K.jpeg)", textAlign: "center"}} className='demiblocClient'>
					<div className='columns'>
						<div className='column columns is-centered is-11 is-offset-1'>
							{data.data.enjeu &&
							<div className='column is-centered is-4' style={{marginTop:"48px", marginRight:"auto", marginLeft:"auto"}}>
								<h4 className='light'>UN ENJEU</h4>
								<div style={{width:"100%"}} className='light containerCenterClient px-6'dangerouslySetInnerHTML={{__html:data.data.enjeu}}></div>
							</div> 
							}

							{data.data.histoire &&
							<div className='column is-centered is-4' style={{marginTop:"48px", marginRight:"auto", marginLeft:"auto"}}>
								<h4 className='light'>UNE HISTOIRE</h4>
								<div style={{width:"100%"}} className='light containerCenterClient columns is-vcentered is-centered px-6' dangerouslySetInnerHTML={{__html:data.data.histoire}}></div>
							</div>
							}

							{data.data.reponse &&
							<div className='column is-centered is-4'  style={{marginTop:"48px", marginRight:"auto", marginLeft:"auto"}}>
								<h4 className='light'>UNE REPONSE</h4>
								<div style={{width:"100%"}} className='light containerCenterClient columns is-vcentered is-centered px-6' dangerouslySetInnerHTML={{__html:data.data.reponse}}></div>
							</div>
							}

						</div>
					</div>
				</div>
			</>
		);
	}
	}
export default ClientpageTwo;
