let startPage=document.querySelector("section.start-page");
let gamePage=document.querySelector("section.game-page");
let choseXO=document.querySelectorAll(".chose-player .btns button");
let playWithCpuBtn=document.querySelector(".play-width-cpu");
let playWithFriendBtns=document.querySelector(".play-width-friend");
let allSqu=document.querySelectorAll(".squ");
let retryBtn=document.querySelector(".retry");
let xScore=document.querySelector(".x-score");
let oScore=document.querySelector(".o-score");
let currentPlayer=document.querySelector('.current-player');
let backBtn=document.querySelector(".back-btn");
//sounds
let clickSound=document.querySelector(".click-sound");
let winSound=document.querySelector(".win-sound");



let player= 'cpu';
let turn ="x";

//event listenrs
playWithFriendBtns.addEventListener("click",function () {
    hiddenSection();
    player="friend";
});
playWithCpuBtn.addEventListener("click",function () {
    hiddenSection();
    player="cpu";
})


backBtn.addEventListener("click",hiddenSection);
backBtn.addEventListener("click",reset);
allSqu.forEach((squ, i) => {
    squ.addEventListener("click",function () {
        startGame(squ);
        clickSound.play();
    })
});
retryBtn.addEventListener("click",function () {
    allSqu.forEach((squ, i) => {
      squ.classList.remove("win")
      squ.innerHTML='';
      turn ="x";
      currentPlayer.innerHTML=turn;
    });
    allSqu.forEach((squ, i) => {
        squ.style.pointerEvents="all";
    });

});

//functions
function startGame(squ) {

 changeTurn(squ);
 checkWinner(0,3,6);
 checkWinner(0,1,2);
 checkWinner(2,5,8);
 checkWinner(6,7,8);
 checkWinner(1,4,7);
 checkWinner(0,4,8);
 checkWinner(2,4,6);
 checkWinner(3,4,5);

}
function hiddenSection() {
   startPage.classList.toggle("hidden");
   gamePage.classList.toggle("hidden");
}
function changeTurn(squ) {
  if(squ.innerHTML==''){
    if(turn == "x"){
       squ.innerHTML=`<h1 class="x">x</h1>`;
       currentPlayer.style.color="var(--gold-color)";
       turn = 'o';
       currentPlayer.innerHTML="o";

    }else{
        squ.innerHTML=`<h1 class="o">o</h1>`;
        turn="x"
        currentPlayer.innerHTML="x";
        currentPlayer.style.color="var(--sky-color)";
    }
  }
}
function checkWinner(x,y,z) {
   let allSqu=document.querySelectorAll(".squ") ;
   if(allSqu[x].innerHTML == allSqu[y].innerHTML && allSqu[y].innerHTML== allSqu[z].innerHTML && allSqu[y].innerHTML!=""){
       winSound.play();
       if(allSqu[y].innerHTML == `<h1 class="x">x</h1>`){
             [allSqu[x],allSqu[y],allSqu[z]].forEach((ele, i) => {
                 ele.classList.add("win");

             });

             xScore.innerHTML++
             allSqu.forEach((squ, i) => {
                 squ.style.pointerEvents="none";
             });

       }else if(allSqu[y].innerHTML == `<h1 class="o">o</h1>`){
               [allSqu[x],allSqu[y],allSqu[z]].forEach((ele, i) => {
                   ele.classList.add("win");

               });
              oScore.innerHTML++
              allSqu.forEach((squ, i) => {
                  squ.style.pointerEvents="none";
              });
       }
   }
}
function reset() {
    allSqu.forEach((squ, i) => {
      squ.innerHTML='';
    });
    turn = "x";
    xScore.innerHTML=0;
    oScore.innerHTML=0;
    allSqu.forEach((squ, i) => {
        squ.style.pointerEvents="all";
    });
}
