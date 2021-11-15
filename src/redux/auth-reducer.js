export const setAuthData = (id, login, email) => ({ type: 'SETAUTHDATA', data: {id, login, email} });

let initialState = {
    id: null,
    login: null,
    email: null
  }

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SETAUTHDATA': {
            return {
                ...state,
                ...action.data
            }
        }
        default: return state;
    }
}

export default authReducer;