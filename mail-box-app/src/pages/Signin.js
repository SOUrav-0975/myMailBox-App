import { useRef, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Container, Form, Button, Card, Alert } from "react-bootstrap";

const Signin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  
 

  const loginHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    let data = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };

    try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBFuI-EkylPKtBb67zuTL1cYuIA-x_1CBc",
          {
              method:"POST",
              body:JSON.stringify(
                 data
              ),
              headers:{
                  "Content-Type":"application/json"
              }
          });
          if(response.ok){
            const data = await response.json();
            localStorage.setItem("userToken", data.idToken);
            console.log(data)
          }else{
    
            alert("user dosen't exist")
          }
       
        
      } catch (error) {
        console.log("error", error);
     
      }
  };

  
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="w-100"
        style={{
          maxWidth: "500px",
          boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          
          borderRadius: "13px",
        }}
      >
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
          

            <Form onSubmit={loginHandler}>
              <Form.Group className="mb-3" id="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  ref={emailRef}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100"
              
              >
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
         {/* <div className="w-100 text-center my-4">
          Need an account ? <Link to="/signup">Sign Up</Link>
        </div>
        <div className="w-100 text-center my-4">
          <Link onClick={passwordHandler}>Forget Password</Link>
        </div> */}
      </div> 
    </Container>
  );
};

export default Signin;
