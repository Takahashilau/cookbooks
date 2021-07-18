import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

import './assets/styles/reset.css'
import 'animate.css'

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App></App>
        </Provider>
    </Router>,
    document.querySelector('#root')
)