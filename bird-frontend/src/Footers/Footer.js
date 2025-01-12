import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';   


export const Footer = () => {
    return (
        <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Who's nest?</h5>
                <p>A place where you understand Aves better!</p>
            </div>

            {/* <hr className="clearfix w-100 d-md-none pb-0"/> */}

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Project</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Blogs</a></li>
                    <li><a href="#!">Newsletters</a></li>
                    <li><a href="#!">Resources</a></li>
                    <li><a href="#!">Idea behind</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Social Media</h5>
                <ul className="list-unstyled">
                    <li><a href="https://www.facebook.com"  target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                </ul>
            </div>
            <div>
            <p><u>&copy; {new Date().getFullYear()} Who's Nest?. All Rights Reserved.</u></p>
            </div>
        </div>
    </div>
    );
}
