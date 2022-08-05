import React from "react"
import { generateColourArray } from "../util/colour"

const ColourCanvas = ({ width, height }) => {
  const colourCanvasRef = React.useRef(null)

  React.useEffect(() => {
    const canvasElement = colourCanvasRef.current
    const context = canvasElement.getContext("2d")

    canvasElement.width = width
    canvasElement.height = height

    let coloursArray = generateColourArray()

    // Draw colours on the canvas
    let i = 0
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        context.fillStyle = `rgb(${coloursArray[i].r}, ${coloursArray[i].g}, ${coloursArray[i].b})`
        context.fillRect(x, y, 1, 1)
        i++
      }
    }
  }, [])

  return <canvas ref={colourCanvasRef} />
}

export default ColourCanvas
