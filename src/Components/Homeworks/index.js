import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar'
import { Table } from 'reactstrap';
// import { Link } from 'react-router-dom' ;

function Homeworks() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">WELCOME TO BOOTCAMP - MAY 24 EDITION</h1>
          <p className="lead">My Name is Prashant Chakraborty and I am student here </p>
          <NavBar />

          <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Description</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Homework1</td>
          <td>Git Practice. Provide link of your repo here </td>
          <td><a href="https://github.com/shaggytaro/gitpracticehw1"> Link</a> </td>
       
      </tr>
        <tr>
          <th scope="row">2</th>
          <td>Homework 2</td>
          <td>Javascript - Here is my codepen link with solutions</td>
          <td><a href="https://codepen.io/shaggytaro/pen/QWpMyrM"> Link</a> </td>
       
      </tr>
      <tr>
          <th scope="row">3</th>
          <td>Homework 2.1</td>
          <td>Storage HW - Here is my codepen link with solution</td>
          <td><a href="https://codepen.io/shaggytaro/pen/RwpZezj"> Link</a> </td>
       
      </tr>

      <tr>
          <th scope="row">4</th>
          <td>Homework 2.2</td>
          <td>HTML Website - Here is my codepen link with solution</td>
          <td><a href="https://codepen.io/shaggytaro/pen/VwpzPpX"> Link</a> </td>
       
      </tr>

      <tr>
          <th scope="row">5</th>
          <td>Homework 3.1</td>
          <td>CSS Selectors - Here is my codepen link with solution</td>
          <td><a href="https://codepen.io/shaggytaro/pen/qBrpMam"> Link</a> </td>
       
      </tr>

      <tr>
          <th scope="row">5.5</th>
          <td>Quiz HW</td>
          <td>Quiz - Here is my codepen link with solution</td>
          <td><a href="https://codepen.io/shaggytaro/pen/eYvyLVd"> Link</a> </td>
       
      </tr>

      <tr>
          <th scope="row">6</th>
          <td>HW 3.2</td>
          <td>Nav Bar - Here is my codepen link with solution</td>
          <td><a href="https://codepen.io/shaggytaro/pen/Rwpxebd"> Link</a> </td>
       
      </tr>
        
      <tr>
          <th scope="row">7</th>
          <td>HW 3.3</td>
          <td>Word count - Here is my codepen link with solution</td>
          <td><a href="https://codepen.io/shaggytaro/pen/dyvJraN"> Link</a> </td>
       
      </tr>

      <tr>
          <th scope="row">8</th>
          <td>HW 4.1</td>
          <td>Comcast Question - Here is my codepen link with solution</td>
          <td><a href="https://codepen.io/shaggytaro/pen/QWpmgpM"> Link</a> </td>
       
      </tr>

      <tr>
          <th scope="row">9</th>
          <td>HW 5.1</td>
          <td>Theme changer - Here is my codepen link with solution</td>
          <td><a href="https://codepen.io/shaggytaro/pen/QWpmgBQ/"> Link</a> </td>
       
      </tr>
      
      <tr>
          <th scope="row">10</th>
          <td>HW 5.2</td>
          <td>Frontier Challenge - Here is my codepen link with solution</td>
          <td><a href="https://codepen.io/shaggytaro/pen/MWpBoPm"> Link</a> </td>
       
      </tr>

      <tr>
          <th scope="row">11</th>
          <td>HW 8.3</td>
          <td>Palindrome HW - Here is my codepen link with solution</td>
          <td><a href="https://codepen.io/shaggytaro/pen/vYxaZMw"> Link</a> </td>
       
      </tr>

      <tr>
          <th scope="row">12</th>
          <td>HW 10.2</td>
          <td>Lottery Project - Here is my codepen link with solution</td>
          <td><a href="https://codepen.io/shaggytaro/pen/gOmdPOY"> Link</a> </td>
       
      </tr>


      
      </tbody>
    </Table>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Homeworks;
