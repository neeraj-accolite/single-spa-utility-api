import axios, { Method } from "axios";

export function getApiWrapper({ method, url }: { method: Method, url: string }) {
    return axios({
        method,
        url
    })
}