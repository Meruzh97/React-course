import React from "react";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {updateNewMessageTextActionCreator, addMessageActionCreator} from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs.jsx";

const DialogsContainer = (props) => {

  let state = props.store.getState();
  let dialogsData = state.dialogsPage.dialogs;
  let messagesData = state.dialogsPage.messages;
  let newMessageText = state.dialogsPage.newMessageText;

  let dialogsDataElements = dialogsData.map(d => (
    <DialogsItem name={d.name} id={d.id} />
  ));
  let messagesDataElements = messagesData.map(m => (
    <Message message={m.message} />
  ));

  let onMessageChange = (e) => {
    let text = e.target.value
    props.store.dispatch(updateNewMessageTextActionCreator(text))
  }

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator())
  }

  return (
    <Dialogs newMessageText={newMessageText} addMessage={addMessage} updateNewMessageText={onMessageChange} dialogsDataElements={dialogsDataElements} messagesDataElements={messagesDataElements} />
  );
};

export default DialogsContainer;