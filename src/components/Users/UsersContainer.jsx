import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, preloaderAC } from '../../redux/users-reducer';
import Users from './Users'
import * as axios from 'axios';
import React from 'react';
import preloader from '../../assets/images/preloader.gif';
import Preloader from '../common/preloader/Preloader.jsx';

class UsersContainer extends React.Component {

  componentDidMount(){
      this.props.preloader(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(r => {
              this.props.setUsers(r.data.items)
              this.props.setTotalUsersCount(r.data.totalCount)
              this.props.preloader(false)

      })
  }

  onPageChanged = (p) => {
      this.props.preloader(true)
      this.props.setCurrentPage(p);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(r => {
          this.props.setUsers(r.data.items)
          this.props.preloader(false)
      })
  }


  render(){
      return <> <Preloader isFetching={this.props.isFetching} preloader={preloader} />
              <Users
              totalUsersCount={this.props.totalUsersCount}
              pageSize={this.props.pageSize}
              onPageChanged={this.onPageChanged}
              currentPage={this.props.currentPage}
              users={this.props.users}
              unfollow={this.props.unfollow} 
              follow={this.props.follow} />
              </> 
  }
}

const mapToStateProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
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
    },
    preloader: (isFetching) => {
      dispatch(preloaderAC(isFetching))
    }
  }
}

export default connect(mapToStateProps, mapToDispatchProps)(UsersContainer);

// const UsersContainer = connect(mapToStateProps, mapToDispatchProps)(UsersAPIComponent);
// export default UsersContainer; 