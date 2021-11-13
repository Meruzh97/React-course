export const addPostActionCreator = () => ({type: 'ADDPOST'});
export const updateNewPostTextActionCreator = (text) => ({ type: 'UPDATENEWPOSTTEXT', newText: text });
export const setProfile = (profile) => ({ type: 'SETPROFILE', profile });


let initialState = {
    posts: [
      { id: 0, message: "Hey, why nobody love me?" },
      { id: 1, message: "It's our new program! Hey!" },
    ],
    newPostText: "",
    profile: null
  }

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADDPOST': {
            let newPost = { id: 2, message: state.newPostText };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            // state.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case 'UPDATENEWPOSTTEXT': {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case 'SETPROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        default: return state;
    }
}

export default profileReducer;



// {
//     let stateCopy = {...state}
//     profile = action.profile;
//     return stateCopy;
// }