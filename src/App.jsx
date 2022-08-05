import "./App.css"
import ColourCanvas from "./components/ColourCanvas"

const App = () => {
  return (
    <div className="App">
      <ColourCanvas width={256} height={128} />
    </div>
  )
}

export default App
