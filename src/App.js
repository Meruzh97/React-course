import "./App.css";
import React from "react";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import { BrowserRouter, Route, Link } from "react-router-dom";


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="content">
          {/* СНАЧАЛА МЫ ВРУЧНУЮ ПИСАЛИ КОМПОНЕНТУ, А ДРУГУЮ КОМЕНТИЛИ, ЧТОБЫ ОДНА ОТОБРАЖАЛАСЬ */}
          {/* <Dialogs /> */}
          {/* <Profile /> */}
          {/* ЗАТЕМ МЫ ПОЗНАКОМИЛИСЬ С BROWSERROUTER, ЗАЮЗАЛИ РОУТЫ С component, где мы просто передавали компоненту */}
          {/* <Route path='/profile' component={Profile} />
              <Route path='/dialogs' component={Dialogs} />
                           ..................             */}
          {/* теперь мы юзаем render, чтобы иметь возможность юзать пропсы */}
          <Route path='/profile' render={ () => <Profile postData={props.postData} />} />
          <Route path='/dialogs' render={ () => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>} />
          <Route path='/settings' render={ () => <Settings />} />
          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;