// import dotenv from "dotenv";

// const result = dotenv.config({});

const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json",
    // "Access-Control-Allow-Origin": "*",
    // mode: "no-cors",
    // Authorization: "",
};

const jsonToQueryString = (params) => {
    let queryString = "";

    if (params) {
        const keys = Object.keys(params);

        if (keys.length > 0) {
            for (let ii in keys) {
                queryString += `&${keys[ii]}=${params[keys[ii]]}}`;
            }

            return `?${queryString.slice(1)}`;
        }
    }

    return queryString;
};
// export const HOST_URL = process.env.HOST_URL;
export const HOST_URL = `http://localhost:8080/wehago-template`;
export const apiManager = {
    get: async (url, params) => {
        const queryString = jsonToQueryString(params);
        const response = await fetch(`${url}${queryString}`, {
            method: "GET",
            headers,
        });
        const responseJson = await response.json();

        return responseJson;
    },
    post: async (url, body = {}) => {
        const bodyString = JSON.stringify(body);
        const response = await fetch(`${url}`, {
            method: "POST",
            headers,
            body: bodyString,
        });
        const responseJson = await response.json();

        return responseJson;
    },
    put: async (url, body) => {
        const bodyString = JSON.stringify(body);
        const response = await fetch(`${url}`, {
            method: "PUT",
            headers,
            body: bodyString,
        });
        const responseJson = await response.json();

        return responseJson;
    },
    patch: async (url, body) => {
        const bodyString = JSON.stringify(body);
        const response = await fetch(`${url}`, {
            method: "PATCH",
            headers,
            body: bodyString,
        });
        const responseJson = await response.json();

        return responseJson;
    },
    delete: async (url, params) => {
        const queryString = jsonToQueryString(params);
        const response = await fetch(`${url}${queryString}`, {
            method: "DELETE",
            headers,
        });
        const responseJson = await response.json();

        return responseJson;
    },
    returnResult: async (response) => {
        const { resultCode, resultMsg, resultData } = response;

        if (resultCode === 200) {
            return resultData;
        } else {
            return {
                resultData,
                resultMsg,
            };
        }
    },
};
