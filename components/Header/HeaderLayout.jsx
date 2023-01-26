import MainNavbar from "./MainNavbar"
import Navbar from "./Navbar"
import './HeaderLayout.scss'
const HeaderLayout = () => {
  return (
    <header className="headerLayout">
    <MainNavbar />
    <Navbar />
    </header>
  )
}

export default HeaderLayout