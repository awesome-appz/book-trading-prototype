// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

// import './main.html';

import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom'
import { renderRoutes } from './routes.js'

Meteor.startup( () => {
    render(renderRoutes(), document.getElementById("render-target"))
})