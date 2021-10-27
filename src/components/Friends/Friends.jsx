import React from "react";
import Friend from "./Friend/Friend"
import classes from "./Friends.module.css"

const Friends = (props) => {
  let friendsData = props.friendsData

  let friendsDataElements = friendsData.map(f => (
    <Friend name={f.name} id={f.id} />
  ));

  return (
    <div>
        <h2 className={classes.header}>Friends</h2>
      <ul className={classes.friendsList}>
      {friendsDataElements}
      </ul>
    </div>
  );
};

export default Friends;
