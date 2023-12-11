
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import headerImage from '../assets/images/Header_full.png';
const Header = () => {
  return (
    <>
       <div className="row header_color">
        <div className="col col-sm-12 col-md-6 col-lg-6">
          <img src={headerImage} alt="Logo" className='mx-5 my-2' style={{ width: '25%', height: 'auto' }}/>
        </div>
        <div className="col col-sm-12 col-md-6 col-lg-6">
          <Navbar bg="#f7d6d0" data-bs-theme="light">
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="#home"className="mx-2"><b>Product -</b></Nav.Link>
                <Nav.Link href="#features"className="mx-2"><b>Usecases -</b></Nav.Link>
                <Nav.Link href="#pricing"className="mx-2"><b>Pricing</b></Nav.Link>
                <Nav.Link href="#pricing"className="mx-2"><b>Customers</b></Nav.Link>
                <Nav.Link href="#pricing"className="mx-2"><b>Resources -</b></Nav.Link>
              </Nav>
              <button id="sign_btn" className='btn btn-lg mr-4'>Sign in</button>
              </Container>
          </Navbar>
        </div>
      </div>
    </>
  )
}
export default Header
