import React from 'react';
import {mount} from 'react-mounter';
import {AppContainer} from './containers/AppContainer.jsx';

import Home from './pages/Home.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

FlowRouter.route('/', {
    name: 'home',
    action () {
        mount (AppContainer, {
            content: (<Home />)
        })
        
    }
});

// FlowRouter.route('/test', {
//     name: 'test',
//     action () {
//         mount (AppContainer, {
//             content: (<NotFoundPage />)
//         })
//     }
// });

FlowRouter.notFound = {
    action () {
        mount (AppContainer, {
            content: (<NotFoundPage />)
        })
    }
}