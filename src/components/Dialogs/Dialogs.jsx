import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsDataElements = props.dialogsPage.dialogs.map(d => (
    <DialogsItem name={d.name} id={d.id} />
  ));
  let messagesDataElements = props.dialogsPage.messages.map(m => (
    <Message message={m.message} />
  ));

  let onNewMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text)
  }
  let onSendMessageClick = () => {
    props.addMessage()
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.dialogs}>
        <ul className={classes.dialogs__items}>
          {dialogsDataElements}
        </ul>
      </div>
      <ul className={classes.messages}>{messagesDataElements}</ul>
      <div>
      <input value={props.dialogsPage.newMessageText} 
             onChange={onNewMessageChange} type="text" 
             placeholder="your message..." />
      </div>
      <button onClick={onSendMessageClick} type='submit'>
        Send
      </button>{" "}
    </div>
  );
};

export default Dialogs;