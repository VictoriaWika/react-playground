import './Card.css'
import React from 'react'

export default function Card({ question, answer }) {
  return (
    <>
      <section className="Card">
        <h2>{question}</h2>
        <p>{answer}</p>
      </section>
    </>
  )
}
