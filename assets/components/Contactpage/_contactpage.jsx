import Navbar from '../_navbar';
import RsButton from '../_rsButton';
import LinesTop from '../_linesTop';
import LinesBottom from '../_linesBottom';
import ContactPageOne from './_contactpageOne';
import "../../styles/font.css"
import MiniFooter from '../Homepage/_miniFooter';



function ContactPage() {
	return ( 
		<>
		<Navbar></Navbar>
		<RsButton></RsButton>
		<LinesTop></LinesTop>
		<LinesBottom></LinesBottom>
		<ContactPageOne></ContactPageOne>
		<MiniFooter></MiniFooter>

		</>
	 );
}

export default ContactPage;