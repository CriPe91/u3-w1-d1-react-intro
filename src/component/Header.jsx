const Header = (props) => (
  <>
    <h1>{props.title}</h1>
    <img src={props.src} alt={props.title} />
  </>
);

export default Header;
