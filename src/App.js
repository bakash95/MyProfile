import React, { PureComponent } from 'react';
import './App.css'
import MenuBar from './components/menubar/Menubar'
import Projects from './pages/projects/Projects'
import {WorkHistory} from './pages/work/workHistory'
import Home from './pages/Home/Home'
import LoadingIndicator from './components/spinner/spinner'
import ExternalIcons from './components/menubar/externalIcons'

import { Route, MemoryRouter as Router, useLocation, Switch, useHistory } from 'react-router-dom';
import Resume from './pages/resume/Resume'

import ChatWindow from './components/chat/ChatWindow'

import ReactGA from 'react-ga'

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showSpinner: false,
    }
  }
  componentDidMount() {
    if (process.env.NODE_ENV !== 'development') {
      ReactGA.initialize('UA-160375951-1')
    }
  }
  toggleSpinner = () => {
    this.setState((props) => { return { showSpinner: !props.showSpinner } });
  }
  render() {

    let pageActions = {
      toggleDrawer: this.toggleDrawer,
      toggleSpinner: this.toggleSpinner
    }

    return (
      this.state.showSpinner ?
        <LoadingIndicator />
        :
        <Router>
          <div className="app" style={{ "height": "100%", padding: "0% 70px" }}>
            <MenuBar pageActions={pageActions} />
            <Container />
            <footer className="footer">
              <div className="footer--icons">
                <ExternalIcons />
              </div>
            </footer>
            <ChatWindow />
            <RegisterHistory />
          </div>
        </Router >
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
          <Route path="/workHistory"
          exact
          component={WorkHistory} />
      </Route>
    </Switch>
  )
}

export default App;
