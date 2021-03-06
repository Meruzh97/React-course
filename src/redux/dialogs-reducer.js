export const addMessageActionCreator = () => ({ type: "ADDMESSAGE" });
export const updateNewMessageTextActionCreator = (text) => ({
  type: "UPDATENEWMESSAGETEXT",
  newText: text,
});

let initialState = {
  dialogs: [
    { id: 1, name: "Viktor" },
    { id: 2, name: "Dmitry" },
    { id: 3, name: "Sasha" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Valera" },
    { id: 6, name: "Andrew" },
    { id: 7, name: "Victoria" },
    { id: 8, name: "Ruslan" },
    { id: 9, name: "Elena" },
    { id: 10, name: "Antonio" },
  ],

  messages: [
    { id: 0, message: "Hi" },
    { id: 1, message: "How are you?" },
    { id: 2, message: "What's app man" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDMESSAGE": {
      let stateCopy = {...state}
      let body = stateCopy.newMessageText;
      stateCopy.newMessageText = "";
      stateCopy.messages.push({ id: 3, message: body });
      return stateCopy;
    }
    case "UPDATENEWMESSAGETEXT": {
      let stateCopy = {...state}
      stateCopy.newMessageText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export default dialogsReducer;
