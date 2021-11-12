import React from "react";

const Preloader = (props) => {
    return <div>
            {props.isFetching
            ? <img src={props.preloader} />
            : null}
        </div>
}

export default Preloader;

// return <div style={{background: 'white'}}>
// {props.isFetching
// ? <img src={props.preloader} />
// : null}
// </div>    - - - и так можно