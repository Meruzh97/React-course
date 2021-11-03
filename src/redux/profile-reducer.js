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
        case 'ADDPOST':
            state.posts.push({ id: 2, message: state.newPostText });
            state.newPostText = "";
            return state;
        case 'UPDATENEWPOSTTEXT':
            state.newPostText = action.newText;
            return state;
        default: return state;
    }
}

export default profileReducer;