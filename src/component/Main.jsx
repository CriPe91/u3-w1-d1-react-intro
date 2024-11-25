const Main = (props) => (
  <>
    <img src={props.src} alt={props.title} />
    <h1 style={props.titolo}>{props.text}</h1>
    <p style={props.paragraph}>{props.description}</p>
  </>
);
export default Main;
