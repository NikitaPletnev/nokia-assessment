import { DATA} from "../actions/types/actionTypes";
import {initialState} from "../initialState";
// eslint-disable-next-line
export const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
    case DATA:
        return Object.assign({
        }, state, {
            data: action.data,
        });
    default:
        return state;
    }
};
