import { createReducer } from '@reduxjs/toolkit';
import { loadingSet, loadingReset, isLoggedIn} from './actions';
export interface ILoading{
    loadingStatus: boolean;
    isLoggedIn: boolean;
}
const initialState: ILoading= {
    loadingStatus: false,
    isLoggedIn: false
}
const loadingReducer = createReducer(initialState, {
    [loadingSet.type]:(state) => {
        state.loadingStatus = true;
        // console.log(state.loadingStatus);
    },
    [loadingReset.type]:(state) => {
        state.loadingStatus = false
    },
    [isLoggedIn.type]:(state, {payload}) => {
        state.isLoggedIn = payload;
    }
})
export default loadingReducer