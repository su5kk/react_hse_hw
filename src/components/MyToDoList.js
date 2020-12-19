import React from 'react'
import styles from './MyToDoList.module.scss'
import classnames from 'classnames/bind'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from '../reducers/index';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Nav} from './Navigation/Nav'
import {Buttons} from './Buttons/buttons'
import {Projects} from './Project/Projects'
import HomeComponent from './Home/Home'
import About from './About/About'
import AddTasksToProject from './Project/AddTasksToProject'
import { Project } from './Project/Project'

const cx = classnames.bind(styles);
const store = createStore(rootReducer)

class MyToDoList extends React.Component {
    render() {
        return (
          <BrowserRouter>
            <Provider store={store}>
              <Buttons/>
              <Nav />
              <Switch>
                <Route exact path="/" component = {HomeComponent} />
                <Route path="/about" component = {About} />
                <Route exact path="/projects" component = {Projects} />
                <Route path="/projects/:projectID" component = {AddTasksToProject} />

                <Redirect to="/" />
              </Switch>
            </Provider>
          </BrowserRouter>
        )
    }
}
export default MyToDoList