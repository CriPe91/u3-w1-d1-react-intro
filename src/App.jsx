import "./App.css";
import ButtonComponent from "./component/ButtonComponent";
import Form from "./component/Form";
import Heading from "./component/Heading";
import Main from "./component/Main";

function App() {
  return (
    <div className="App">
      <Heading
        titolo={{ fontSize: "40px", color: "#002645", textShadow: "20px 20px 20px #af948d", fontFamily: "arial", fontWeigth: "bold" }}
        title="ROLEX"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfRvWqWz_uYmWr1x8G_vZgNUaveW_pAUK62A&s"
        immagine={{ marginRight: "10px" }}
      />

      <Main
        title="ROLEX"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPq7JtTtkCfOogZxorgp9CtvVXUuLfHm3OrA&s"
        text="Scopri la collezione Rolex"
        description="La collezione Rolex offre un’ampia gamma di modelli prestigiosi e ad alta precisione, da quelli Classici a quelli Professionali, in grado di rispondere alle esigenze di ogni polso."
        paragraph={{ fontSize: "35px", color: "#40444e", spaceLetter: "1px", padding: "20px", textShadow: "10px 10px 10px grey" }}
        titolo={{ color: "#40444e", textShadow: "20px 20px 20px #af948d" }}
      />

      <Form style={{ color: "#135b3a", padding: "5px" }} text="Diventa Cliente" txt="Inserisci i tuoi dati" />

      <br />

      <ButtonComponent
        btnText="ACCATTATEVELLLL"
        style={{ backgroundColor: "#135b3a", color: "white", border: "solid 2px black", borderRadius: "2rem", padding: "20px", marginTop: "1.5rem" }}
      />
    </div>
  );
}

export default App;
