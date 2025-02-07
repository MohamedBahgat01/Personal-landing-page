import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Col, Container, Row } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
  return (
    <footer>
        <Container>
            <Row className='align-items-center'>
                <Col md="4" sm="12">
                    <Link  to="/">
                        <img src="images/618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png" alt=""  className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.5s"/>
                    </Link>
                </Col>
                <Col md="4" sm="12">
                    <div className="wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.5s">
                        <HashLink to="/#latest">Latest Builds</HashLink>
                        <HashLink to="/#process">Process</HashLink>
                        <HashLink to="/#service">Services</HashLink>
                        <HashLink to="/#contact">Contact Us</HashLink>
                        <Link to="/Projects">Projects</Link>
                    </div> 
                </Col>
                <Col md="4" sm="12">
                    <div className="wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.5s">
                        <Link to="#" target="_blank"><FacebookIcon /></Link>
                        <Link to="#" target="_blank"><InstagramIcon /></Link>
                        <Link to="#" target="_blank"><LinkedInIcon /></Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
