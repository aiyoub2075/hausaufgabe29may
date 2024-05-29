import { useState } from "react"
import './App.css';

function App() {

  const[buttonColor, setButtonColor] = useState("rot")
  const[buttonDesable, setButtonDesabled] = useState(false)
  const nextColor = buttonColor === "rot" ? "blau" : "rot"
  const nextDisabled = buttonDesable === false ? true : false
  function farbeWechseln() {
    setButtonColor(nextColor)
  }
  function chechBoxFunktion(){
    setButtonColor("grau")
    setButtonDesabled(nextDisabled)

  }




  return (
    <div className="App">
      <button
        className = {buttonColor}
        onClick={farbeWechseln}
        disabled={buttonDesable}
        >Aiyoub hat die farbe zu {nextColor} gewechselt
      </button>
      <br></br>
      <input id = "checkbox" onChange={chechBoxFunktion}  type="checkbox"></input>
      <label htmlFor="checkbox">Disable Button</label>
    </div>
  );
}

export default App;
