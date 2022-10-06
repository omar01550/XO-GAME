let chosePlayer=document.querySelectorAll(".chose-player .btns button");

chosePlayer.forEach((btn, i) => {
   btn.onclick=function(){
       chosePlayer.forEach((btn, i) => {
           btn.classList.remove("active-btn")
       });

       btn.classList.add("active-btn")


   }
});
