import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './features/auth/Login'
import DashBoard from './features/dashboard/DashBoard'
import store from './app/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/dashBoard" component={DashBoard}></Route>
            <Redirect to="/login"></Redirect>
          </Switch>
        </BrowserRouter>
      </Provider>
    </Fragment>
  )
}

export default App
