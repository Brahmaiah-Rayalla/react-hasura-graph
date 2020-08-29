import React from 'react';
import { Query } from 'react-apollo';
import Del from './components/DeleteTodo'
import { Alert } from 'reactstrap';
import Mark from './components/MarkDone'
import { TODO } from './components/queries'

const todosStyle = {
  marginTop: '20px'
}

const Todos = () => {

  return (
    <div>
      <label><h4><i class="fa fa-list-ul" aria-hidden="true"></i> List of TODO's:</h4></label>
      <Query query={TODO}>

        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return (console.log(error));
          if (data.todo.length) {
            return data.todo.map(({ id, todo, done }) => (

              done ?
                <div class="card border border-success m-3 pb-2">
                  <div class="card-body">
                    <p class="card-text text-success"> <h4><span key={todo.id} ><i class="fa fa-comment" aria-hidden="true"></i>  {todo}  <Del id={id} /> <Mark id={id} /></span></h4></p>
                  </div>
                </div>
                :
                <div class="card border border-default m-3 pb-2">
                  <div class="card-body">
                    <p class="card-text"> <h4><span key={todo.id} > <i class="fa fa-comment" aria-hidden="true"></i>  {todo}  <Del id={id} /> <Mark id={id} /></span></h4></p>
                  </div>
                </div>


            ));


          }
          else {
            return (<div class="card  m-3 pb-2">
              <div class="card-body">
                <p class="card-text text-danger"> <h5>List is Empty.  Add Some TODO's...</h5></p>
              </div>
            </div>
            )
          }

        }}

      </Query>
    </div>
  )
}

export default Todos;