import './Home2.css'
import open_up from '../media/open_up-removebg-preview.png'
import { Container, Row, Col } from "react-bootstrap";
import { TbNumber1, TbNumber2, TbNumber3 } from "react-icons/tb";
import { GiShieldEchoes, GiDragonBalls } from "react-icons/gi";
import { SiDiscourse } from "react-icons/si";

const Home2 = () => {
    return (
        <div>
            <div className='banner'>
                <div className="text-box">
                    <h1 class="heading-primary">
                        <span class="heading-primary-main">Share emotions.<br />
                            Discover a Companion.<br />
                            Because You Matter.</span>
                        <br />
                        <span class="heading-primary-sub">MakeMyBrain is your partner in every tear you shed.</span>
                    </h1>
                    <a href='https://forms.gle/FC8aJN4P5nz7DXAM8' id='button'>Let's Talk</a>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div >
                <div className='text-center'><h2>Why is Opening up to someone so important?</h2></div>
                <br />
                <br />
                <Container >
                    <Row className='d-flex flex-wrap'>
                        <Col className="text-center" sm><img src={open_up} alt="" className='open_up shadow-4' /></Col>
                        <Col sm className="fs-3">
                            <div><TbNumber1 className="ms-1 " size='60' />Release of excessive stress</div>
                            <div><TbNumber2 className="ms-1" size='60' /> A different prespective of the problem</div>
                            <div><TbNumber3 className="ms-1 " size='60' /> Arrangement of the thoughts in a proper structure</div>
                        </Col>
                    </Row>
                    <br />
                    <Row className="text-center" id='description'>
                        <Col sm>
                            <p className='text-wrap'>
                                Discover the most amazing companions handpicked by us who
                                can help you with your emotions and thoughts better
                                than anybody else.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className='quality'>
                <Container >
                    <br />
                    <div className='text-center'><h2>What we assure</h2></div>
                    <br />
                    <Row>
                        <Col className="text-center me-2"  ><GiShieldEchoes size='60' /><h3>Privacy Ensured</h3></Col>
                        <Col className="text-center me-2" ><GiDragonBalls size='60' /><h3>Quality Ensured</h3></Col>
                        <Col className="text-center me-2" ><SiDiscourse size='60' /><h4>Talk without being Judged</h4></Col>
                    </Row>
                </Container>
                <br />
            </div>
            <br />
            <br />
            <br />
            <br />
            <div >
                <div className='text-center'><h2>What are Customers say....</h2></div>
                <Container className='text-center review'>
                    <Row>
                        <Col sm>
                            <div className='tab' >
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam officia recusandae fugit excepturi quo nisi itaque eum nobis eaque, necessitatibus ab ad autem fuga perspiciatis architecto ratione inventore nulla!
                                </p>
                                <p className='fw-bold'>Shruti khokhar</p>
                            </div>
                        </Col>
                        <Col sm>
                            <div className='tab' >
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam officia recusandae fugit excepturi quo nisi itaque eum nobis eaque, necessitatibus ab ad autem fuga perspiciatis architecto ratione inventore nulla!</p>
                                <p className='fw-bold'>Shruti khokhar</p>
                            </div>
                        </Col>
                        <Col sm>
                            <div className='tab' ><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam officia recusandae fugit excepturi quo nisi itaque eum nobis eaque, necessitatibus ab ad autem fuga perspiciatis architecto ratione inventore nulla!</p>
                                <p className='fw-bold'>Shruti khokhar</p>
                            </div>
                        </Col>
                        <Col sm>
                            <div className='tab' ><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam officia recusandae fugit excepturi quo nisi itaque eum nobis eaque, necessitatibus ab ad autem fuga perspiciatis architecto ratione inventore nulla!</p>
                                <p className='fw-bold'>Shruti khokhar</p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
            <br />
            <br />
        </div>
    );
}

export default Home2;