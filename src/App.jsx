import "./App.css"
import ColourCanvas from "./components/ColourCanvas"

const App = () => {
  return (
    <div className="App">
      <h1>RGB Colour Challenge</h1>
      <ColourCanvas />
      <ColourCanvas effect="static" />
    </div>
  )
}

export default App
