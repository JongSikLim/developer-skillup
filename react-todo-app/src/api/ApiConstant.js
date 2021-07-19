import { HOST_URL } from "utils";

const calendarApiList = {
    GET_CALENDAR_LIST: `${HOST_URL}/cm`,
    INSERT_CALENDAR: `${HOST_URL}/cm`,
    UPDATE_CALENDAR: `${HOST_URL}/cm`,
    DELETE_CALENDAR: `${HOST_URL}/cm`,
};

const scheduleApiList = {
    GET_SCHEDULE_LIST: `${HOST_URL}/schedule`,
    INSERT_SCHEDULE: `${HOST_URL}/schedule`,
    UPDATE_SCHEDULE: `${HOST_URL}/schedule/:schedule_id`,
    DELETE_SCHEDULE: `${HOST_URL}/schedule/:schedule_id`,
};

const combineApiList = {
    ...calendarApiList,
    ...scheduleApiList,
};

export default combineApiList;
