import React from "react";
import * as axios from 'axios';
import userPhoto from '../../assets/images/1077114.png'

class Users extends React.Component {

    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(r => {
                this.props.setUsers(r.data.items)
        })
    }

    render(){
        return <div>
        <br />
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
