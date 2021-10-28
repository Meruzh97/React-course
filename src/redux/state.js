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
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "What's app man" },
      ],
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
  addPost(){
    this._state.profilePage.posts.push({ id: 2, message: this._state.profilePage.newPostText });
    this._state.profilePage.newPostText = ""
    this._callSubscriber()
  },
  updateNewPostText(newText){
    this._state.profilePage.newPostText = newText;
    this._callSubscriber();
  },
  subscribe(observer){
    this._callSubscriber = observer;
  },
  getState(){
    return this._state;
  }
};

Window.prototype.store = store;

export default store;