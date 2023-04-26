

import './App.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    

    <div className='container'>
      <div className='box'>
  <Form>
    <img className='mm' src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='img'/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='btnnn' variant="primary" type="submit">
        Submit
      </Button>
    </Form>

  
    </div>


    </div>
    
  );
}

export default App;
