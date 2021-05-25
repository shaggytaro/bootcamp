import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar';

function Contact() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
         <NavBar />
        <Container fluid>
          <h1 className="display-3">My Contact Details</h1>
          <p className="lead">Here are my contact details </p>
          <p className="lead">Email : pcprashant3@gmail.com my email </p>
          <p className="lead">Phone : 573 200 1109 </p>
          <p className="lead">Typical Wake up / Sleep Hours : Other than bootcamps. I will available morning 7AM to 11AM EST via slack or whatsapp Changed  </p>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Contact;
