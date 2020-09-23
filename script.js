console.log('Add validation!');
let form = document.querySelector("form");
// console.log({form}) to test page input-field

form.addEventListener("submit", function(event) {
  // console.log("submitted")} to test page
event.preventDefault()
  // if name is more than 4 characters in length return true for validation of page
  let name = document.querySelector("#name");
  if (name.value.length > 0){
    console.log("valid");
    name.parentElement.classList.add("input-valid");
    console.log(name.classList);
  }
  else {
    console.log("invalid");
    name.parentElement.classList.add("input-invalid");
  
  // name.classList.add("input-invalid");
  }
  })
  let car = document.querySelector("#car-field");
  if (car-year.value.length > 0){
    console.log("valid");
    name.parentElement.classList.add("input-valid");
    console.log(name.classList);
  }
  else {
    console.log("invalid");
    name.parentElement.classList.add("input-invalid");
  
  // name.classList.add("input-invalid");
  }
  