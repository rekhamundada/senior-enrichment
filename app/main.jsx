'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import College from './components/College';

render(
  <Provider store={store}>
    <College />
  </Provider>,
  document.getElementById('main')
)
