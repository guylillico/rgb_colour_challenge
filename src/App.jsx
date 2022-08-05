import ColourCanvas from "./components/ColourCanvas/ColourCanvas"
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>RGB Colour Challenge</h1>
        <ColourCanvas
          desc="Version 1: Standard version without any alteration applied to the colours array"
          effect="standard"
        />
        <ColourCanvas
          desc="Version 2: Algorithm applied to shuffle the colours array, resulting in a 'static' effect"
          effect="static"
        />
      </div>
    </div>
  )
}

export default App
