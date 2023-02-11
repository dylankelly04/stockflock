import React, { Component } from 'react';
// import axios from 'axios';
// import Input from './Input';
// import ListTodo from './ListTodo';

class Todo extends Component {
  state = {
    todos: [],
  };

//   componentDidMount() {
//     this.getUsers();
//   }

//   getUsers = () => {
//     axios
//       .get('/api/users')
//       .then((res) => {
//         if (res.data) {
//           this.setState({
//             todos: res.data,
//           });
//         }
//       })
//       .catch((err) => console.log(err));
//   };

//   deleteUsers = (id) => {
//     axios
//       .delete(`/api/users/${id}`)
//       .then((res) => {
//         if (res.data) {
//           this.getUsers();
//         }
//       })
//       .catch((err) => console.log(err));
//   };

  render() {
    let { todos } = this.state;

    return (
      <div>
        <h1>Flock Stock</h1>
        {/* <Input getUsers={this.getUsers} />
        <ListTodo todos={Todo} deleteTodo={this.deleteUsers} /> */}
      </div>
    );
  }
}

export default Todo;