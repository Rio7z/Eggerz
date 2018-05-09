
var egg = document.querySelector("#egg");
var scoreDisplay = document.querySelector("#scoreDisplay");
var score = 0;
var multiplier = 1;

var game = document.getElementById('game');
var upgrade = document.getElementById('upgrades');
var shop = document.getElementById('shop');
var leaderboard = document.getElementById('leaderboard');

var gameButton = document.getElementById('gameButton')
var upgradesButton = document.getElementById('upgradesButton')
var shopButton = document.getElementById('shopButton')
var leaderboardButton = document.getElementById('leaderboardButton')

var boughtClick = false;
var boughtTime0 = false;
var boughtTime1 = false;
var boughtTime2 = false;
var boughtTime3 = false;
var boughtTime4 = false;

egg.addEventListener("click", function() {
  score == multiplier;
  score++;
  scoreDisplay.textContent = score;
})

buyClickBtn.addEventListener("click", function() {
  var buyClickBtn = document.querySelector("#buyClickBtn");
  if (score >= 1000 && boughtClick === false) {
    scoreDisplay.textContent = score;
    this.classList.add("disabled", "disabled");
    this.textContent = "Purchased";
    boughtClick = true;
    score -= 1000;
    multiplier = 2;
  } else if (score < 1000 && boughtClick === false) {
    alert("You don't have enough eggs!");
  }
});

buyTimeBtn.addEventListener("click", function() {
  var buyTimeBtn = document.querySelector("#buyTimeBtn");
  var boughtTime0 = false;
  if (score >= 100 && boughtTime0 === false) {
    setInterval(function() {
      score++;
      scoreDisplay.textContent = score;
    }, 10000);
    this.classList.add("disabled", "disabled");
    this.textContent = "Purchased";
    boughtTime0 = true;
    score -= 100;
  } else if (score < 100 && boughtTime0 === false) {
    alert("You don't have enough eggs!");
  }
});

buyTimeBtn1.addEventListener("click", function() {
  var buyTimeBtn = document.querySelector("#buyTimeBtn1");
  var boughtTime1 = false;
  if (score >= 1000 && boughtTime1 === false) {
    setInterval(function() {
      score++;
      scoreDisplay.textContent = score;
    }, 5000);
    this.classList.add("disabled", "disabled");
    this.textContent = "Purchased";
    boughtTime1 = true;
    score -= 1000;
  } else if (score < 1000 && boughtTime1 === false) {
    alert("You don't have enough eggs!");
  }
});

buyTimeBtn2.addEventListener("click", function() {
  var buyTimeBtn2 = document.querySelector("#buyTimeBtn");
  var boughtTime2 = false;
  if (score >= 10000 && boughtTime2 === false) {
    setInterval(function() {
      score++;
      scoreDisplay.textContent = score;
    }, 2000);
    this.classList.add("disabled", "disabled");
    this.textContent = "Purchased";
    boughtTime2 = true;
    score -= 10000;
  } else if (score < 10000 && boughtTime2 === false) {
    alert("You don't have enough eggs!");
  }
});

buyTimeBtn3.addEventListener("click", function() {
  var buyTimeBtn3 = document.querySelector("#buyTimeBtn");
  var boughtTime3 = false;
  if (score >= 100000 && boughtTime3 === false) {
    setInterval(function() {
      score++;
      scoreDisplay.textContent = score;
    }, 1000);
    this.classList.add("disabled", "disabled");
    this.textContent = "Purchased";
    boughtTime3 = true;
    score -= 100000;
  } else if (score < 100000 && boughtTime3 === false) {
    alert("You don't have enough eggs!");
  }
});


gameButton.addEventListener("click", function () {
   gameButton.classList.add('active')
   upgradesButton.classList.remove('active')
   shopButton.classList.remove('active')
   leaderboardButton.classList.remove('active')

   game.classList.remove('hidden')
   upgrades.classList.add('hidden')
   shop.classList.add('hidden')
   leaderboard.classList.add('hidden')
});

upgradesButton.addEventListener("click", function () {
   gameButton.classList.remove('active')
   upgradesButton.classList.add('active')
   shopButton.classList.remove('active')
   leaderboardButton.classList.remove('active')

   game.classList.add('hidden')
   upgrades.classList.remove('hidden')
   shop.classList.add('hidden')
   leaderboard.classList.add('hidden')
});

shopButton.addEventListener("click", function () {
   gameButton.classList.remove('active')
   upgradesButton.classList.remove('active')
   shopButton.classList.add('active')
   leaderboardButton.classList.remove('active')

   game.classList.add('hidden')
   upgrades.classList.add('hidden')
   shop.classList.remove('hidden')
   leaderboard.classList.add('hidden')
});

