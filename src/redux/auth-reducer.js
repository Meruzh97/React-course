export const setAuthData = (id, login, email) => ({ type: 'SETAUTHDATA', id, login, email });

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
                ...action.id,
                ...action.login,
                ...action.email
            }
        }
        default: return state;
    }
}

export default authReducer;