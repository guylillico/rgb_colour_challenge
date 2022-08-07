# RGB Colour Challenge

This application produces an image in which each colour occurs exactly once with no repetition and no unused colours.
Colours are made up of three components - red,
green, and blue. Each colour component is broken into 32 steps — 8, 16, 24 .. 256 — resulting in a pallette of 32,768 discrete colours to utilise.

## My approach

After determining that the use of the canvas HTML element would the most efficient method of producing the image, I started off by refreshing my knowledge of the Canvas API and then proceeded to write a function that would return the array of 32,768 discrete colours. I then successfully generated the image by iterating over the array and setting the `fillSyle` and `fillRect` properties for the canvas element.

I then experimented with different effects by looking into different algorithms for rearranging the array of colours. Using a shuffling algorithm known as the [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle), I was able to produce an effect reminding me of old school tv static. I then tried applying an algorithm that rearranges the array in [maximum minimum form](https://www.geeksforgeeks.org/rearrange-array-maximum-minimum-form/), which produced a 'bar' type effect.

Lastly, I created a 4th version with the array of colours sorted by the sum of the red, green and blue values. This produced a 'dripping' effect, which I found to be slightly more interesting.

## Instructions for installing & running the application

Requirements:

1. [Node version 16](https://nodejs.org/en/download/) or higher
2. yarn >= 1.22 installed (`npm install -g yarn`)

Clone this repository, cd to the project directory and run `yarn` to install dependencies

Once in the project directory, you can run:

### `yarn run dev`

Runs the app in the development mode using vite.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
