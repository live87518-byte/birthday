const startBtn = document.getElementById("startBtn");
const giftBtn = document.getElementById("giftBtn");

const welcome = document.querySelector(".welcome");
const birthday = document.getElementById("birthday");

const music = document.getElementById("music");
const typing = document.getElementById("typing");

const message = `💖

Chúc mừng sinh nhật Trang!

Hôm nay là ngày đặc biệt nhất của bạn.
Chúc bạn tuổi 15 luôn vui vẻ, mạnh khỏe,
học giỏi, luôn mỉm cười và đạt được
mọi điều mình mong muốn.

Hy vọng mỗi ngày của bạn đều ngập tràn
niềm vui và hạnh phúc.

Happy Birthday! 🎂❤️`;

startBtn.onclick = () => {

welcome.classList.add("hidden");
birthday.classList.remove("hidden");

music.play().catch(()=>{});

typeWriter();

};

function typeWriter(){

let i=0;

typing.innerHTML="";

let timer=setInterval(()=>{

typing.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(timer);

}

},45);

}

giftBtn.onclick=()=>{

fireworks();

for(let i=0;i<30;i++){

setTimeout(createBalloon,i*150);

}

giftBtn.innerHTML="🎉 Chúc mừng sinh nhật 🎉";

giftBtn.disabled=true;

};

function fireworks(){

var duration=5000;

var end=Date.now()+duration;

(function frame(){

confetti({

particleCount:5,

angle:60,

spread:60,

origin:{x:0}

});

confetti({

particleCount:5,

angle:120,

spread:60,

origin:{x:1}

});

if(Date.now()<end){

requestAnimationFrame(frame);

}

})();

}

setInterval(createHeart,300);

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),8000);

}

setInterval(createFlower,700);

function createFlower(){

const flower=document.createElement("div");

flower.className="flower";

flower.innerHTML="🌸";

flower.style.left=Math.random()*100+"vw";

flower.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(flower);

setTimeout(()=>flower.remove(),10000);

}

function createBalloon(){

const b=document.createElement("div");

b.innerHTML="🎈";

b.style.position="fixed";

b.style.left=Math.random()*100+"vw";

b.style.bottom="-60px";

b.style.fontSize=(30+Math.random()*20)+"px";

b.style.transition="8s linear";

document.body.appendChild(b);

setTimeout(()=>{

b.style.bottom="110vh";

},100);

setTimeout(()=>{

b.remove();

},8500);

}