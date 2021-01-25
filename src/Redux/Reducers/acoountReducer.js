import Action, {
    getActionSuccess,
    getActionFailed,
    getActionUnmount,
} from '../Action/action'

const initinit = {
    data: [],
    error: null,
}

const CountReducer = (state = initinit, action) => {
    switch (action.type) {
        case getActionSuccess(Action.LOGIN):
            console.log('action',action);
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}
export default accountReducer = {
    CountReducer
}