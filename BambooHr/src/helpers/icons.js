import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF,faTwitter, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhoneAlt, faClock, faCommentAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Icons = () => {
   return library.add(
       faFacebookF, 
        faTwitter, 
        faInstagram, 
        faLinkedin, 
        faYoutube, 
        faMapMarkerAlt, 
        faPhoneAlt, 
        faClock, 
        faCommentAlt, 
        faPlusCircle);
};
export default Icons;