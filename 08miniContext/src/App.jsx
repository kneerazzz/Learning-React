import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {

  return (
    <UserContextProvider>
      <h1>React with Neeraj</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
