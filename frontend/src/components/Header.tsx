import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header>
      <div className="flex place-content-between p-3 items-center text-gray-900 bg-gray-100 shadow shadow-md">
        <img src={logo} alt="logo" width="50px" height="50px" />
        <div className="mx-8">Connect Wallet</div>
      </div>
    </header>
  )
}

export default Header
