import MenuLink from "../MenuLink/MenuLink";
import "./HeaderContent.css";
function HeaderContent() {
  return (
    <>
      <div id="nav">
        <a href="">
          <img src="/src/assets/react.svg" alt="" />
        </a>
        <div>
          <MenuLink linkname="home" url="#home" />
          <MenuLink linkname="about" url="#about" />
          <MenuLink linkname="contact" url="#contact" />
          <MenuLink linkname="Login" url="#login" />
        </div>
      </div>
    </>
  );
}

export default HeaderContent;
