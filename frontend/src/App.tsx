import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'
import AddressInput from './components/AddressInput'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div>
        <Intro />
        <AddressInput />
      </div>
      <Footer />
    </div>
  )
}

export default App
