import "../index.css"
import logo from "../assets/logo.png"
function Header() {

  return (
    <>
      <header className="header">
        <img src={logo} alt="website-logo"  className="logo"/>
        <div className="menu-btn"><a href="#contact">Contact</a></div>
      </header>
    </>
  )
}

export default Header  