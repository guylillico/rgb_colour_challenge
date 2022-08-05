/**
 * generateColourArray is a function that creates red, green, and blue colour components
 * breaking each into 32 steps to produce an array of 32,768 discrete colours
 *
 * @returns array of 32,768 discrete colours
 */
export const generateColourArray = () => {
  let coloursArr = []
  let colourSteps = 32

  for (let i = 0; i < colourSteps; i++) {
    const valRed = (i + 1) * 8
    for (let j = 0; j < colourSteps; j++) {
      const valGreen = (j + 1) * 8
      for (let k = 0; k < colourSteps; k++) {
        const valBlue = (k + 1) * 8

        coloursArr.push({
          r: valRed,
          g: valGreen,
          b: valBlue,
        })
      }
    }
  }

  return coloursArr
}

/**
 * shuffleColours is a function that walks the array in the reverse order and swaps each element with a
 * random one before it (Fisher–Yates shuffle alogrithm)
 *
 * @param {array} array - array of 32,768 discrete colours
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

/**
 * maxMinColours is a function that rearranges the array alternately i.e first element should be maximum value,
 * second minimum value, third second max, fourth second min and so on.
 *
 * @param {array} array - array of 32,768 discrete colours
 * @param {number} n - length of the array
 *
 * @returns rearranged array
 */
export const maxMinColours = (array, n) => {
  // Auxiliary array to hold modified array
  let temp = new Array(n)

  // Indexes of smallest and largest elements
  // from remaining array.
  let small = 0
  let large = n - 1

  // To indicate whether we need to copy remaining
  // largest or remaining smallest at next position
  let flag = true

  // Store result in temp[]
  for (let i = 0; i < n; i++) {
    if (flag) {
      temp[i] = array[large--]
    } else {
      temp[i] = array[small++]
    }

    flag = !flag
  }

  // Copy temp[] to arr[]
  for (let i = 0; i < n; i++) {
    array[i] = temp[i]
  }

  return array
}

/**
 * drippyColours is a function that simply sorts the colours array by the sum of the r, g and b values
 * which produces a visual 'dripping' effect
 *
 * @param {array} array - array of 32,768 discrete colours
 *
 * @returns rearranged array
 */
export const drippyColours = (array) => {
  return array.sort((a, b) => a.r + a.g + a.b - (b.r + b.g + b.b))
}
