import React, {Component} from 'react'
import Toolbar from '../components/Toolbar'
import reactCSS from 'reactcss'
//import {Grid,Row,Col} from 'react-flexbox-grid' not working!

export default class Home extends Component {
    render() {
        return (
            <div style={styles.container}>
                    <Toolbar/>
                    <h1>home</h1>
            </div>
        )
    }
}

const styles = reactCSS({
    'default' : {
        container: {
            background : '#D6CBCB',
            height: '100%'
        }
    }
})