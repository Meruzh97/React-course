import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header.jsx";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar.jsx";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar friendsData={props.state.navbar.friends} />
        <div className="content">
          <Route path='/profile/:userId?' render={ () => <ProfileContainer/>} />
          <Route path='/dialogs' render={ () => <DialogsContainer store={props.store}/>} />
          <Route path='/settings' render={ () => <Settings />} />
          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />} />
          <Route path='/users' render={ () => <UsersContainer />} />
          {/* <Route path='/friends' render={ () => <Friends friendsData={props.state.navbar.friends} />} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;