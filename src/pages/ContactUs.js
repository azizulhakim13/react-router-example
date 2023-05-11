import Branches from '../components/contact/Branches';
import Contacts from '../components/contact/Contacts';
import Map from '../components/contact/Map';

const ContactUs = () => {
    return (  
        <div className="contacts">
            <div className="banner">
                <div className="text-center text-white pt-4 pt-lg-85">
                <h2 className="fw-semibold display-4">Contact Us</h2>
                <p>PEEREX - A service brand of PEEREX.</p>
                </div>
            </div>
            <Contacts />
            <Branches />
            <Map />
        </div>
    );
}
 
export default ContactUs;