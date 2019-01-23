"use strict"



// let timeInterval = setInterval(function(){
//     let now = new Date();
//     hello.innerText = `${now.getHours()} : ${now.getMinutes()}: ${now.getMilliseconds()}`;
// }, 100)

// stoppp.onclick=function(){
//     clearInterval(timeInterval);
// }
usernam.innerText = 0;
setInterval(function(){
    let d = document.createElement("div");
    d.classList.add("randdd")
    d.style.backgroundColor = getRandomColor()

    let sizee =RandomNumberGen(20, 100)
    d.style.width = sizee + "px";
    d.style.height= sizee + "px";
    d.style.top = RandomNumberGen(0, window.innerHeight-sizee )+ "px";
    d.style.left = RandomNumberGen(0, window.innerWidth-sizee)+ "px";


    d.addEventListener("click", function(){ this.remove()});
    d.addEventListener("click", function(){
        
        usernam.innerText ++;
    })

    holder.appendChild(d);

 
    
}, 800 )


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function RandomNumberGen(min, max){
      return min + Math.round(Math.random()*(max-min));
  }