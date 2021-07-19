import { apiManager } from "utils";
import URL from "./ApiConstant";

const { GET_CALENDAR_LIST, INSERT_CALENDAR, UPDATE_CALENDAR, DELETE_CALENDAR } =
    URL;

const { returnResult } = apiManager;
const calendarController = {
    getCalendarList: async () => {
        const url = GET_CALENDAR_LIST;
        console.log("GET_CALENDAR_LIST: ", GET_CALENDAR_LIST);
        const result = await apiManager.get(url);

        return returnResult(result);
    },
    insertCalendar: async (body) => {
        const url = INSERT_CALENDAR;
        const result = await apiManager.post(url, body);

        return returnResult(result);
    },
};

export default calendarController;
