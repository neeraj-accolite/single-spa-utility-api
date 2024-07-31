import { Method } from "axios";

export interface APIWrapperProps {
    method: Method;
    url: string;
}