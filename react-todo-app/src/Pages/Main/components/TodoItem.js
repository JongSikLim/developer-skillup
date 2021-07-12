import React, { Component } from 'react';
import { Checkbox, Input, Typography, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'

const { Title, Text } = Typography;

export default class TodoItem extends Component {
  state = {
    active: false,    
    content: this.props.todo.content,
  };

  changeTodo = (newTodo) => {
    this.props.handleChangeTodo(this.props.todo.id, newTodo);
  };

  handleInputText = (text) => {
    this.setState({
      content: text,
    });
  };

  deleteTodo = (todo) =>{
    const { id } = todo;    
    this.props.handleDeleteTodo(id)
  }

  render() {
    return (
      <>
        <div className="todo-item-box">
          <Checkbox            
            checked={this.props.todo.isDone}
            onChange={(e) => {
              this.changeTodo({ isDone: e.target.checked });
            }}
          />
          <div className="todo-content">
          {this.state.active && <>
              <Input
                className="todo-input-text-field"
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
                  this.changeTodo({ content: this.state.content });
                  this.setState({
                    active: false,
                  });
                }}
              />
            </>}
            {/*  완료된 todo content */}
          { (!this.state.active && this.props.todo.isDone) && 
              <Text  delete disabled>{this.props.todo.content}</Text>              
            }
            {/*  진행중인 todo content */}
          {
            (!this.state.active && !this.props.todo.isDone) && <Text            
            style={{display:'block'}}
            onClick={() => {
              this.setState({
                active: true,
              });
            }}
          >
            {this.props.todo.content}
          </Text>
          }      
          </div>  
          
          <div className="delete-icon">            
            <DeleteOutlined  onClick={()=>{this.deleteTodo(this.props.todo)}}/>
          </div>          
        </div>
      </>
    );
  }
}
