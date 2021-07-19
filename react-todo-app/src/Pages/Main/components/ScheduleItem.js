import { DeleteOutlined } from "@ant-design/icons";
import { Checkbox, Input, Typography } from "antd";
import React, { Component } from "react";

const { Text } = Typography;

export default class TodoItem extends Component {
    state = {
        active: false,
        schedule_title: this.props.schedule.schedule_title,
    };

    /**
     * @title 스케쥴 변경
     * @param {*} newSchedule
     */
    onChangeSchedule = (newSchedule) => {
        console.log("this.props.schedule: ", this.props.schedule);
        this.props.handleChangeTodo(
            this.props.schedule.schedule_id,
            newSchedule
        );
    };

    handleInputText = (text) => {
        this.setState({
            schedule_title: text,
        });
    };

    deleteTodo = (schedule) => {
        console.log("schedule: ", schedule);
        const { schedule_id } = schedule;
        this.props.handleDeleteTodo(schedule_id);
    };

    render() {
        const { schedule } = this.props;
        const { active, schedule_title } = this.state;
        const { schedule_id, isDone } = schedule;

        /**
         *  attendance_count: 10
            begin_time: 123131
            calendar_id: 1
            created_at: 1626227357942
            end_time: 1313131
            schedule_description: "집에 열심히 가는 것이 목표"
            schedule_id: 1
            schedule_location: "밀양"
            schedule_title: "집가기"
            updated_at: 1626227357942
         * 
         */
        return (
            <>
                <div className="todo-item-box" key={schedule_id}>
                    <Checkbox
                        checked={isDone}
                        onChange={(e) => {
                            this.onChangeSchedule({ isDone: e.target.checked });
                        }}
                    />
                    <div className="todo-content">
                        {this.state.active && (
                            <>
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
                                        this.onChangeSchedule({
                                            schedule_title,
                                        });
                                        this.setState({
                                            active: false,
                                        });
                                    }}
                                />
                            </>
                        )}

                        {/*  완료된 todo content */}
                        {!active && schedule.isDone && (
                            <Text delete disabled>
                                {schedule_title}
                            </Text>
                        )}

                        {/*  진행중인 todo content */}
                        {!active && !schedule.isDone && (
                            <Text
                                style={{ display: "block" }}
                                onClick={() => {
                                    this.setState({
                                        active: true,
                                    });
                                }}
                            >
                                {schedule_title}
                            </Text>
                        )}
                    </div>

                    <div className="delete-icon">
                        <DeleteOutlined
                            onClick={() => {
                                this.deleteTodo(schedule);
                            }}
                        />
                    </div>
                </div>
            </>
        );
    }
}
