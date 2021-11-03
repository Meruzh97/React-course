import React from "react";
import classes from "./Dialogs.module.css";


const Dialogs = (props) => {

  return (
    <div className={classes.wrapper}>
      <div className={classes.dialogs}>
        <ul className={classes.dialogs__items}>
          {/* 3) А ТЕПЕРЬ МЫ С ПОМОЩЬЮ МЕТОДА map ВЫВОДИМ МАССИВ ДАННЫХ ПООЧЕРЕДНО  */}
          {props.dialogsDataElements}
          {/* 2) ПОТОМ МЫ СОЗДАЛИ МАССИВ ОБЪЕКТОВ И ИЗ НЕГО БРАЛИ ДАННЫЕ В РУЧНУЮ ТАК: */}
          {/* <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
          <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} /> */}
          {/* 1) В НАЧАЛЕ БЫЛО ТАК, У НАС ЕСТЬ КОМПОНЕНТА И ЧЕЕЗ ПРОПСЫ ПЕРЕДАЕМ ИНФУ ИМЯ И ID: */}
          {/* <DialogsItem name="Sasha" id="3" />
              <DialogsItem name="Sveta" id="4" />*/}
        </ul>
      </div>
      <ul className={classes.messages}>{props.messagesDataElements}</ul>
      <div>
      <input value={props.newMessageText} onChange={props.updateNewMessageText} type="text" placeholder="your message..." />
      </div>
      <button onClick={props.addMessage} type='submit'>
        Send
      </button>{" "}
    </div>
  );
};

export default Dialogs;