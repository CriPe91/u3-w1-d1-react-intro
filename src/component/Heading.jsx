const Heading = (props) => (
  <>
    <h1 style={props.titolo}>{props.title}</h1>
    <img style={props.immagine} src={props.src} alt={props.title} />
  </>
);

export default Heading;
