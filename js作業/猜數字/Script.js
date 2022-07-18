//宣告
let startBtn = document.querySelector('.startbtn')
let answer = document.querySelector('#answer')
let restartBtn = document.querySelector('.restartbtn')
let showAnswer = document.querySelector('.showanswer')
let guessText = document.querySelector('.guesstext')
let guessBtn = document.querySelector('.guessbtn')

//start
startBtn.onclick = () => {
    randomGet()

    //移除disabled
    restartBtn.removeAttribute('disabled')

    //移除disabled
    showAnswer.removeAttribute('disabled')

    guessBtn.removeAttribute('disabled')

    guessText.removeAttribute('disabled')
}

restartBtn.onclick = () => {
    randomGet()
}

showAnswer.onclick = () => {
    ShowArr()
}








//function
//產生亂數-1
function randomGet() {
    //取亂數
    let min = 0
    let max = 9
    let numArr = []

    for (let i = 0; i < 4; i++) {
        let nums = Math.floor(Math.random() * (max - min)) + 1
        nums.toString()
        numArr.push(nums)
    }

}

//取亂數-2
function ShowArr() {
    let min = 0
    let max = 9
    let numArr = []

    for (let i = 0; i < 4; i++) {
        let nums = Math.floor(Math.random() * (max - min)) + 1
        nums.toString()
        numArr.push(nums)
    }

    alert(numArr)
}

//輸入答案



//判斷答案
function checkAnswer() {
    let a = 0
    let b = 0
    let inputAnswer = ('' + guessText.value).split('')

    inputAnswer.forEach((item, index) => {
        if (item == inputAnswer[i]) {
            a++
        }
        else if (inputAnswer.find((x) => x == item)) {
            b++
        }
       
    })
    if(){

    }
    return[a,b]
}

//按下猜後產生的物件