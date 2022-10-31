//宣告區域
let startBtn=document.querySelector('.startBtn')
let restartBtn=document.querySelector('.restartBtn')
let answerBtn=document.querySelector('.answerBtn')
let input=document.querySelector('.input')
let enterBtn=document.querySelector('.enterBtn')
let showAnswer=document.querySelector('.tips')

//function
startBtn.onclick=()=>{
    randomGet()
    restartBtn.removeAttribute('disabled')
    answerBtn.removeAttribute('disabled')
    input.removeAttribute('disabled')
    enterBtn.removeAttribute('disabled')
    startBtn.setAttribute('disabled',true)
}

restartBtn.onclick=()=>{
    //清除Answer
    Answer=[]
    startBtn.setAttribute('disabled',true)
    randomGet()
}


answerBtn.onclick=()=>{
    //陣列變字串
    alert(Answer.join(''))
}

enterBtn.onclick=()=>{
    checkAns()
}


//產生亂數
let Answer = []
function randomGet(){
    //取亂數
    let min = 0
    let max = 9
    

    for (let i = 0; i < 4; i++) {
        let nums = Math.floor(Math.random() * (max - min)) + 1
        
        //判斷回傳陣列內的索引值
        if(Answer.indexOf(nums)<0){
            Answer.push(nums)
        }
        //因為如果有重複的話他會跑下一次回圈
        //如果不i--就會少跑幾次回圈
        else{
            i--
        }  
    }
}


//檢查答案
let guessNum,result,answerGroup,notice,showGuessNum,display
function checkAns(){
    //input是字串
    guessNum=input.value
    //檢測input是否有重複數字
    let rptnum = false//先預設無重複

    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            if(i !=guessNum.indexOf[i]==guessNum.indexOf[j]){
                rptnum=true
                
            }    
        }
        if(rptnum){
            alert('請輸入4個不重複的數字')
            input.value=''
            return
        }
    
    }
    let intersect=Answer.filter(x=>guessNum.includes(x))
    let A=intersect.filter(x=>Answer.indexOf(x)==guessNum.indexOf(x)).length
    let B= intersect.length-A

    result=`${A}A${B}B`
    //console.log(result)
    showResult(result, guessNum, A)
}

//顯示結果
function showResult(div, span, A){
answerGroup=document.createElement('div')
answerGroup.classList.add('answerGroup','style="margin:auto";"border-button"','d-flex')


notice=document.createElement('div')
showGuessNum=document.createElement('span','mt-2')
showGuessNum.classList.add('showGuessNum','display:inline','mt-2')

notice.innerText= div
showGuessNum.innerText= span
//console.log(showAnswer)
answerGroup.append(notice)
answerGroup.append(showGuessNum)
showAnswer.append(answerGroup)

if(A===4){
    notice.classList.add('notice','bg-success','rounded','mx-2','mt-28','mb-3')
    alert('恭喜答對')
    return
}else{
    notice.classList.add('notice','bg-danger','rounded','mx-2','mb-3')
}


}