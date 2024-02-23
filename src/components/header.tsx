import "../index.css"
import logo from "../assets/logo.png"
function Header() {

  return (
    <>
      <div className="header">
        <img src={logo} alt="website-logo  "  className="logo"/>
        <div className="menu-btn">Contact</div>
      </div>
    </>
  )
}

export default Header  