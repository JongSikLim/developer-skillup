import { Empty, message } from "antd";
import { ApiCalendar } from "api";
import React, { PureComponent } from "react";
import CalendarPresenter from "./CalendarPresenter";

class CalendarContainer extends PureComponent {
    /* States */
    state = {
        calendars: [],
        drawerVisible: false,
    };

    /* LifeCycle */
    componentDidMount() {
        this.getCalendarList();
    }

    /* Functions */
    /**
     * @title calendar api 가져옴
     */
    getCalendarList() {
        ApiCalendar.getCalendarList()
            .then((res) => {
                this.setState({
                    calendars: res,
                });
            })
            .catch(() => {
                this.setState({
                    calendars: [],
                });
            });
    }

    setDrawerVisible = (visible) => {
        this.setState({
            drawerVisible: visible,
        });
    };

    /**
     * @title 캘린더 아이템 처리
     * @param {*} c
     * @param {*} flag 'U' : 수정, 'D' : 삭제
     */
    handleCalendarItem = (c, flag) => {
        switch (flag) {
            case "C":
                this.handleAddCalendarItem(c);
                break;
            case "U":
                this.handleUpdateCalendar(c);
                break;
            case "D":
                this.handleDeleteCalendar(c);
                break;
            default:
                throw new Error("Flag type error");
        }
    };

    handleAddCalendarItem = (formBody) => {
        ApiCalendar.insertCalendar(formBody)
            .then((res) => {
                this.setState({
                    calendars: [...this.state.calendars, res],
                    drawerVisible: false,
                });
            })
            .catch((err) => {});
    };

    /**
     * @title 캘린더 수정
     * @param {*} c 캘린더 객체
     * @returns
     */
    handleUpdateCalendar = (c) => {
        const { calendermaster_id, calendar_name } = c;

        ApiCalendar.updateCalendar(c)
            .then((res) => {})
            .catch((err) => {
                message.error("수정 실패");
            });
    };

    /**
     * @title 캘린더 삭제
     * @param {*} c 캘린더 객체
     */
    handleDeleteCalendar = (c) => {
        const { calendermaster_id, calendar_name } = c;

        ApiCalendar.deleteCalendar(calendermaster_id)
            .then((res) => {
                this.setState((state) => {
                    return {
                        calendars: state.calendars.filter(
                            (c) => c.calendermaster_id !== calendermaster_id
                        ),
                    };
                });
            })
            .catch((err) => {
                message.error("삭제 실패");
            });
    };

    render() {
        /* Render */
        return (
            <CalendarPresenter
                {...this.props}
                {...this.state}
                handleCalendarItem={this.handleCalendarItem}
                setDrawerVisible={this.setDrawerVisible}
            />
        );
    }
}

export default CalendarContainer;
