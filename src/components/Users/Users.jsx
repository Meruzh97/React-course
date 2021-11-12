import React from "react";
import userPhoto from '../../assets/images/1077114.png'
import classes from './Users.module.css'

const Users = (props) => {

let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

    return  <div>
    <br />
    <div>
        {pages.map(p => {
            return <span onClick={()=>{props.onPageChanged(p)}} className={props.currentPage === p && classes.selectedPage}>{p}</span>
        })}
    </div>
    <br />
    {
        props.users.map(u => <div key={u.id}>
            <div><img src={u.photos.small != null ? u.photos.small : userPhoto} /></div>
            <div>{u.name}</div>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
            <div>{u.status}</div>
            <br />
            <div>{u.followed
                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                : <button onClick={() => { props.follow(u.id) }}>Follow</button>
            }</div>
            <br />
            <br />
            <br />
            <br />
        </div>)
    }
</div>
}

export default Users;