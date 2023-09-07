const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let passwordLength = document.getElementById("password-length")
let passwordBtn = document.getElementById("password-btn")

function getRandomNo(){
    let randomNo = Math.floor(Math.random()*characters.length)
    return randomNo
}



function generatePassword(){
    passwordOne.textContent = ""
    passwordTwo.textContent = ""
    let password1 = ""
    let password2 = ""
    
    for (let i = 0; i < passwordLength.value; i++){ 
    password1 += characters[getRandomNo()]
    password2 += characters[getRandomNo()]
    }
    
    passwordOne.textContent = password1
    passwordTwo.textContent = password2
}