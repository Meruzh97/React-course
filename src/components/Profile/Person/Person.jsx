import React from "react";
import classes from "./Person.module.css";
import Preloader from '../../common/preloader/Preloader';


const Person = (props) => {

  if(!props.profile){
    return (
      <Preloader/>
    )
  }
  return (
    <div className={classes.person}>
      {props.profile.photos.small != null
      ? <img src={props.profile.photos.small}/>
      : <img src="http://placehold.it/120x120" />}
      <div className={classes.person__information}>
        <p className={classes.person__name}>Davy Jones</p>
        <ul className={classes.person__text}>
          <li>Date of Birth: 2 january</li>
          <li>City: Moscow</li>
          <li>Education: BSU'11</li>
        </ul>
      </div>
    </div>
  );
};

export default Person;
