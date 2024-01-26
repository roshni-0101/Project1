function makebubble(){
    var bubble = "";
for(var i = 1; i<=133; i++){
    var rn = Math.floor(Math.random()*10)
    bubble = bubble + `<div class="bubble">${rn}</div>`
}

document.querySelector("#boxbtm").innerHTML = bubble;
}
var timer = 60;
var score= 0;
var hitRn=0;


function getHitValue(){
      hitRn = Math.floor(Math.random() * 10);
    document.querySelector("#hitbox").textContent = hitRn;
}

function runTimer(){
   var timerIn= setInterval(function(){
       if(timer>0){
        timer--;
        document.querySelector("#timerbox").textContent = timer;
       }else{
        clearInterval(timerIn);
        document.querySelector("#boxbtm").innerHTML= `<h1>GAME   OVER</h1>`;
        document.querySelector("#boxbtm").style.fontSize = "50px";

       }
       
    },1000)

}

function getScore(){
    score += 10;
    document.querySelector("#scorebox").textContent = score
}
document.querySelector("#boxbtm")
.addEventListener("click",function(clickedBbl){
    var clickedNum = Number(clickedBbl.target.textContent);
    if(clickedNum===hitRn){
        getScore();
        getHitValue();
        makebubble();

    }

})

getHitValue();
runTimer();
makebubble();






