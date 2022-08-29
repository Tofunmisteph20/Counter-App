let header1 = document.getElementsByTagName('h1')[0];
let header2 = document.getElementsByTagName('h2')[0];

let btn1 = document.getElementsByTagName('button')[0]
let btn2 = document.getElementsByTagName('button')[1]
let btn3 = document.getElementsByTagName('button')[2]

let score=0

btn1.addEventListener('click', ()=>{
    score--
    header2.textContent = score
    if(score<0){
        document.body.style.backgroundColor = 'red'
    }else if(score==0){
        document.body.style.backgroundColor ='yellow'
    }
})
btn2.addEventListener('click', ()=>{
    score = 0
    header2.textContent = score

    // if(score<0){
    //     document.body.style.backgroundColor = 'red'
          if(score==0){
        //  document.body.style.backgroundColor ='transparent'
          }
    // }else if(score>0){
    //     document.body.style.backgroundColor='green'
    // }
})
btn3.addEventListener('click', ()=>{
    score++
    header2.textContent = score

     if(score>0){
     document.body.style.backgroundColor='green'
 }
})

