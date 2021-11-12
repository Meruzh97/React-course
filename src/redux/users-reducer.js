export const followAC = (userId) => ({type: 'FOLLOW', userId})
export const unfollowAC = (userId) => ({type: 'UNFOLLOW', userId})
export const setUsersAC = (users) => ({type: 'SETUSERS', users})
export const setCurrentPageAC = (currentPage) => ({type: 'SETCURRENTPAGE', currentPage})
export const setTotalUsersCountAC = (totalCount) => ({type: 'SETTOTALUSERSCOUNT', totalUsersCount:totalCount })
export const preloaderAC = (isFetching) => ({type: 'PRELOADER', isFetching: isFetching })

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case 'SETUSERS': {
            return {
                ...state, 
                users: action.users
            }
        }
        case 'SETCURRENTPAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SETTOTALUSERSCOUNT': {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case 'PRELOADER': {
            return {...state, isFetching: action.isFetching}
        }

        default: return state;
    }
}

export default usersReducer;
// users: [...state.users ,...action.users]