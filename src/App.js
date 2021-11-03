import "./App.css";
import React from "react";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Friends from "./components/Friends/Friends";
import { BrowserRouter, Route, Link } from "react-router-dom";


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar friendsData={props.state.navbar.friends} />
        <div className="content">
          <Route path='/profile' render={ () => <Profile store={props.store}/>} />
          {/* <Route path='/dialogs' render={ () => <Dialogs dispatch={props.dispatch} state={props.state} dialogsData={props.state.dialogsPage.dialogs} messagesData={props.state.dialogsPage.messages}/>} /> */}
          <Route path='/dialogs' render={ () => <DialogsContainer store={props.store}/>} />
          <Route path='/settings' render={ () => <Settings />} />
          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />} />
          {/* <Route path='/friends' render={ () => <Friends friendsData={props.state.navbar.friends} />} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;