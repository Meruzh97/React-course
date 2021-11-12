import React from "react";
import * as axios from 'axios';
import userPhoto from '../../assets/images/1077114.png'
import classes from './Users.module.css'

class Users extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(r => {
                this.props.setUsers(r.data.items)
                this.props.setTotalUsersCount(r.data.totalCount)
        })
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(r => {
            this.props.setUsers(r.data.items)
        })
    }

    render(){

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }

        return <div>
        <br />
        <div>
            {pages.map(p => {
                return <span onClick={()=>{this.onPageChanged(p)}} className={this.props.currentPage === p && classes.selectedPage}>{p}</span>
            })}
        </div>
        <br />
        {
            this.props.users.map(u => <div key={u.id}>
                <div><img src={u.photos.small != null ? u.photos.small : userPhoto} /></div>
                <div>{u.name}</div>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
                <div>{u.status}</div>
                <br />
                <div>{u.followed
                    ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                    : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
                }</div>
                <br />
                <br />
                <br />
                <br />
            </div>)
        }
    </div>
    }
}

export default Users;
