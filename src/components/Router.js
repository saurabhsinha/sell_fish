import React from 'react'
import StorePicker from './StorePicker'
import App from './App'
import NotFound from './NotFound'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker}></Route>
            <Route path="/store/:storeId" component={App}></Route>
            <Route path="" component={NotFound}></Route>
        </Switch>
    </BrowserRouter>
)

export default Router;