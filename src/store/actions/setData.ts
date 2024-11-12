import {DataInterface} from "../../interfaces/DataInterface";
import {DATA} from "./types/actionTypes";

export const setData = (
    data: DataInterface[]
): { type: string; data: DataInterface[] } => {
    return {
        type: DATA,
        data,
    };
};
