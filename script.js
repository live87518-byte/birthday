const intro = document.getElementById("intro");
const birthday = document.getElementById("birthday");

const startBtn = document.getElementById("start");
const giftBtn = document.getElementById("gift");

const music = document.getElementById("music");

const typed = document.getElementById("typed");

const message = `💖

Chúc mừng sinh nhật Trang!

Chúc bạn tuổi 15 luôn vui vẻ,
hạnh phúc, học giỏi
và đạt được mọi điều mình mong muốn.

Mong rằng mỗi ngày đều tràn ngập
tiếng cười và thật nhiều may mắn.

Happy Birthday ❤️`;

startBtn.addEventListener("click",()=>{

intro.style.opacity="0";
intro.style.transform="scale(1.2)";

setTimeout(()=>{

intro.style.display="none";

birthday.style.display="flex";

birthday.style.animation="fadeUp 1s";

music.play().catch(()=>{});

typeMessage();

},1000);

});

function typeMessage(){

let i=0;

typed.innerHTML="";

const timer=setInterval(()=>{

typed.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(timer);

}

},45);

}