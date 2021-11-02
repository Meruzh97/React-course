import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import navbarReducer from "./navbar-reducer"


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 0, message: "Hey, why nobody love me?" },
        { id: 1, message: "It's our new program! Hey!" },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
    navbar: {
      friends: [
        { id: 1, name: "Viktor" },
        { id: 2, name: "Dmitry" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Sveta" },
        { id: 5, name: "Valera" },
        { id: 6, name: "Andrew" },
      ],
    },
  },
  _callSubscriber(){
    console.log('changed')
  },
  _addPost(){
    this._state.profilePage.posts.push({ id: 2, message: this._state.profilePage.newPostText });
    this._state.profilePage.newPostText = ""
    this._callSubscriber()
  },
  _addMessage(){
    let body = this._state.dialogsPage.newMessageText
    this._state.dialogsPage.newMessageText = ""
    this._state.dialogsPage.messages.push({ id: 3, message: body });
    this._callSubscriber()
  },
  _updateNewPostText(newText){
    this._state.profilePage.newPostText = newText;
    this._callSubscriber();
  },
  _updateNewMessageText(newText){
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber();
  },
  _subscribe(observer){
    this._callSubscriber = observer;
  },
  getState(){
    return this._state;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.navbar = navbarReducer(this._state.navbar, action);

    this._callSubscriber();
  }
}

Window.prototype.store = store;

export default store;