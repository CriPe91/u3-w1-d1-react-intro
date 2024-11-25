import "./App.css";
import ButtonComponent from "./component/ButtonComponent";
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  return (
    <div className="App">
      <Header title="ROLEX" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfRvWqWz_uYmWr1x8G_vZgNUaveW_pAUK62A&s" />

      <Main
        title="ROLEX"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPq7JtTtkCfOogZxorgp9CtvVXUuLfHm3OrA&s"
        text="Scopri la collezione Rolex"
        description="La collezione Rolex offre un’ampia gamma di modelli prestigiosi e ad alta precisione, da quelli Classici a quelli Professionali, in grado di rispondere alle esigenze di ogni polso."
      />

      <ButtonComponent btnText="CLICCA" style={{ backgroundcolor: "paleviolet", color: "black", border: "solid 2px orange" }} />
    </div>
  );
}

export default App;
