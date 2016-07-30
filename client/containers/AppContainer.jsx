import React, {Component} from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export const AppContainer = ({content}) => (
    <div className="app-container">
        {content}
    </div>
)