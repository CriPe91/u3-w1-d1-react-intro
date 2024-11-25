const Form = (props) => (
  <>
    <div>
      <label style={props.style}>{props.text}</label>
    </div>
    <input type={props.type} placeholder={props.txt} />
  </>
);
export default Form;
