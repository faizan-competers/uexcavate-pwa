import { User } from "../../models/User"; 
import {AuthActionTypes, AuthActions} from '../actions/auth.actions';

// auth state
export interface State {
    isAuth: boolean;
    user: User | null;
    errorMsg: string | null;
}

export const initialState: State {
    isAuth: false,


}