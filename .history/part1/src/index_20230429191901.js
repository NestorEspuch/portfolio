import React from 'react'
import ReactDOM from 'react-dom'

const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
    </div>
    <Footer />
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by
      <a href="nestorespuch.es">Nestor Espuch</a>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))