import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Form_section = () => {
  return (
    <>
    <div className="container bg-white">
      <h1 className='bg-white' style={{paddingTop: '2rem', paddingBottom: '3.5rem'}}>Contact Us</h1>
      <Form className='bg-white'>
      <Row className="mb-3">
        <Form.Group className='bg-white' as={Col} controlId="formGridEmail">
          <Form.Control style={{border: '2px solid black'}}type="text" placeholder="Full Name" />
        </Form.Group>
        <Form.Group className='bg-white' as={Col} controlId="formGridPassword">
          <Form.Control style={{border: '2px solid black'}} type="tel" placeholder="Phone" />
        </Form.Group>
      </Row>
      <Row className="mb-3 bg-white py-5" >
      <Form.Group className='bg-white' as={Col} controlId="formGridEmail">
      <Form.Control style={{border: '2px solid black'}} type="text" placeholder="Address" />
        </Form.Group>
        <Form.Group className='bg-white'as={Col} controlId="formGridPassword">
        <Form.Control style={{border: '2px solid black'}} type="email" placeholder="Email" />
        </Form.Group>
      </Row>
      <Form.Group as={Col} controlId="formGridDescription">
        <Form.Control
          as="textarea" style={{border: '2px solid black'}}
          placeholder="Description"
          rows={3}
        />
      </Form.Group>
      <div className="text-end bg-white form_btn" >
      <Button className='form_btn' variant="success" type="submit" className='w-25'>
        Submit
      </Button>
      </div>
    </Form>
    </div>
    </>
  )
}
export default Form_section
