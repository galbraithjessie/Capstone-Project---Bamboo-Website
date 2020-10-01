import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF,faTwitter, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhoneAlt, faClock, faCommentAlt, faPlusCircle, faBars } from '@fortawesome/free-solid-svg-icons';

const Icons = () => {
   return library.add(
       faFacebookF, 
        faTwitter, 
        faInstagram, 
        faLinkedin, 
        faYoutube, 
        faMapMarkerAlt,
        faBars, 
        faPhoneAlt, 
        faClock, 
        faCommentAlt, 
        faPlusCircle);
};
export default Icons;