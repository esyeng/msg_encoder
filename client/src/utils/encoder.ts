import { API_URL } from "../constants"
import axios from 'axios';

interface Params {
    message: string;
    number: number;
    action: string;
}

export const sendMessage = async ({ message, number, action }: Params) => {
    try {
        // console.log(API_URL + action)
        console.log(message, number, action)
        const reqBody = action === 'encode' ? {
            message: message,
            secret_number: number
        } : {
            message: message,
            inputted_number: number
        }
        const res = await axios.post(API_URL + action, reqBody)
        const data = res.data
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
    }
}