leaderboardButton.addEventListener("click", function () {
   gameButton.classList.remove('active')
   upgradesButton.classList.remove('active')
   shopButton.classList.remove('active')
   leaderboardButton.classList.add('active')

   game.classList.add('hidden')
   upgrades.classList.add('hidden')
   shop.classList.add('hidden')
   leaderboard.classList.remove('hidden')
});

egg.addEventListener("click", function createNumbers(score) {
    var div = document.createElement("div") ;
    div.innerText = multiplier ;
    div.style.fontSize = "25px" ;
    div.style.color = "white" ;
    div.style.fontWeight = "bold" ;
    div.style.position = "fixed" ;
    div.style.top = Math.random() * 66 + 14 + "vh" ;
    div.style.left = Math.random() * 90 + "vw" ;
    div.style.opacity = 1 ;
    document.getElementById("game").appendChild(div) ;
    var fade = setInterval (function() {
        if (div.style.opacity == 0.1) {
            clearInterval(fade) ;
            document.getElementById("game").removeChild(div) ;
        }
        div.style.opacity -= 0.1
    }, 200) ;
});

var images = [
  './img/Asset 1.svg',
  './img/Asset 2.svg',
  './img/Asset 3.svg',
  './img/Asset 4.svg',
  './img/Asset 5.svg',
  './img/Asset 6.svg',
  './img/Asset 7.svg',
  './img/Asset 8.svg',
  './img/Asset 9.svg',
  './img/Asset 10.svg',
  './img/Asset 11.svg',
  './img/Asset 12.svg',
  './img/Asset 13.svg',
  './img/Asset 14.svg',
  './img/Asset 15.svg',
  './img/Asset 16.svg',
  './img/Asset 17.svg',
  './img/Asset 18.svg',
  './img/Asset 19.svg',
  './img/Asset 20.svg',
  './img/Asset 21.svg',
  './img/Asset 22.svg',
  './img/Asset 23.svg',
  './img/Asset 24.svg',
  './img/Asset 25.svg',
  './img/Asset 26.svg',
  './img/Asset 27.svg',
  './img/Asset 28.svg',
  './img/Asset 29.svg',
  './img/Asset 30.svg',
  './img/Asset 31.svg',
  './img/Asset 32.svg',
  './img/Asset 33.svg',
  './img/Asset 34.svg',
  './img/Asset 35.svg',
  './img/Asset 36.svg',
  './img/Asset 37.svg',
  './img/Asset 38.svg',
  './img/Asset 39.svg',
  './img/Asset 40.svg',
  './img/Asset 41.svg',
  './img/Asset 42.svg',
  './img/Asset 43.svg',
  './img/Asset 44.svg',
  './img/Asset 45.svg',
  './img/Asset 46.svg',
  './img/Asset 47.svg',
  './img/Asset 48.svg',
  './img/Asset 49.svg',
  './img/Asset 50.svg',
  './img/Asset 51.svg',
  './img/Asset 52.svg',
  './img/Asset 53.svg',
  './img/Asset 54.svg',
  './img/Asset 55.svg',
  './img/Asset 56.svg',
  './img/Asset 57.svg',
  './img/Asset 58.svg',
  './img/Asset 59.svg',
  './img/Asset 60.svg',
  './img/Asset 61.svg',
  './img/Asset 62.svg',
  './img/Asset 63.svg',
  './img/Asset 64.svg',
  './img/Asset 65.svg',
  './img/Asset 66.svg',
  './img/Asset 67.svg',
  './img/Asset 68.svg',
  './img/Asset 69.svg',
  './img/Asset 70.svg',
  './img/Asset 71.svg',
  './img/Asset 72.svg',
  './img/Asset 73.svg'
],

i = 0;

for (var j=images.length; j--;) {
var img = new Image();
img.src = images[j];
}

document.getElementById('egg').addEventListener('click', function() {
this.src = images[i >= images.length - 1 ? i = 0 : ++i];

}, false);

/*var eggImages = new Array();

     eggImages[0]="images/Asset 1.svg"
     eggImages[1]="images/Asset 2.svg"

     var i = 0
     function updateImg(){
        var i = i + 1;
        var url = 'url(' + eggImages[i] + ')';
        document.getElementById('egg').style.backgroundImage=url;
        console.log('done');
      }

/*
var num = 0;

$(document).ready(function(){

  $("#egg").on('click',function(){
    num+=1;
    $('#cracked').text(num);


    if(num >= 10 ){
      num += 2;
    }

    if(num >= 500) {
      num += 4;
    }
    if(num >= 3000) {
      num += 10;
    }
    if(num >= 10000) {
      num += 40;
    }
    if(num >= 40000) {
      num += 100;
    }
    if(num >= 200000) {
      num += 400;
    }
  });

  window.setInterval(
  function () {
      num = num + 1;;

  }, 1000);
});*/
