import React from "react";
import userPhoto from '../../assets/images/1077114.png'
import classes from './Users.module.css'
import {NavLink} from "react-router-dom"
import * as axios from 'axios';



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
            <div>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                </NavLink>
            </div>
            <div>{u.name}</div>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
            <div>{u.status}</div>
            <br />
            <div>{u.followed
                ? <button onClick={() => {
                    
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "09dc7653-b9cf-454d-bad7-3237380a337e"
                        }
                    }).then(r => {
                            if(r.data.resultCode == 0){
                                props.unfollow(u.id);
                            }
                        })
                
                }}>Unfollow</button>
                : <button onClick={() => {

                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "09dc7653-b9cf-454d-bad7-3237380a337e"
                        }
                    }).then(r => {
                            if(r.data.resultCode == 0){
                                props.follow(u.id);
                            }
                        })

                }}>Follow</button>
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