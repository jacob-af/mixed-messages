let msg1 = ["No matter how bad it gets, ",
 "Don't worry about your mistakes, ",
"If you're feeling lonely, "]

let msg2 = ["you will die some day. ", "no one is paying attention. ", "remember that existence is meaningless. "]

let msg3 = ["Eat more ice cream!", "Treat yo'self!", "Life is suffering!"]

let buttn = document.getElementById("try-it");

buttn.onclick = () => {
    document.getElementById('message').innerHTML = msg1[Math.floor(Math.random()*3)]+ msg2[Math.floor(Math.random()*3)]+msg3[Math.floor(Math.random()*3)]
}
