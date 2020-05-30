import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'

import Details from './components/details'
import Results from './components/results'


const Position = document.getElementById('root')

const Root = (
  <BrowserRouter>
    <Switch>
      <Route path='/results' component={Results} />
      <Route path='/details/:itemId' component={Details}/>
      <Redirect from='/' to='/results'/>
    </Switch>
  </BrowserRouter>
)


render(Root,Position)