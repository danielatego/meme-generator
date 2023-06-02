import trollFace from "./images/trollFace.svg";

function Header() {
    return (
      <nav className="nav">
        <img className="nav_image" src={trollFace} alt="" />
        <span className="nav_title">
          Meme Generator
        </span>
        <span className="nav_subtitle">
          React Course - Project 3
        </span>
      </nav>
    );
  }
  
  export default Header;