

import { useRef, useState } from "react";

//import {  Link } from "react-router-dom";

import { Container, Form, Button, Card, Alert } from "react-bootstrap";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();
  const [isError, setIsError] = useState("");
  
  //const history = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredConfirmPassword = confirmpasswordRef.current.value;
  
    if (enteredPassword !== enteredConfirmPassword) {
      return setIsError("passwords do not match");
    }
    let postData = {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      };

      try {
        const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBFuI-EkylPKtBb67zuTL1cYuIA-x_1CBc",
          {
            method: "POST",
            body: JSON.stringify(
             postData
            ),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if(response.ok){
          const data = await response.json();
          console.log(data)
        }else{
          alert("can't fetch the credential")
        }
       
      } catch (error) {
        console.log("error", error.message);
       
        
       
      }


  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "75vh" }}
    >
      <div
        className="w-100"
        style={{
          maxWidth: "500px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          
          borderRadius: "13px",
        }}
      >
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {isError && <Alert variant="danger">{isError}</Alert>}
          
            <Form onSubmit={submitHandler}>
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

              <Form.Group className="mb-3" id="cfmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={confirmpasswordRef}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100"
                
              >
                Signup
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center my-4">
          {/* Already have an account? <Link to="/signin">Log In</Link>{" "} */}
        </div>
      </div>
    </Container>
  );
};

export default Signup;
