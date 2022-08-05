/**
 * generateColourArray creates red, green, and blue colour components
 * breaking each into 32 steps to produce an array of 32,768 discrete colours
 *
 * @returns {Array} array of 32,768 discrete colours
 */
export const generateColourArray = () => {
  let coloursArr = []

  for (let i = 0; i < 32; i++) {
    const valRed = (i + 1) * 8
    for (let j = 0; j < 32; j++) {
      const valGreen = (j + 1) * 8
      for (let k = 0; k < 32; k++) {
        const valBlue = (k + 1) * 8

        coloursArr.push({
          r: valRed,
          g: valGreen,
          b: valBlue,
        })
      }
    }
  }

  console.log(coloursArr.length)

  return coloursArr
}
