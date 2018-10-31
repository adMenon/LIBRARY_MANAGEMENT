import React, { Component } from 'react';
import { Table,thead } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Historybook from './Historybook.js';
import * as axios from 'axios';


class Historytable extends Component {
    
    constructor() {
        super();
        this.state = {
            previousbooks : []
        }
    }

    componentDidMount() {
        let getData = async () => {            
              let previousbooks = await axios({
              method: 'get',
              url: '/books-history'
            });
            if(previousbooks.data.output){
                this.props.history.push('/login');
            }
            else{
                console.log(previousbooks.data);
                this.setState({previousbooks: previousbooks.data});
            }
        }
        getData();
    }



    render() {

        const previousbooks = this.state.previousbooks;
        const Bookarray = previousbooks.map((book) =>{
            return (
                <Historybook 
                    key={book.id} 
                    book={book} 
                />
            );
        });


        return (
            <div>
                <h2>Previous books in Possession </h2>
                <Table responsive>
                    <thead>
                        <tr>
                        <th>S.No</th>
                        <th>Book name</th>
                        <th>Author</th>
                        <th>Publisher</th>
                        <th>Date of issue</th>
                        <th>Date of return</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Theory of Everything</td>
                        <td>Stephen.H</td>
                        <td>Hawk Books</td>
                        <td>22/10/2018</td>
                        <td>24/10/2018</td>
                        
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Theory of Everything</td>
                        <td>Stephen.H</td>
                        <td>Hawk Books</td>
                        <td>22/10/2018</td>
                        <td>24/10/2018</td>
                            </tr>
                        <tr>
                        <td>3</td>
                        <td>Theory of Everything</td>
                        <td>Stephen.H</td>
                        <td>Hawk Books</td>
                        <td>22/10/2018</td>
                        <td>24/10/2018</td>
                           </tr>
                    </tbody>
                </Table>
            </div>
        );

    }
}

export default Historytable;

