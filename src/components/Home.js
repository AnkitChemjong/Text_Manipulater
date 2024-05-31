import React from 'react'

export default function Home() {
  const Style={
       position: 'relative',
       left:'25%',
       top:'200px',
      }
  return (
    <div style={Style}>
        <h1>Welcome to Text Manipulater;</h1>
        <p style={{position:'relative', left:'90px'
        }}>Go to Text Transform to Transform Your text;</p>
    </div>
  )
}
