import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    render() {
        return (
            <h1>Hello World Meteor</h1>    
        )
    }
}

Meteor.startup(function() {
    ReactDOM.render(<App/>, document.getElementById("render-target"))
})