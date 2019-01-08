import { Action } from "@ngrx/store";

export enum AuthActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILURE = '[Auth] Login Failure',
}
// action = {type: LOGIN, payload: {email, password}}
export class Login implements Action {
    readonly type = AuthActionTypes.LOGIN;
    constructor(public payload: any) {
        // payload = {email, password}
    }
}

export class LoginSuccess implements Action {
    readonly type = AuthActionTypes.LOGIN_SUCCESS;
    constructor(public payload: any) {}
}

export type AuthActions = | Login | LoginSuccess;