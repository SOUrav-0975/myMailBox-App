
import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

import {Form,Button} from "react-bootstrap";


const TextEditorPage = () => {
  const editor = useRef();
   const [email,setEmail] = useState("")
   const [subject,setSubject] = useState("")
   const [content, setContent] = useState('');


     const emailChange = (e) => {
     const enteredEmail = e.target.value;
     console.log(enteredEmail)
     setEmail(enteredEmail)
    };
    
    const subjectChange = (e) => {
      const enteredSubject = e.target.value;
      console.log(enteredSubject)
      setSubject(enteredSubject)
     };
     const config = {
      readonly: false,
      height: 300
    };
    // const newContent = (event) => {
    //   const editorContent = event.target.innerHTML;
    //   setContent(editorContent);
    // };

    const formHandler = async(e) => {
        e.preventDefault();
        let postData = {
          email,
          subject,
          content
        }
        try {
          const response = await fetch(
            "https://mail-box-app-281cc-default-rtdb.firebaseio.com/mail.json",
            {
              method: "POST",
              body: JSON.stringify(postData),
              headers: {
                "Content-Type": "application/json",
               
              },
            }
          );
          const data = await response.json();
          alert("send successfully");
          console.log(data);
        
        } catch (error) {
          console.log("error", error.message);
        }
    }
    return ( 
        
      
        <div style={{ border: "1px solid black",padding: '2px', minHeight: '400px',marginTop:"200px",minWidth:"50vw" }}>
         
        
           <Form onSubmit={formHandler} >
      <Form.Group className="mb-3">
        <Form.Label>To:</Form.Label>
        <Form.Control type="email" placeholder=" Email" name="email" value={email} onChange={emailChange}/>
       
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Subject:</Form.Label>
        <Form.Control type="text" placeholder=" Subject" name="subject" value={subject} onChange={subjectChange} />
       
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBasicPassword">
      <JoditEditor
			ref={editor}
		 value={content}
     config={config}
        
     onBlur={newContent => setContent(newContent)}
     onChange={newContent => {}}	
		/>
      <div dangerouslySetInnerHTML={{ __html: content }} /> 
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
        </div>
      
     );
}
 
export default TextEditorPage;

