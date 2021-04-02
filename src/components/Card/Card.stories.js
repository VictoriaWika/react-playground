import React from 'react'
import Card from './Card'

export default {
  title: 'Card',
  component: Card,
}

export const JS = () => (
  <Card
    question="What sucks?"
    answer="Storybook"
    backgroundcolor="#ecc2fc"
    radius="25"
  />
)
