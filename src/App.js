import "./App.css";
import React from "react";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
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
          {/* СНАЧАЛА МЫ ВРУЧНУЮ ПИСАЛИ КОМПОНЕНТУ, А ДРУГУЮ КОМЕНТИЛИ, ЧТОБЫ ОДНА ОТОБРАЖАЛАСЬ */}
          {/* <Dialogs /> */}
          {/* <Profile /> */}
          {/* ЗАТЕМ МЫ ПОЗНАКОМИЛИСЬ С BROWSERROUTER, ЗАЮЗАЛИ РОУТЫ С component, где мы просто передавали компоненту */}
          {/* <Route path='/profile' component={Profile} />
              <Route path='/dialogs' component={Dialogs} />
                           ..................             */}
          {/* теперь мы юзаем render, чтобы иметь возможность юзать пропсы */}
          <Route path='/profile' render={ () => <Profile postData={props.state.profilePage.posts} addPost={props.addPost} />} />
          <Route path='/dialogs' render={ () => <Dialogs dialogsData={props.state.dialogsPage.dialogs} messagesData={props.state.dialogsPage.messages}/>} />
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