import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import styled from 'styled-components'
import Map from './Map';
const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
`;
const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content:space-between;
gap: 50px;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
@media only screen and (max-width: 768px){
  justify-content: center;
  }
`;

const Title = styled.h1`
font-weight: 200;
padding-left:20px;
`;

const Form = styled.form`
width: 500px;
display: flex;
flex-direction: column;
gap: 25px;

@media only screen and (max-width: 768px){
  width: 300px;
  }
`;

const Input = styled.input`
padding: 20px;
background-color: lightgray;
border: none;
border-radius: 5px;
background-color: #e8e6e6;
font-size: 1.2rem;
`;

const TextArea = styled.textarea`
padding: 20px;
font-size: 1.2rem;
border: none;
border-radius: 5px;
background-color: #e8e6e6;

`;

const Button = styled.button`
background-color: #da4ea2;
color:white;
border:none;
font-weight: bold;
cursor: pointer;
padding: 20px;
font-size: 1.2rem;
`;

const Right = styled.div`
flex: 1;
@media only screen and (max-width: 768px){
  display:none;
  }
`;


const Contact = () => {
  const ref = useRef()
const [success, setSuccess] = useState(null);


const handleSubmit = e => {
  e.preventDefault();
  emailjs
  .sendForm('service_6qq83ls', 'template_vviikz4', ref.current, {
    publicKey: 'ODD8oar3mr428IP01',
  })
  .then(
    () => {
      console.log('SUCCESS!');
      setSuccess(true);
    },
    (error) => {
      console.log('FAILED...', error.text);
      setSuccess(false);
    },
  );
}
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name"/>
            <Input placeholder="Email" name="email"/>
            <TextArea placeholder="Write your message" rows="8" name="message"></TextArea>
            <Button type="submit">Send</Button>
            {
              success && "Your message has been sent. We'll get back to you soon :)"
            }
          </Form>
        </Left>
        <Right>
          <Map></Map>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact
