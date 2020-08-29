import React, { Component } from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo"
import Todos from "./Todos"
import AddTodo from "./components/AddTodo"
import Button from 'react-bootstrap/Button'


const client = new ApolloClient({
  uri: "https://react-hasura-graph.herokuapp.com/v1/graphql"

});


class App extends Component {


  render() {


    return (
      (
        <ApolloProvider client={client}>
          <div class="container">
            <div class="row">
              <div class="col-md-8">

                <div class="panel panel-primary">
                  <div class="panel-heading"><h2><i class="fa fa-list-ul" aria-hidden="true"></i> TODO APP</h2></div>
                  <div class="panel-body"><AddTodo addTodo={this.addTodo} /></div>
                  <div class="panel-body"><Todos deleteTodo={this.deleteTodo} /></div>
                </div>
              </div>
            </div>
          </div>





        </ApolloProvider >
      )
    );
  }
}

export default App;
