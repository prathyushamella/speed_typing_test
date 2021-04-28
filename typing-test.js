let speedTypingTest = document.getElementById("speedTypingTest");
let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoteInput = document.getElementById("quoteInput");
let submitBtnE = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let loading = document.getElementById("loading")
speedTypingTest.classList.add("d-none")
loading.classList.remove("d-none")
let uniq;

function settimer() {
    let time = 0

    uniq = setInterval(function() {
        time += 1
        timer.textContent = time
    }, 1000);
}

function setfetch() {
    let options = {
        method: "GET"
    }
    let url = "https://apis.ccbp.in/random-quote"

    fetch(url, options)
        .then((response) => {
            return response.json()
        })
        .then((jsonobject) => {
            loading.classList.add("d-none")
            speedTypingTest.classList.remove("d-none")
            quoteDisplay.textContent = jsonobject.content
            settimer()
        })
}
setfetch()
submitBtnE.addEventListener("click", function() {
    clearInterval(uniq)
    if (quoteDisplay.textContent == quoteInput.value) {
        result.textContent = "you typed in " + timer.textContent + "seconds"
    } else {
        result.textContent = "you typed incorrect sentence"
    }
    console.log(timer.textContent)
})
resetBtn.addEventListener("click", function() {
    setfetch()
})