import { apiManager } from "utils";
import URL from "./ApiConstant";

const { returnResult } = apiManager;

const scheduleController = {
    getScheduleList: async () => {
        const url = URL.GET_SCHEDULE_LIST;
        const result = await apiManager.get(url);

        return returnResult(result);
    },
    insertSchedule: async (body) => {
        const url = URL.INSERT_SCHEDULE;
        const result = await apiManager.post(url, body);

        return returnResult(result);
    },
    updateSchedule: async (id, body) => {
        const url = URL.UPDATE_SCHEDULE;
        const result = await apiManager.put(url, body);

        return returnResult(result);
    },
    deleteSchedule: async (id) => {
        const url = URL.DELETE_SCHEDULE.replace(":schedule_id", id);
        console.log("url: ", url);
        const result = await apiManager.delete(url);

        return returnResult(result);
    },
};

export default scheduleController;
