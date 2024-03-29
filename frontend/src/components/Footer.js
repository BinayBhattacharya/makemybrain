import { Container, Row, Col } from "react-bootstrap";
import { FaCopyright, FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import './Footer.css';
import logo from '../media/apple-touch-icon.png'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="footer p-3">
                <Container>
                    <Row className="justify-content-md-center text-white">
                        <Col sm={3}>
                            <h5>About Us</h5>
                            <p>Lorem ipsum dolor sit amet consectetur.
                                Lorem ipsum dolor sit amet consectetur.
                                Lorem ipsum dolor sit amet consectetur.
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </Col>
                        <Col sm={3}>
                            <h5>Navigation</h5>
                            <ul >
                                <li><a href="https://forms.gle/FC8aJN4P5nz7DXAM8 " className="text-white text-decoration-none">Let's Talk</a></li>
                                <li><Link to={"/"} className="text-white text-decoration-none">Home</Link></li>
                                <li><Link to={"/blog"} className="text-white text-decoration-none">Blogs</Link></li>
                                <li><Link to={"/about"} className="text-white text-decoration-none">About Us</Link></li>
                                <li><Link to={"/faq"} className="text-white text-decoration-none">FAQ</Link></li>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <Row >
                                <div className="d-flex justify-content-start" >
                                    <img src={logo}
                                        width="60"
                                        height="60"
                                        alt="" />
                                    <div className="ms-3">
                                        <h5>MakeMyBrain</h5>
                                        <hr />
                                        <h6>BECAUSE YOU MATTER</h6>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </Row>
                            <Row >
                                <h7>Connect with us</h7>
                                <Col >
                                    <a href=""><FaFacebookSquare className="text-white ms-1" size='40' /></a>
                                </Col>
                                <Col >
                                    <a href=""><FaInstagram className="text-white " size='40' /></a>
                                </Col>
                                <Col >
                                    <a href=""><FaLinkedin className="text-white ms-1" size='40' /></a>
                                </Col>
                                <Col >
                                    <a href=""><FaYoutube className="text-white ms-1" size='40' /></a>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="footerbottom p-2">
                <Container>
                    <p className="text-center text-white mt-3">Copyright <FaCopyright /> 2022, MakeMyBrain. All Rights Reserved.</p>
                </Container>
            </div>
        </div>
    );
}

export default Footer;