import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/users-reducer';
import Users from './Users'
import * as axios from 'axios';
import React from "react";

class UsersContainer extends React.Component {

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
      return <Users
              totalUsersCount={this.props.totalUsersCount}
              pageSize={this.props.pageSize}
              onPageChanged={this.onPageChanged}
              currentPage={this.props.currentPage}
              users={this.props.users}
              unfollow={this.props.unfollow} 
              follow={this.props.follow} /> 
  }
}

const mapToStateProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

const mapToDispatchProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    }
  }
}

export default connect(mapToStateProps, mapToDispatchProps)(UsersContainer);

// const UsersContainer = connect(mapToStateProps, mapToDispatchProps)(UsersAPIComponent);
// export default UsersContainer; 