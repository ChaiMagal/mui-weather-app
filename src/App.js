import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import FavoriteScreen from './screens/FavoriteScreen'
import { useSelector } from 'react-redux'

import nightBack from './images/night-back.jpg'
import dayBack from './images/day-back.jpg'

const App = () => {
  const themeReducer = useSelector(({ themeReducer }) => themeReducer)

  const style = themeReducer.theme
    ? {
        background: `url(${dayBack}) no-repeat`,
        backgroundSize: 'cover',
        backgroundColor: '#2197c9',
        minHeight: '100vh',
        color: 'black',
      }
    : {
        background: `url(${nightBack}) no-repeat`,
        backgroundSize: 'cover',
        backgroundColor: '#1c2949',
        minHeight: '100vh',
        color: 'white',
      }
  return (
    <Router>
      <Header />
      <div style={style}>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/favorite' component={FavoriteScreen} />
      </div>
      <Footer />
    </Router>
  )
}

export default App
