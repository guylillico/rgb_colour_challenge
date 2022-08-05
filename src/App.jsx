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
        <ColourCanvas
          desc="Version 3: Algorithm applied to rearrange the colours array in maximum minimum form, resulting in a 'bars' effect"
          effect="bars"
        />
        <ColourCanvas
          desc="Version 4: Sorting of the colours array by the sum of r, g, and b values to produce a 'dripping' effect"
          effect="drippy"
        />
      </div>
    </div>
  )
}

export default App
