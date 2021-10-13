const password = document.querySelector("#password")
const btn = document.querySelector("#btn")
const outputDiv = document.querySelector("#output")

// btn.disabled = "true"
function clickHandler(){
  
  if(password.value.length < 10){
    
    outputDiv.innerText = "Error"
    password.style.backgroundColor = "red";
    // console.log("error")
  }else{
    btn.disabled = "false"
     outputDiv.innerText = "Success"
     password.style.backgroundColor ="green"
    // console.log("Submit")
  }
}

btn.addEventListener("click", clickHandler)