import AppHeader from './components/AppHeader'
import Card from './components/Card'
import ReactDOM from 'react-dom'
import React from 'react'

ReactDOM.render(
  <AppHeader title="Hello World" />,
  <Card question="Who" answer="me!" />,
  document.querySelector('#root')
)
