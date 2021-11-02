export const addMessageActionCreator = () => ({type: 'ADDMESSAGE'})
export const updateNewMessageTextActionCreator = (text) => 
({ type: 'UPDATENEWMESSAGETEXT', newText: text })


const dialogsReducer = (state, action) => {
    switch(action.type){
        case 'ADDMESSAGE':
            let body = state.newMessageText;
            state.newMessageText = "";
            state.messages.push({ id: 3, message: body });
            return state;
        case 'UPDATENEWMESSAGETEXT':
            state.newMessageText = action.newText;
            return state;
        default: return state;
    }
}

export default dialogsReducer;