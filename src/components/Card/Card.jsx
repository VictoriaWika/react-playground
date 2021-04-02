import React from 'react'
import './Card.css'

export default function Card({ question, answer, backgroundcolor, radius }) {
  return (
    <>
      <section
        className="Card"
        style={{
          backgroundColor: backgroundcolor,
          borderRadius: radius + 'px',
        }}
      >
        <h2>{question}</h2>
        <p>{answer}</p>
      </section>
    </>
  )
}
