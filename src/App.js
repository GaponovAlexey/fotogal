import { Route, Routes } from 'react-router'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path='/' element={<Main/>} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
