import React from 'react'
import { cities } from '../../capstone.json'
import AppHeader from '../AppHeader'
import Card from '../Card'

export default function App() {
  return (
    <>
      <AppHeader title="Playground for React" />

      {cities.map(({ name, id }) => (
        <ul key={id}> name={name}</ul>
      ))}

      <Card
        question="What does React do?"
        answer="It helps us create components"
        backgroundcolor="#f2aaa5"
        radius="50"
      />
      <Card
        question="What is JSX?"
        answer="It is pseudo HTML to create elements in JS"
        backgroundcolor="#90dff5"
        radius="10"
      />
      <Card
        question="Can I create my own HTMLElements?"
        answer="Kind of"
        backgroundcolor="#ecc2fc"
        radius="25"
      />
    </>
  )
}
