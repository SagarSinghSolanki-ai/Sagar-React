
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './componenets/Login'
import Profile from './componenets/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1 className='text-center'>HERE WE AREEEEEE.....</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
