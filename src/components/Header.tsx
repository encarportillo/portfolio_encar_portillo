import Navbar from './Navbar'
import headerImg from '../images/Header.jpg'

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full overflow-hidden shadow-sm">
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center blur-md"
        style={{ backgroundImage: `url(${headerImg})` }}
      />
      <div className="absolute inset-0 bg-gray-100/70" />
      <div className="relative z-10">
        <Navbar />
      </div>
    </header>
  )
}

export default Header
