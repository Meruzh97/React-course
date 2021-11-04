import React from "react";
import { connect } from "react-redux";
import {updateNewMessageTextActionCreator, addMessageActionCreator} from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs.jsx";

// const DialogsContainer = (props) => {

//   let state = props.store.getState();
//   let dialogsData = state.dialogsPage.dialogs;
//   let messagesData = state.dialogsPage.messages;
//   let newMessageText = state.dialogsPage.newMessageText;

//   let onMessageChange = (e) => {
//     let text = e.target.value
//     props.store.dispatch(updateNewMessageTextActionCreator(text))
//   }

//   let addMessage = () => {
//     props.store.dispatch(addMessageActionCreator())
//   }

//   return (
//     <Dialogs dialogsData={dialogsData} messagesData={messagesData} newMessageText={newMessageText} addMessage={addMessage} updateNewMessageText={onMessageChange} />
//   );
// };

const mapToStateProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapToDispatchProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text))
    },
    addMessage: () => {
      dispatch(addMessageActionCreator())
    }
  }
}

const DialogsContainer = connect(mapToStateProps, mapToDispatchProps)(Dialogs);

export default DialogsContainer;