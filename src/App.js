import React from 'react'
import MyToDoList from './components/MyToDoList'
import 'App.css'

class App extends React.Component {
    render() {
        return (
            <div className="rootApp">
                <MyToDoList/>
            </div>
        )
    }
}