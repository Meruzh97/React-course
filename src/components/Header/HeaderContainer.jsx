import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthData } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component{

    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then(r => {
            this.props.setAuthData(r.data.data)
        })
    }
    render(){

        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {return {
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    }
}

export default connect(mapStateToProps, {
    setAuthData
})(HeaderContainer);
