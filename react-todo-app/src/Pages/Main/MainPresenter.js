import React, { PureComponent } from 'react';
import { TodoItem } from './components';
import moment from 'moment';
import { Button, Progress, Divider, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import './Main.scss';

const { Title, Text } = Typography;

export default class MainPresenter extends PureComponent {
  state = {
    today: moment(),
  };

  render() {    
    const todoElementList = this.props.todos.map((todo) => {
      return (
        <TodoItem key={todo.id} todo={todo} handleChangeTodo={this.props.handleChangeTodo} handleDeleteTodo={this.props.handleDeleteTodo} />
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
                <Title level={2} >
                  {this.state.today.format('YYYY년 MM월 DD일')}
                </Title>                
              </div>
              <div className="day-of-week-text" style={{marginBottom: 15}}>                
                <Text type={'secondary'}>{this.state.today.format('dddd')}</Text>
              </div>
              <div className="progress-bar-area">
                <Progress strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }} percent={ isNaN(progress)  ? 100 : progress} />
              </div>
            </div>
            <Divider />
            <div className="todo-card-content">{todoElementList}</div>
            <div className="todo-card-interface">
              <Button
                type='primary'
                shape="circle"                
                icon={<PlusOutlined />}
                onClick={this.props.handleAddTodo}
                size='large'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
