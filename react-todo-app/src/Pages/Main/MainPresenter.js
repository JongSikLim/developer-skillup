import React, { PureComponent } from "react";
import { ScheduleItem } from "./components";
import moment from "moment";
import { Button, Progress, Divider, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import "./Main.scss";

const { Title, Text } = Typography;

export default class MainPresenter extends PureComponent {
    /* States */
    state = {
        today: moment(),
    };

    /* Render */
    render() {
        /* Props & State */
        const { schedules, handleAddTodo, handleChangeTodo, handleDeleteTodo } =
            this.props;
        const { today } = this.state;

        /* Variables */
        const scheduleElementList = schedules.map((schedule, index) => {
            const { schedule_id } = schedule;

            return (
                <ScheduleItem
                    key={schedule_id ? schedule_id : `schedule-${index}`}
                    schedule={schedule}
                    handleChangeTodo={handleChangeTodo}
                    handleDeleteTodo={handleDeleteTodo}
                />
            );
        });

        const progress = (
            (schedules.filter((schedule) => schedule.isDone).length /
                schedules.length) *
            100
        ).toFixed(0);

        return (
            <div className="main-container">
                <div className="main-box">
                    <div className="todo-card-container">
                        <div className="todo-card-header">
                            <div className="date-text">
                                <Title level={2}>
                                    {today.format("YYYY년 MM월 DD일")}
                                </Title>
                            </div>
                            <div
                                className="day-of-week-text"
                                style={{ marginBottom: 15 }}
                            >
                                <Text type={"secondary"}>
                                    {today.format("dddd")}
                                </Text>
                            </div>
                            <div className="progress-bar-area">
                                <Progress
                                    strokeColor={{
                                        "0%": "#108ee9",
                                        "100%": "#87d068",
                                    }}
                                    percent={isNaN(progress) ? 100 : progress}
                                />
                            </div>
                        </div>
                        <Divider />
                        <div className="todo-card-content">
                            {scheduleElementList}
                        </div>
                        <div className="todo-card-interface">
                            <Button
                                type="primary"
                                shape="circle"
                                icon={<PlusOutlined />}
                                onClick={handleAddTodo}
                                size="large"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
