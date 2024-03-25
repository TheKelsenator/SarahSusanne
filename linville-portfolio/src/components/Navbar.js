import { useState } from 'react'; 
import { Container, Nav, Navbar} from 'react-bootstrap';
import Logo1 from '../assets/images/icons8-linkedin-144.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function NavBar() {
  const [activeLink, setActiveLink] = useState('letsconnect');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
    <Navbar expand="lg" className="" fixed="top">
    <style>{styles}</style>
      <Container>
        <Navbar.Brand className="logo">
          {/* <img className="" src={} alt="Logo" height="60" />
          <img className="" src={} alt="Logo" height="60" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-text">
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('about')}}>about</Nav.Link>
            <Nav.Link href="#articles" className={activeLink === 'articles' ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('articles')}}>articles</Nav.Link>
            <Nav.Link href="#photography" className={activeLink === 'photography' ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('photography')}}>photography</Nav.Link>
            <Nav.Link href="#letsconnect" className={activeLink === 'letsconnect' ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('letsconnect')}}>let's connect</Nav.Link>
          </Nav>
          <Navbar.Brand className="link-icons">
            <Nav.Link href="https://www.linkedin.com/in/sarah-linville-89741984/">
              <img src={Logo1} alt="LinkedIn" height="50" />
            </Nav.Link>
            {/* <Nav.Link href="">
              <img src={} alt="GitHub" height="45" />
            </Nav.Link> */}
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

const styles = `
  nav.navbar { 
    border-left: 2px solid #578E87;
    border-right: 2px solid #578E87;
    border-bottom: 2px solid #578E87;
    margin: 0 4% 0 4%;
    padding: 0;
  }

  .logo {
    display: flex;
    justify-content: left;
  }

  img.sun-logo {
    padding-right: 3%;
  }

  .navbar-text {
    width: 100%;
    justify-content: right;
  }

  .nav-link {
    color: #1C4508 !important;
    font-size: 20px !important;
    font-weight: 500 !important;
    padding-left: 5% !important;
  }

  .nav-link:hover {
    color: #1C4508 !important;
    font-weight: 700 !important;
  }

  .link-icons {
    display: flex;
    width: 25%;
    justify-content: right;
  }
`;

export default NavBar;