import axios from "axios";
import client from "./client";

const makeApiRequest = async (method, endpoint, data) => {
    try {
        const response = await client.request({
            method,
            url: endpoint,
            data
        });
        return response.data
    } catch (error) {
        const { response } = error;
        if (response?.data) {
            return response.data
        }

        return { error: error.message || error }
    }
};

export const gettopheadlines = async () => {
    const response = await makeApiRequest("GET", "/v2/top-headlines")

    return response;
};

export const everything = async () => {
    const response = await makeApiRequest()
    return response
}

