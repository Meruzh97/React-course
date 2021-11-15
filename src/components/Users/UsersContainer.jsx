import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, preloader } from '../../redux/users-reducer';
import Users from './Users'
import * as axios from 'axios';
import React from 'react';
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
      return <> 
              {this.props.isFetching
              ? <Preloader />
              : null}
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

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}



export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  preloader
})(UsersContainer);

