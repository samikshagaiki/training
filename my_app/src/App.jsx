import Button from './components/Button.jsx'

function App() {
  const name = "Samiksha"
  const isLoggedIn = true
  return(
    <>

      <Button />

      <p>Hello, {name}!</p>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}

    </>
  )
}

export default App
