import { PlusOutlined } from "@ant-design/icons";
import { Button, Drawer, Input, Form } from "antd";
import React, { PureComponent } from "react";
import CalendarItem from "./components/CalendarItem";

class CalendarPresenter extends PureComponent {
    colors = [
        "#cf1322",
        "#d46b08",
        "#d4b106",
        "#389e0d",
        "#096dd9",
        "#531dab",
        "#c41d7f",
    ];

    onFormFinish = (values) => {
        console.log("values: ", values);
        this.props.handleCalendarItem(values, "C");
    };

    render() {
        const {
            calendars,
            handleCalendarItem,
            drawerVisible,
            setDrawerVisible,
        } = this.props;

        const calendarItems = calendars.map((c, index) => {
            const { calendermaster_id } = c;
            return (
                <CalendarItem
                    key={calendermaster_id}
                    calendar={c}
                    color={this.colors[index]}
                    handleCalendarItem={handleCalendarItem}
                />
            );
        });

        return (
            <div
                className="calendar-container"
                id="calendarContainer"
                style={{
                    position: "relative",
                }}
            >
                <h1>
                    CALENDAR
                    <Button
                        size="small"
                        icon={<PlusOutlined />}
                        shape="circle"
                        type="primary"
                        onClick={() => setDrawerVisible(true)}
                    />
                </h1>
                <div className="calendar-card-box">{calendarItems}</div>
                <Drawer
                    title="캘린더 추가"
                    height={"fit-content"}
                    placement="top"
                    closable={false}
                    visible={drawerVisible}
                    onClose={() => {
                        setDrawerVisible(false);
                    }}
                    getContainer={false}
                    style={{ position: "absolute" }}
                    headerStyle={{
                        textAlign: "center",
                    }}
                    bodyStyle={{
                        textAlign: "center",
                        paddingTop: 5,
                        paddingBottom: 0,
                    }}
                >
                    <div className="calendar-form-body">
                        <Form onFinish={this.onFormFinish}>
                            <Form.Item
                                label="캘린더 이름"
                                name="calendar_name"
                                required={true}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item style={{ marginBottom: 5 }}>
                                <Button block type="primary" htmlType="submit">
                                    추가하기
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default CalendarPresenter;
