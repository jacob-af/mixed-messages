let cheerfulMessage = ["No matter how bad it gets, remember that you will eventually die",
 "don't worry about your mistakes, life is meaningless anyway",
"If you're feeling lonely, you can always hold your own hand"]

let buttn = document.getElementById("try-it");

buttn.onclick = () => {
    document.getElementById('message').innerHTML = cheerfulMessage[Math.floor(Math.random()*3)]
}
