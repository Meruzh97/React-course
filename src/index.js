import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogsData = [
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
];

  let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "What's app man" },
];


let postData = [
  { id: 1, message: "Hey, why nobody love me?" },
  { id: 1, message: "It's our new program! Hey!" },
];


ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postData={postData} />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

