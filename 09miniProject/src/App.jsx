import PlayerProfile from './Components/PlayerProfile'
import Setup from './Components/Setup'
import './App.css'
import PlayerContextProvider from './Context/PlayerContextProvider'

function App() {

  return (
    <PlayerContextProvider>
      <h1>This is for player Details</h1>
      <Setup />
      <PlayerProfile />
    </PlayerContextProvider>
  )
}

export default App
