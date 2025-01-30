let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
homeScoreEl.innerText = 0
guestScoreEl.innerText = 0

function homePlusOne() {
    let homeCurrentScore = parseInt(homeScoreEl.innerText)
    homeScoreEl.innerText = homeCurrentScore + 1
}

function homePlusTwo() {
    let homeCurrentScore = parseInt(homeScoreEl.innerText)
    homeScoreEl.innerText = homeCurrentScore + 2
}

function homePlusThree() {
    let homeCurrentScore = parseInt(homeScoreEl.innerText)
    homeScoreEl.innerText = homeCurrentScore + 3
}




function guestPlusOne() {
    let guestCurrentScore = parseInt(guestScoreEl.innerText)
    guestScoreEl.innerText = guestCurrentScore + 1
}

function guestPlusTwo() {
    let guestCurrentScore = parseInt(guestScoreEl.innerText)
    guestScoreEl.innerText = guestCurrentScore + 2
}

function guestPlusThree() {
    let guestCurrentScore = parseInt(guestScoreEl.innerText)
    guestScoreEl.innerText = guestCurrentScore + 3
}


