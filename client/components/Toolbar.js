import React, {Component} from 'react'

export default class Toolbar extends Component {
    
    render() {
        return (
            <div className="ui secondary menu">
                <a className="active item">
                  Home
                </a>
                <div className="right menu">
                  <a className="ui item">
                   Login
                  </a>
                </div>
            </div>
        );
    }
}
