import { rerenderEntireTree } from "../render"


let state = {
  profilePage: {
    posts: [
      { id: 0, message: "Hey, why nobody love me?" },
      { id: 1, message: "It's our new program! Hey!" },
    ],
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
};


export let addPost = (postMessage) => {
  // debugger;
  // let newPost = { id: 2, message: postMessage };
  state.profilePage.posts.push({ id: 2, message: postMessage });
  rerenderEntireTree(state, addPost)
};

// let newPost = { id: 2, message: postMessage };
// let newPost = new Object({}, { id: 2, message: postMessage })

export default state;
