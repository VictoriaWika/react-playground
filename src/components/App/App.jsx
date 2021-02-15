import './App.css'
import AppHeader from '../AppHeader'
import Card from '../Card'
import React from 'react'

export default function App() {
  return (
    <>
      <AppHeader title="Playground for React" />
      <Card
        question="What does React do?"
        answer="It helps us creating components"
      />
      <Card
        question="What is JSX?"
        answer="It is pseudo HTML to create elements in JS"
      />
      <Card question="Can I create my own HTMLElements?" answer="Kind of" />
    </>
  )
}
