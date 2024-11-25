const Main = (props) => (
  <>
    <img src={props.src} alt={props.title} />
    <h1>{props.text}</h1>
    <p>{props.description}</p>
  </>
);
export default Main;
