import './Login.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [formValues, setFormValues] = useState({username:"", password:""})
    const navigate = useNavigate();
    const handleUsernameChange = ((e) => {
        setFormValues({...formValues, username: e.target.value})
      });
     
      const handlePasswordChange = ((e) => {
        setFormValues({...formValues, password: e.target.value})
      });
      const [validationStates, setValidationStates] = useState({
        usernameState: true,
        passwordState: true
      });

      const clickSubmit = (() => {
        //Call fetch
        if(usernameValidation(formValues.username) && passwordValidation(formValues.password)){
            window.location.href = "/home";
            navigate('/home');
        }
        else{

            window.location.href = "/home";
            navigate('/home');
    
          return false
        }
      })
      const usernameValidation = ((username) => {

        setValidationStates({...validationStates, usernameState: true})
        return true
      })
    
      const passwordValidation = ((password) => {
        if(password.length < 8 && password.length > 5){
          setValidationStates({...validationStates, passwordState: false})
          console.log(formValues.password)
          return true
        }
        else{
          return false
        }
      })
  return (
   
    <div className="bg">
      <div id="login">
      <Form>
     <Form.Group className="mb-6" controlId="formBasicEmail">
        <br></br>
       <Form.Label>username</Form.Label>
       <Form.Control type="email" placeholder="Enter email" onChange={handleUsernameChange} value={formValues.email}/>
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value = {formValues.password}/>
     </Form.Group>
     <Button variant="primary" onClick={clickSubmit}>
       Login
     </Button>
   </Form>
      </div>
    </div>
  );
}

export default Login;
