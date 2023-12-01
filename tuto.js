// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
  let countStr=count + ":";
  saveEl.textContent +=countStr  ;
  countEl.textContent =0
  count =0//set count to 0  
}

function start(){
    document.getElementById("ans").innerHTML= Date()
}
function stoper(){
    document.getElementById("ans").innerHTML= null
}