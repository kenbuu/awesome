export default {
    GET_USER_INFO: "GET_USER_INFO",
    LOGIN: "LOGIN",
}

export function getActionSuccess(action){
    return action+"_SUCCESS";
}

export function getActionFailed(action){
    return action+"_FAILED";
}

//clear dữ liệu của reducer
export function getActionUnmount(action){
    return action+"_UNMOUNT";
}