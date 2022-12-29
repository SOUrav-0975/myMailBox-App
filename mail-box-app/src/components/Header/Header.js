
import {Navbar,Container,Nav} from "react-bootstrap";

const Header = () => {

    return ( 
<Navbar collapseOnSelect expand="lg" bg="light" variant="light"  fixed="top"
        style={{
          color: "black",
          zIndex: "100",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}>
      <Container>
        <Navbar.Brand style={{ fontFamily:"fantasy", fontSize: "2.3rem",color:"darkred" }}><img src="https://cdn.pixabay.com/photo/2016/01/26/17/15/gmail-1162901__340.png" alt="icon" style={{height:"60px",width:"80px"}} />MailBox App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto"    style={{ color: "black", fontSize: "24px", fontWeight: "500" }}>
            <Nav.Link href="#">Home</Nav.Link>
            
           
          </Nav>
          <Nav className="mx-5"    style={{ color: "black", fontSize: "24px", fontWeight: "500" }}>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#">
             Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
}
 
export default Header;