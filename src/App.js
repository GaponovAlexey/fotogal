import { Route, Routes } from 'react-router'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {
  return (
    <div>
      <Header />
      <div className='main' >
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
