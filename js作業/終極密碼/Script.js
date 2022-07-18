//選到全部的button
let Btns = document.querySelectorAll('.button-arr>button')
//NodeList
//console.log(Btns)


//選擇tag input
let input = document.querySelector('input')

//foreach button
Btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        //將event.target(觸發事件本人)的innerText指派給input.value
        input.value += event.target.innerText

        Error()
        

    })

})

let btn0=document.getElementById('btn0')

btn0.addEventListener('click',(event)=>{
    input.value+=event.target.innerText
    Error()
})



let makenumbtn = document.getElementById('make-number')

makenumbtn.addEventListener('click', function () {
    //取亂數
    let answer = document.getElementById('answer')

    answer.innerText = (Math.round(Math.random() * 100))
   // console.log(answer)

})



//判斷輸入數字是否超過100且不能輸入0
var MaxLimit = 100
var MinLimit = 0


function Error() {
    //console.log(0)
    if (answer.innerText == '') {
        alert('請先按產生數字')
        input.value = ''
        return
    }
    
    if (parseInt(input.value > MaxLimit)) {
        alert('請輸入不超過100的數')
        input.value = ''
        return
    }
    //把它變字串
    if (input.value == MinLimit) {
        console.log(0)
        alert('輸入[00]無效')
        input.value = ''
        return
    }
    if (input.value.length > 2) {
        alert('請輸入2位數字')
        input.value = ''
        return
    }
    
}

let x = document.getElementById('x')
x.addEventListener('click', function () {
    let guess = document.getElementById('guess-number')
    //清空input裡面的值
    guess.value = ''

})

//猜錯的提示

//console.log(tip)
//按下輸入後要確認答案是否正確
let v = document.getElementById('v')
let box = document.querySelector('div>p')
//console.log(box)
v.addEventListener('click', function () {
    //guess>answer
if (input.value > answer.innerText) {
    box.innerText = (`提示${MinLimit}~${input.value}`)
    alert(`您輸入的數字${input.value}比正確答案大`)
    input.value=''
    }
else if (input.value < answer.innerText) {
        box.innerText = (`提示${input.value}~${MaxLimit}`)
        alert(`您輸入的數字${input.value}比正確答案小`)
        input.value=''
    }
else {
        alert('恭喜答對')
    }
})




