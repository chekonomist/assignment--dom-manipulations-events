// GO!

// TASK 1 -- Show/Hide Nav

document
.querySelector('.answer-box button')
.addEventListener('click', function toggleNavBar(){

  var navBarEl = document.querySelector('.nav-menu')
  var visibilityProp = window.getComputedStyle(navBarEl)

  if (visibilityProp.opacity !== "0") {
    navBarEl.style.opacity = 0
    return
  }

  if (visibilityProp.opacity === "0") {
    navBarEl.style.opacity = 1
    return
  }

})


// TASK 2 -- Select an Icon
var iconsNodeList = document.querySelectorAll('.option')

var iconsNodeToArrEl = [...iconsNodeList]

function addColorToIcon (someObject){

  var clickedIcon = someObject.currentTarget
  clickedIcon.classList.toggle('selected')
  console.log(clickedIcon.classList)

}

iconsNodeToArrEl.forEach( function addListenerToIcons(btnEl, i){
  btnEl.addEventListener('click', addColorToIcon )
})
// TASK 3 -- Move Item From List to List
var pointsIconsNodeList = document.querySelectorAll('.point')
var pointsIconsArrEl = [...pointsIconsNodeList]

function addNumberToTotal(evtObj){
  var buttonWithNumber = evtObj.currentTarget
  var totalNumberBox = document.querySelector('.total-points')
  var totalNumberValue = parseInt(totalNumberBox.innerHTML)
  var numberToAdd = parseInt(buttonWithNumber.innerHTML)

  totalNumberValue = totalNumberValue + numberToAdd

  totalNumberBox.innerHTML = totalNumberValue

}

pointsIconsArrEl.forEach( function addListenerToNumButtons (btnEl, i){
  btnEl.addEventListener('click', addNumberToTotal)
})


// TASK 4 -- Add Guest to List
var listNodeArr = [...document.querySelectorAll('#list-2-list li')]

function changeList(listObj){
  var currentListNameEl = listObj.currentTarget
  var badGuysListEl = document.querySelector('.probation-list')
  var goodGuysListEl = document.querySelector('.good-standing-list')

  if (currentListNameEl.parentNode.classList.contains("good-standing-list")) {
    badGuysListEl.appendChild(currentListNameEl)
    return
  }

  if (currentListNameEl.parentNode.classList.contains("probation-list")) {
    goodGuysListEl.appendChild(currentListNameEl)
    return
  }

}

listNodeArr.forEach(function addListenerToList(btnEl,i){
  btnEl.addEventListener('click', changeList)
})

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
var colorPaletteArrEl = [...document.querySelectorAll('span')]

function changeBackGroundColor(colorObj){
  var selectedColor = colorObj.currentTarget
  var textBoxEl = document.querySelector('.msg')
  var currentColorClass = textBoxEl.classList.value
  var selectedColorClass = selectedColor.classList.value

  textBoxEl.classList.remove(`${currentColorClass}`)
  textBoxEl.classList.add(`${selectedColorClass}`)

  console.log(currentColorClass)
}

colorPaletteArrEl.forEach(function addListenerToColorSpan(btnEl,i){
  btnEl.addEventListener('click',changeBackGroundColor)
})
