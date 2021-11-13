import React from "react";
import loader from '../../../assets/images/loader.gif';


const Preloader = (props) => {
    return <div>
            <img src={loader} />
        </div>
}

export default Preloader;

// return <div style={{background: 'white'}}>
// {props.isFetching
// ? <img src={props.preloader} />
// : null}
// </div>    - - - и так можно

// return <div>
// {props.isFetching
// ? <img src={props.preloader} />
// : null}
// </div>

