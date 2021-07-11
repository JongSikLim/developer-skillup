import React, { PureComponent } from 'react';
import { TodoItem } from './components';
import moment from 'moment';
import { Button, Progress } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import './Main.scss';

export default class MainPresenter extends PureComponent {
  state = {
    today: moment(),
  };

  render() {
    console.log('this.props.todos: ', this.props.todos);
    const todoElementList = this.props.todos.map((todo) => {
      return (
        <TodoItem todo={todo} handleChangeTodo={this.props.handleChangeTodo} />
      );
    });

    const progress = (
      (this.props.todos.filter((todo) => todo.isDone).length /
        this.props.todos.length) *
      100
    ).toFixed(0);

    return (
      <div className="main-container">
        <div className="main-box">
          <div className="todo-card-container">
            <div className="todo-card-header">
              <div className="date-text">
                {this.state.today.format('YYYY년 MM월 DD일')}
              </div>
              <div className="day-of-week-text">
                {this.state.today.format('dddd')}
              </div>
              <div className="progress-bar-area">
                <Progress percent={progress} />
              </div>
            </div>
            <div className="todo-card-content">{todoElementList}</div>
            <div className="todo-card-interface">
              <Button
                shape="circle"
                icon={<PlusOutlined />}
                onClick={this.props.handleAddTodo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
