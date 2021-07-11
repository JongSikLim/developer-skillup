import React, { Component } from 'react';
import { Checkbox, Input } from 'antd';

export default class TodoItem extends Component {
  state = {
    todo: this.props.todo,
    active: false,
    content: this.props.todo.content,
  };

  handleChangeTodo = (newTodo) => {
    this.props.handleChangeTodo(this.props.todo.id, newTodo);
  };

  handleInputText = (text) => {
    this.setState({
      content: text,
    });
  };

  render() {
    return (
      <>
        <div className="todo-item-box">
          <Checkbox
            checked={this.props.todo.isDone}
            onChange={(e) => {
              this.handleChangeTodo({ isDone: e.target.checked });
            }}
          />

          {this.state.active ? (
            <>
              <Input
                onChange={(e) => {
                  this.handleInputText(e.target.value);
                }}
                autoFocus={true}
                onBlur={() => {
                  this.setState({
                    active: false,
                  });
                }}
                onPressEnter={() => {
                  this.handleChangeTodo({ content: this.state.content });
                  this.setState({
                    active: false,
                  });
                }}
              />
            </>
          ) : (
            <span
              onClick={() => {
                this.setState({
                  active: true,
                });
              }}
            >
              {this.props.todo.content}
            </span>
          )}
        </div>
      </>
    );
  }
}
