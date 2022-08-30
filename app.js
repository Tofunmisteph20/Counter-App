let header1 = document.getElementsByTagName('h1')[0];
let header2 = document.getElementsByTagName('h1')[1];

let btn1 = document.getElementsByTagName('button')[0]
let btn2 = document.getElementsByTagName('button')[1]
let btn3 = document.getElementsByTagName('button')[2]

let score=0

btn1.addEventListener('click', ()=>{
    score--
    header2.textContent = score
    if(score<0){
        document.body.style.backgroundColor = 'red'
        console.log('clicked');
     }else if(score==0){
        document.body.style.backgroundColor = 'whitesmoke'
     }
})
btn2.addEventListener('click', ()=>{
    score = 0
    header2.textContent = score

          if(score==0){
          document.body.style.backgroundColor ='transparent'
          }

})
btn3.addEventListener('click', ()=>{
    score++
    header2.textContent = score

     if(score>0){
     document.body.style.backgroundColor='green'
 }else if(score==0){
    document.body.style.backgroundColor = 'whitesmoke'
 }
if(score==5){
    header1.textContent = 'Easy Comrade..'
}else if(score<5){
    header1.textContent = 'NUMBER OF WIVES'
}
else if(score==10){
    header1.textContent = 'Ha!! Fear God '
}else if(score==20){
    header1.textContent = 'IS THAT YOU, VINCENT??'
}else if(score>24){
    document.body.style.backgroundColor = 'black'
    header1.textContent = 'VINCENT GET OUT OF HERE!!'
    header1.style.color = 'white'
}
})
