import "../index.css"
import logo from "../assets/logo.png"
import { Button } from "./border"



function Header() {

  return (
    <>
      <header className="header">
        <img src={logo} alt="website-logo"  className="logo"/>
        <Button
        borderRadius="2rem"
        className="menu-btn"
      >
       <a href="#contact">Contact</a>
      </Button>
      </header>
    </>
  )
}

export default Header  