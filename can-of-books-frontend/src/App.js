import React from 'react';
//import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Carousel from 'react-bootstrap/Carousel';
import Header from './Header';
import Books from './Books';
import Footer from './Footer';

class App extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <Books />
        <Footer />
      </div>
    )
  }
}
export default App;

