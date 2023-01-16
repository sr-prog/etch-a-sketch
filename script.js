// Functions for event listeners
let color = 'black'
const colorPicker = document.getElementById('color-picker')
colorPicker.value = undefined

function colorGridSquare(e) {
  if (colorPicker.value !== undefined) {
    color = colorPicker.value
  }
  e.target.style.backgroundColor = color
}

function newGrid(size) {
  //INFO: Is there any way to load the entire index.html?
  if (size === undefined) {
    do {
      size = prompt('Enter a size for the grid. Min: 1, Max: 100')
    } while (size > 100 || size < 0)
  }
  // Create a 16 x 16 grid
  const gridContainer = document.querySelector('.grid-container')
  gridContainer.innerHTML = ''
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    let gridSquare = document.createElement('div')
    gridSquare.setAttribute('id', `grid-square-${i + 1}`)
    gridSquare.classList.add('grid-square', 'gridlines-on')
    gridSquare.addEventListener('mouseover', colorGridSquare)
    gridContainer.appendChild(gridSquare)
  }
}

function highlightButton(e, color) {
  color = colorPicker.value
  e.target.style.backgroundColor = color
}

function toggleGridLines() {
  const gridSquares = document.querySelectorAll('.grid-square')
  gridSquares.forEach((gridSquare) =>
    gridSquare.classList.toggle('gridlines-on')
  )
}

// Initial page load:
newGrid(16)

// Event Listeners & Buttons:

// New Grid Button
const newGridButton = document.querySelector('#new-grid-button')
newGridButton.addEventListener('click', () => {
  newGrid()
})

// color picker button
const colorPickerButton = document.querySelector('#color-picker-button')
colorPickerButton.addEventListener('click', () => {
  colorPicker.click()
})

const toggleGridlinesButton = document.querySelector('#toggle-gridlines-button')
toggleGridlinesButton.addEventListener('click', () => {
  toggleGridLines()
  toggleGridlinesButton.classList.toggle("toggled")
})
