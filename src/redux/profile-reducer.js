export const addPostActionCreator = () => ({type: 'ADDPOST'})
export const updateNewPostTextActionCreator = (text) => 
({ type: 'UPDATENEWPOSTTEXT', newText: text })

let initialState = {
    posts: [
      { id: 0, message: "Hey, why nobody love me?" },
      { id: 1, message: "It's our new program! Hey!" },
    ],
    newPostText: "",
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
        default: return state;
    }
}

export default profileReducer;