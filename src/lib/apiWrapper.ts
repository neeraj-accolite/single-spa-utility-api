import axios from "axios";
import { APIWrapperProps } from "./lib";

/**
 * Return instance of the Axios api call.
 * @param props 
 * @returns 
 */
export function fetchData(props: APIWrapperProps) {
    return axios({
        method: props.method,
        url: props.url
    })
}