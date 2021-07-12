import React, { Component } from 'react';
import MainPresenter from './MainPresenter';
import { v1 } from 'uuid';
export default class MainContainer extends Component {
  state = {
    todos: [],
  };

  /**
   * @title 투두 아이템 추가 처라
   */
  handleAddTodo = () => {
    const newTodo = {
      id: v1(),
      content: '할 일',
      isDone: false,
      active: false,
    };

    this.setState({
      todos : [...this.state.todos, newTodo]
    });
  };

  /**
   * @title 투두 아이템 변경 처리
   */
  handleChangeTodo = (id, value) => {
    let newTodos = [...this.state.todos];
    let targetIdx = newTodos.findIndex((todo) => todo.id === id);
    newTodos[targetIdx] = { ...newTodos[targetIdx], ...value };

    this.setState({
      todos: newTodos,
    });
  };

  /**
   * @title 투두 아이템 삭제 처리
  */
  handleDeleteTodo = (id) => {
    let newTodos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })

    this.setState({
      todos: newTodos
    })
  }

  // handleActive = (id, active) => {
  //   let newTodos = this.state.todos.map((todo) => {
  //     let newTodo = [...todo];
  //     if (todo.id === id) {
  //     } else {
  //       todo.active: false
  //     }
  //   });

  //   this.setState({
  //     todos: newTodos,
  //   });
  // };

  render() {
    return (
      <MainPresenter
        todos={this.state.todos}
        handleAddTodo={this.handleAddTodo}
        handleChangeTodo={this.handleChangeTodo}
        handleDeleteTodo={this.handleDeleteTodo}
      />
    );
  }
}