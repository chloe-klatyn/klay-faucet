import Header from './components/Header'
import Footer from './components/Footer'
import AddressInput from './components/AddressInput'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <AddressInput />
      <Footer />
    </div>
  )
}

export default App
