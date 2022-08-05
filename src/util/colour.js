/**
 * generateColourArray is a function that creates red, green, and blue colour components
 * breaking each into 32 steps to produce an array of 32,768 discrete colours
 *
 * @returns array of 32,768 discrete colours
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

/**
 * shuffleColours is a function that walks the array in the reverse order and swaps each element with a
 * random one before it (Fisher–Yates shuffle alogrithm)
 *
 * @param {Array} array - array of 32,768 discrete colours
 *
 * @returns shuffled array
 */
export const shuffleColours = (array) => {
  let currIndex = array.length
  let placeholder = 0
  let randomIndex = 0

  // While we have elements to shuffle
  while (currIndex) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currIndex--)

    // And swap it with the current element.
    placeholder = array[currIndex]
    array[currIndex] = array[randomIndex]
    array[randomIndex] = placeholder
  }

  return array
}
