import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'
import ReagistrationForm from './RegistrationForm'
import SignIn from './SignIn'
import RegistrationForm from './RegistrationForm'

function App () {
  return (
    <Router>
      <Switch>
        <Route path="/registration">
          <RegistrationForm/>
        </Route>

        <Route path="/signIn">
          <SignIn/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
