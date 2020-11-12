import React from 'react'
import MyToDoList from './components/MyToDoList'

class App extends React.Component {
    render() {
        return (
            <div className="rootApp">
                <MyToDoList/>
            </div>
        )
    }
}