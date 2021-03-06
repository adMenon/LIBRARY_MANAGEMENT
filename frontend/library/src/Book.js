import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Bookcontainer from './Bookcontainer.js';
import Bookinfo from './Bookinfo.js';
import Bookdynamic from './Bookdynamic.js';
import Listcontainer from './Listcontainer.js';
import ReviewList from './ReviewList.js';
import Header from './Header.js';  

class Book extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots : robots,
    //         //searchfield = ''
    //     }
    // }
    componentDidMount() {
      window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                {/* {console.log(this.props.location.state.book)} */}
                <Header />
                <Bookcontainer>
                	<Bookinfo history={this.props.history} book={this.props.location.state.book}/>
                </Bookcontainer>
                <Listcontainer>
                    <ReviewList BookId={this.props.location.state.book.BookId}/>
                </Listcontainer>
            </div>
        );

    }
}

export default Book;