import React, { Component } from 'react';
import './App.css'
import MenuBar from './components/menubar/Menubar'
import SideDrawer from './components/sidedrawer/sideDrawer'
import BackDrop from './components/backdrop/backDrop'
import Projects from './pages/projects/Projects'
import Home from './pages/Home/Home'
import LoadingIndicator from './components/spinner/spinner'
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

import { Route, MemoryRouter as Router, useLocation, Switch, useHistory } from 'react-router-dom';
import Resume from './pages/resume/Resume'

import ChatWindow from './components/chat/ChatWindow'

import ReactGA from 'react-ga'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawOpen: false,
      showSpinner: false,
    }
  }
  componentDidMount() {
    ReactGA.initialize('UA-160375951-1')
  }
  toggleDrawer = () => {
    this.setState((props) => { return { drawOpen: !props.drawOpen } });
  }
  toggleSpinner = () => {
    this.setState((props) => { return { showSpinner: !props.showSpinner } });
  }
  render() {
    let backDrop = null;
    if (this.state.drawOpen) {
      backDrop = <BackDrop toggleDrawer={this.toggleDrawer} />
    }

    let pageActions = {
      toggleDrawer: this.toggleDrawer,
      toggleSpinner: this.toggleSpinner
    }

    return (
      this.state.showSpinner ?
        <LoadingIndicator />
        :
        <Router>
          <div className="app" style={{ "height": "100%" }}>
            <MenuBar pageActions={pageActions} />
            <SideDrawer pageActions={pageActions} openOrNot={this.state.drawOpen} />
            {backDrop}
            <Container />
            <ChatWindow />
            <RegisterHistory />
          </div>
        </Router>
    );
  }
}

const RegisterHistory = () => {
  let history = useHistory();
  history.listen((location) => {
    let path = location.pathname;
    ReactGA.set({ location: path })
    ReactGA.pageview(path)
  })
  return <></>
}

const Container = () => {
  let location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="page"
        timeout={100}
        unmountOnExit
      >
        <Switch location={location}>
          <Route path="/"
            component={App} >
            <Route path="/"
              exact
              component={Home} />
            <Route path="/resume"
              exact
              component={Resume} />
            <Route path="/projects"
              exact
              component={Projects} />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default App;
