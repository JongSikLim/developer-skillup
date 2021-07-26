import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import React, { Component } from "react";

class CalendarItem extends Component {
    state = {
        isHover: false,
    };
    render() {
        const { calendar, color, handleCalendarItem } = this.props;
        const { isHover } = this.state;
        const { calendar_name } = calendar;

        const mouseHoverEvents = {
            onMouseEnter: () => {
                this.setState({
                    isHover: true,
                });
            },
            onMouseLeave: () => {
                this.setState({
                    isHover: false,
                });
            },
            onDoubleClick: () => {
                // TODO 라우팅 핸들러 만들기
            },
        };

        return (
            <div
                className="calendar-item"
                style={{ borderTopColor: color }}
                {...mouseHoverEvents}
            >
                <div className="util-area">
                    {isHover && (
                        <>
                            <EditOutlined
                                onClick={() => {
                                    handleCalendarItem(calendar, "U");
                                }}
                            />
                            <CloseOutlined
                                onClick={() =>
                                    handleCalendarItem(calendar, "D")
                                }
                            />
                        </>
                    )}
                </div>
                <div className="title">{calendar_name}</div>
                <div className="description"></div>
            </div>
        );
    }
}

export default CalendarItem;
