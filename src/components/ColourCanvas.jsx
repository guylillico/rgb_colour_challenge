import React from "react"
import { generateColourArray } from "../util/colour"

const ColourCanvas = ({ width, height }) => {
  const colourCanvasRef = React.useRef(null)

  React.useEffect(() => {
    const canvasElement = colourCanvasRef.current

    canvasElement.width = width
    canvasElement.height = height

    let coloursArray = generateColourArray()
  }, [])

  return <canvas ref={colourCanvasRef} style={{ border: "1px solid #000" }} />
}

export default ColourCanvas
