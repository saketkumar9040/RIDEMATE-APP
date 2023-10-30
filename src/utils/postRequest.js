import axios from "axios";
import {SERVER_URL} from "@env";

export const postRequest = async (endPoint,data) => {
    try {
        const request = await axios.post(`${SERVER_URL}/${endPoint}`,data);
        console.log(request.data);
    } catch (error) {
        throw new Error(error.message);
    }
}