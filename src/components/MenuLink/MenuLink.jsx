import "./MenuLink.css";
import PropTypes from "prop-types";

function MenuLink(props) {
  return (
    <>
      <a href={props.url} className="link">
        {props.linkname}
      </a>
    </>
  );
}

MenuLink.propTypes = {
  url: PropTypes.string.isRequired,
  linkname: PropTypes.string.isRequired,
};

export default MenuLink;
