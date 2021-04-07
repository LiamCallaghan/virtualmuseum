import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Museum from './component/museum/Museum'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Museum}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
