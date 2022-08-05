import React from "react"
import { ColourCanvasWrapper, ColourCanvasDesc } from "./ColourCanvas.styled"
import { generateColourArray, shuffleColours } from "../../util/colour"

/**
 * ColourCanvas is a component that displays a canvas with 32,768 dicrete colours
 *
 * @param {String} desc - description appearing above the canvas element
 * @param {String} effect - optional effect to describe the appearance of the canvas
 *
 * @returns canvas element showing all 32,768 discrete colours
 */
const ColourCanvas = ({ desc, effect }) => {
  const canvasWidth = 256
  const canvasHeight = 128
  const colourCanvasRef = React.useRef(null)

  React.useEffect(() => {
    const canvasElement = colourCanvasRef.current
    const context = canvasElement.getContext("2d")

    canvasElement.width = canvasWidth
    canvasElement.height = canvasHeight

    let coloursArray = generateColourArray()
    if (effect === "static") shuffleColours(coloursArray)

    // Draw colours on the canvas
    let i = 0
    for (let x = 0; x < canvasWidth; x++) {
      for (let y = 0; y < canvasHeight; y++) {
        context.fillStyle = `rgb(${coloursArray[i].r}, ${coloursArray[i].g}, ${coloursArray[i].b})`
        context.fillRect(x, y, 1, 1)
        i++
      }
    }
  }, [])

  return (
    <ColourCanvasWrapper>
      {desc && <ColourCanvasDesc>{desc}</ColourCanvasDesc>}
      <canvas ref={colourCanvasRef} />
    </ColourCanvasWrapper>
  )
}

export default ColourCanvas
