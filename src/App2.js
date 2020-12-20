import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './features/auth/Login'
import DashBoard from './features/dashboard/DashBoard'
import {
  persistStore
} from 'redux-persist'
import store from './app/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

let persistor = persistStore(store)

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login}></Route>
              <Route path="/dashBoard" component={DashBoard}></Route>
              <Redirect to="/login"></Redirect>
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </Fragment>
  )
}

export default App
