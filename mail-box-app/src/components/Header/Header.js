import { useContext } from "react";
import AuthContext from "../../context/auth-context";
import { NavLink } from "react-router-dom";
import {Navbar,Container,Nav,Button} from "react-bootstrap";


const Header = () => {
const authContext = useContext(AuthContext);
const isLoggedIn = authContext.isLoggedIn;

    const logoutHandler = () => {
   authContext.logout()
    }
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
            <Nav.Link to="/" as={NavLink} >Home</Nav.Link>
            
           
          </Nav>
          <Nav className="mx-5"    style={{ color: "black", fontSize: "24px", fontWeight: "500" }}>
            <Nav.Link to="/signin" as={NavLink} >
                <Button>Login</Button>
            </Nav.Link>
            {isLoggedIn &&  <Nav.Link to="/signin" as={NavLink} >
             <Button onClick={logoutHandler}>Logout</Button>
            </Nav.Link>
            }
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
}
 
export default Header;