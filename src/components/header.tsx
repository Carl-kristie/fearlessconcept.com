import "../index.css"
import logo from "../assets/flogo.png"
function Header() {

  return (
    <>
      <div className="header">
        <img src={logo} alt="website-logo  "  className="logo"/>
        <ul className="nav-container">
            <li className="nav-items">ABOUT</li>
            <li className="nav-items">SERVICES</li>
            <li className="nav-items">PROJECTS</li>
            <li className="nav-items">CONTACT</li>
        </ul>
      </div>
    </>
  )
}

export default Header  