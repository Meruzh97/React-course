
export const addPostActionCreator = () => ({type: 'ADDPOST'})
export const updateNewPostTextActionCreator = (text) => 
({ type: 'UPDATENEWPOSTTEXT', newText: text })


const profileReducer = (state, action) => {
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