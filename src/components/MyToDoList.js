import React from 'react'
import {Items} from './RenderTasks/items'
import {TaskAdd} from './TaskAdd/TaskAdd'
import {Buttons} from './Buttons/buttons'
import styles from './MyToDoList.module.scss'
import classnames from 'classnames/bind'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from '../reducers/index';

const cx = classnames.bind(styles);
const store = createStore(rootReducer)

class MyToDoList extends React.Component {
    render() {
        return (
          <Provider store={store}>
            <div className={cx("container")}>
                <Buttons/>
                <TaskAdd/>
                <Items/>
            </div>
          </Provider>
        )
    }
}
export default MyToDoList