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

  addNewBook = (event) => {
    event.preventDefault();
    const obj = {
      title : event.target.title.value,
      description : event.target.description.value,
      status: event.target.status.value
    }
    axios
    .post(`http://localhost:3888/addNewBook`, obj)
    .then(result => {
      this.setState({
        bookArr : result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }
  
  deleteBooks = (id) => {
    axios
    .delete(`http://localhost:3888/deleteBooks/${id}`)
    .then(result => {
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
        <form onSubmit={this.addNewBook}>
          <input type="text" name="title" placeholder='Book Name' />
          <input type="text" name="description" placeholder='Book Description' />
          <input type="text" name="status" placeholder='Book Status' />
          <button type='submit'>Add</button>
          </form>
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
                    <button onClick={() => this.deleteBooks(val._id)}>Delete Book</button>
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

