import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsData = props.dialogsData
  let messagesData = props.messagesData

  let dialogsDataElements = dialogsData.map(d => (
    <DialogsItem name={d.name} id={d.id} />
  ));
  let messagesDataElements = messagesData.map(m => (
    <Message message={m.message} />
  ));
  return (
    <div className={classes.wrapper}>
      <div className={classes.dialogs}>
        <ul className={classes.dialogs__items}>
          {/* 3) А ТЕПЕРЬ МЫ С ПОМОЩЬЮ МЕТОДА map ВЫВОДИМ МАССИВ ДАННЫХ ПООЧЕРЕДНО  */}
          {dialogsDataElements}
          {/* 2) ПОТОМ МЫ СОЗДАЛИ МАССИВ ОБЪЕКТОВ И ИЗ НЕГО БРАЛИ ДАННЫЕ В РУЧНУЮ ТАК: */}
          {/* <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
          <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} /> */}
          {/* 1) В НАЧАЛЕ БЫЛО ТАК, У НАС ЕСТЬ КОМПОНЕНТА И ЧЕЕЗ ПРОПСЫ ПЕРЕДАЕМ ИНФУ ИМЯ И ID: */}
          {/* <DialogsItem name="Sasha" id="3" />
              <DialogsItem name="Sveta" id="4" />*/}
        </ul>
      </div>
      <ul className={classes.messages}>{messagesDataElements}</ul>
    </div>
  );
};

export default Dialogs;
