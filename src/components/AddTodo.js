import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Button from 'react-bootstrap/Button';
import { ADD_TODO, TODO } from './queries';

class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit = (addTodo) => {
    // call function to add a todo
    if (this.state.content) {
      addTodo({ variables: { todo: this.state.content }, refetchQueries: [{ query: TODO }] })
      this.setState({
        content: ""
      });
    }


  }
  render() {
    return (
      <Mutation mutation={ADD_TODO}>
        {(addTodo, { data }) => (
          <div>
            <form onSubmit={e => {
              e.preventDefault();
              this.handleSubmit(addTodo);
            }}
              class="form-group form-group-lg"
            >
              <label><h4><i class="fa fa-plus-circle" aria-hidden="true"></i> Add a new TODO:</h4></label>

              <input type="text" className='form-control' onChange={this.handleChange} value={this.state.content} /><br />

              <div class="text-center">
                <button id="singlebutton" name="singlebutton" class="btn btn-success btn-lg"> Add Note </button>
              </div>
            </form>
          </div>
        )}
      </Mutation>
    )
  }
}


export default AddTodo
