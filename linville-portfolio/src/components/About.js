import React, { useEffect, useState } from 'react';
import { Container, Nav, Row, Col, Image } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  const [activeLink, setActiveLink] = useState('about');
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const AnimatedHeader = () => {
    const [text, setText] = useState('');
    const phrase = "Outdoor Photojournalist";
    const interval = 100; 
  
    useEffect(() => {
      const timer = setTimeout(() => {
        startAnimation();
      }, interval); 
      return () => clearTimeout(timer); 
    }, []); 
  
    const startAnimation = () => {
      setText(''); 
      animateText(0); 
    };
  
    const animateText = (index) => {
      if (index === phrase.length) {
        setTimeout(startAnimation, 1000); 
        return;
      }
      setTimeout(() => {
        setText(prevText => prevText + phrase[index]); 
        animateText(index + 1);
      }, interval);
    };
  
    return (
      <Container style={{ minHeight: '4em' }}>
        <p className="developer">{text}</p>
      </Container>
    );
  }
  
  return (
    <>
    <style>{styles}</style>
      <section className="about-section" id="about">
        <Container>
          <Row>
            <Col>
              <p className="welcome">Welcome to my portfolio</p>
            </Col>
          </Row>
          <Row>
            <Col className="name-developer">
              <p className="name">Hi! I'm Sarah</p>
              <AnimatedHeader />
              <p className="about-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
                quibusdam sed amet tempora. </p>
            </Col>
            <Col className="headshot">
              {/* <Image src={} roundedCircle alt="" height="500" /> */}
            </Col>
          </Row>
          <Row>
            <Col>
            <Nav.Link href="#letsconnect" className={activeLink === 'letsconnect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('letsconnect')}>
              {/* <p className="lets-connect">Let's Connect <Image src={} alt="" height="50" /></p> */}
              </Nav.Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

const styles = `
  .about-section {
    color: #1C4508;
    background-color: #F7E2C7 !important;
    padding-top: 2%;
    border-left: 2px solid #578E87;
    border-right: 2px solid #578E87;
    margin: 0 4% 0 4%;
  }

  img.rounded-circle {
    border: 5px solid #d3a15e;
    margin-left: 5%;
    margin-top: 10%
  }

  p.welcome {
    font-size: 30px;
    color: #1C4508;
    border: 3px solid #578E87;
    border-left: none;
    border-right: none;
    // border-radius: 7px;
    width: fit-content;
    padding: 0 1% 0 1%;
    margin: 8% 0 0 10%;
  }

  div.name-developer.col {
    width: fit-content;
    margin-left: 13%;
  }

  p.name {
    font-size: 75px;
    color: #578E87;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }

  p.developer {
    font-size: 42px;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  p.about-paragraph {
    font-size: 18px;
    color: #578E87;
    margin: 3% 3% 3% 5% ;
  }

  p.lets-connect {
    font-size: 40px;
    font-weight: bold;
    margin: 2% 0 0 25%;
  }
`;

export default About;