import React, { Fragment } from 'react'
import { BrowserRouter, Switch ,Route, Redirect} from 'react-router-dom'
import Login from "./components/Login"
import DashBoard from './components/DashBoard'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/dashBoard" component={DashBoard}></Route>
          <Redirect to="/login"></Redirect>
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
