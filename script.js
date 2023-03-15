let ball = document.querySelector(".ball")

let sun = document.querySelector(".sun")

let moon = document.querySelector(".moon")

let body = document.querySelector(".body")

ball.onclick = function () {
    ball.classList.toggle("light")
    sun.classList.toggle("light")
    moon.classList.toggle("light")
    body.classList.toggle("light")
}
