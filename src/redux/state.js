export const addPostActionCreator = () => {
  return {
    type: 'ADDPOST'
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: 'UPDATENEWPOSTTEXT',
    newText: text
  }
}



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
  _addPost(){
    this._state.profilePage.posts.push({ id: 2, message: this._state.profilePage.newPostText });
    this._state.profilePage.newPostText = ""
    this._callSubscriber()
  },
  _updateNewPostText(newText){
    this._state.profilePage.newPostText = newText;
    this._callSubscriber();
  },
  _subscribe(observer){
    this._callSubscriber = observer;
  },
  getState(){
    return this._state;
  },
  dispatch(action) {
    if (action.type === '_CALLSUBSCRIBER') {
      this._callSubscriber()
    }
    else if(action.type === 'SUBSCRIBE') {
      this._subscribe();
    }
    else if (action.type === 'ADDPOST'){
        this._state.profilePage.posts.push({ id: 2, message: this._state.profilePage.newPostText });
        this._state.profilePage.newPostText = ""
        this._callSubscriber()
    } else if(action.type === 'UPDATENEWPOSTTEXT'){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber()
    }
  }
}

Window.prototype.store = store;

export default store;