import { API_URL } from "../constants"

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
        const res = await fetch(API_URL + action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        })
        const data = await res.json()
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
    }
}
