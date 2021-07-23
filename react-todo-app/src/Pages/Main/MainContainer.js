import { ApiCalendar, ApiSchedule } from "api";
import moment from "moment";
import React, { Component } from "react";
import { v1 } from "uuid";
import MainPresenter from "./MainPresenter";
export default class MainContainer extends Component {
    state = {
        date: moment(),
        schedules: [],
        calendars: [],
    };

    /**
     * @title 투두 아이템 추가 처라
     */
    handleAddTodo = () => {
        const newSchedule = {
            schedule_id: null,
            schedule_title: "할 일",
            schedule_description: null,
            schedule_location: null,
            attendance_count: 0,
            begin_time: null,
            end_time: null,
            is_done: false,
            calendar_id: 1,
            active: false,
        };

        ApiSchedule.insertSchedule(newSchedule)
            .then((res) => {
                this.getScheduleList();
            })
            .catch((err) => {
                console.log("err: ", err);
            });
    };

    /**
     * @title 투두 아이템 변경 처리
     */
    handleChangeTodo = (id, value) => {
        let newSchedule = [...this.state.schedules];
        let targetIdx = newSchedule.findIndex(
            (schedule) => schedule.schedule_id === id
        );

        newSchedule[targetIdx] = { ...newSchedule[targetIdx], ...value };
        ApiSchedule.updateSchedule(id, newSchedule[targetIdx])
            .then((res) => {
                this.setState({
                    schedules: newSchedule,
                });
            })
            .catch((err) => {
                console.log("err: ", err);
            });
    };

    /**
     * @title 투두 아이템 삭제 처리
     */
    handleDeleteTodo = (id) => {
        let newSchedules = this.state.schedules.filter((schedule) => {
            return schedule.schedule_id !== id;
        });

        ApiSchedule.deleteSchedule(id)
            .then(() => {
                this.setState({
                    schedules: newSchedules,
                });
            })
            .catch((err) => {
                console.log("err: ", err);
            });
    };

    /**
     * @title 이전 날짜로 이동
     */
    handleClickPrevDate = () => {
        let cloneDate = this.state.date.clone();
        cloneDate.add(-1, "days");

        this.setState({
            date: cloneDate,
        });
    };

    /**
     * @title 이후 날짜로 이동
     */
    handleClickNextDate = () => {
        let cloneDate = this.state.date.clone();
        cloneDate.add(1, "days");

        this.setState({
            date: cloneDate,
        });
    };

    /**
     * @title 달력 정보 조회
     */
    getCalendarList = () => {
        ApiCalendar.getCalendarList().then((res) => {
            this.setState({
                schedules: res,
            });
        });
    };

    /**
     * @title 스케줄 정보 조회
     */
    getScheduleList = () => {
        ApiSchedule.getScheduleList().then((res) => {
            this.setState({
                schedules: res,
            });
        });
    };

    /* Lifecycles */
    componentDidMount() {
        this.getScheduleList();
    }

    render() {
        const { date, schedules } = this.state;

        return (
            <MainPresenter
                date={date}
                schedules={schedules}
                handleAddTodo={this.handleAddTodo}
                handleDeleteTodo={this.handleDeleteTodo}
                handleChangeTodo={this.handleChangeTodo}
                handleClickPrevDate={this.handleClickPrevDate}
                handleClickNextDate={this.handleClickNextDate}
            />
        );
    }
}
