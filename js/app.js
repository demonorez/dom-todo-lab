const btnEl = document.querySelector("#submit-button")
const inpEl = document.querySelector("#info")
const ulEl = document.querySelector("todo-list")
const resetBtnEl = document.querySelector("#reset-button")
const liEl = document.querySelector("#list")

btnEl.addEventListener('click', function(evt) {
  if (inpEl.value === "") {
    return 
  }
  const li = document.createElement('li')
  // const li = document.createElement('li')
  li.textContent = inpEl.value
  document.querySelector('#todo-list').appendChild(li)
  inpEl.value = ""
})

resetBtnEl.addEventListener('click', function(evt) {
  
  document.querySelector("#todo-list").textContent = ""
  inpEl.value = ""
})

