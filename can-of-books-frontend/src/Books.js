import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

class Books extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      bookArr: []
    }
  }

  componentDidMount = () => {
    axios
    .get(`http://localhost:3888/getBooks`)
    .then(result =>{
      console.log(result.data);
      this.setState({
        bookArr : result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
    
  }
  render(){
    return(
      <div>
        <Carousel>
        {this.state.bookArr.map(val => {
          return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg"
                    alt="First slide"
                    width="800px"
                    height="600px"
                  />
                  <Carousel.Caption>
                    <h2>{val.title}</h2>
                    <p>{val.description}</p>
                    <p>{val.status}</p>
                  </Carousel.Caption>
                </Carousel.Item>
          );
        })}
        </Carousel>
      </div>
    )
  }
}
export default Books;

