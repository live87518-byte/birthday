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
/* ==========================
   ❤️ TIM BAY
========================== */

setInterval(createHeart,250);

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["❤","💖","💕","💗"][Math.floor(Math.random()*4)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

/* ==========================
   🌸 HOA RƠI
========================== */

setInterval(createFlower,500);

function createFlower(){

const flower=document.createElement("div");

flower.className="flower";

flower.innerHTML=["🌸","🌺","🌷","💮"][Math.floor(Math.random()*4)];

flower.style.left=Math.random()*100+"vw";

flower.style.fontSize=(18+Math.random()*18)+"px";

flower.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},10000);

}

/* ==========================
   ✨ HẠT SÁNG
========================== */

setInterval(createSpark,120);

function createSpark(){

const spark=document.createElement("div");

spark.style.position="fixed";

spark.style.width="4px";

spark.style.height="4px";

spark.style.borderRadius="50%";

spark.style.background="white";

spark.style.left=Math.random()*100+"vw";

spark.style.top=Math.random()*100+"vh";

spark.style.opacity=Math.random();

spark.style.boxShadow="0 0 12px white";

spark.style.transition="2s";

document.body.appendChild(spark);

setTimeout(()=>{

spark.style.opacity="0";

spark.style.transform="scale(3)";

},50);

setTimeout(()=>{

spark.remove();

},2200);

}

/* ==========================
   🎈 BONG BÓNG
========================== */

function createBalloon(){

const b=document.createElement("div");

b.innerHTML="🎈";

b.style.position="fixed";

b.style.bottom="-80px";

b.style.left=Math.random()*100+"vw";

b.style.fontSize=(30+Math.random()*25)+"px";

b.style.transition="8s linear";

document.body.appendChild(b);

setTimeout(()=>{

b.style.bottom="120vh";

},50);

setTimeout(()=>{

b.remove();

},8500);

}
/* ===================================
   🎁 MỞ QUÀ + PHÁO HOA + HIỆU ỨNG
=================================== */

giftBtn.addEventListener("click", () => {

    launchFireworks();

    for(let i=0;i<40;i++){
        setTimeout(createBalloon,i*120);
    }

    pulseScreen();

    showBigHeart();

    giftBtn.disabled = true;
    giftBtn.innerHTML = "🎉 Happy Birthday 🎉";

});


/* ===================================
   🎆 PHÁO HOA
=================================== */

function launchFireworks(){

    const duration = 7000;

    const end = Date.now() + duration;

    (function frame(){

        confetti({
            particleCount:5,
            angle:60,
            spread:70,
            origin:{x:0},
            scalar:1.2
        });

        confetti({
            particleCount:5,
            angle:120,
            spread:70,
            origin:{x:1},
            scalar:1.2
        });

        confetti({
            particleCount:8,
            spread:360,
            ticks:80,
            origin:{
                x:Math.random(),
                y:Math.random()*0.6
            }
        });

        if(Date.now()<end){
            requestAnimationFrame(frame);
        }

    })();

}


/* ===================================
   💓 TIM LỚN GIỮA MÀN HÌNH
=================================== */

function showBigHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="fixed";
    heart.style.left="50%";
    heart.style.top="50%";
    heart.style.transform="translate(-50%,-50%) scale(.3)";
    heart.style.fontSize="160px";
    heart.style.transition="1.2s";
    heart.style.zIndex="9999";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.style.transform="translate(-50%,-50%) scale(1.4)";
        heart.style.opacity="0";
    },50);

    setTimeout(()=>{
        heart.remove();
    },1300);

}


/* ===================================
   📳 RUNG NHẸ
=================================== */

function pulseScreen(){

    document.body.animate([

        {transform:"translateX(-4px)"},
        {transform:"translateX(4px)"},
        {transform:"translateX(-3px)"},
        {transform:"translateX(3px)"},
        {transform:"translateX(0)"}

    ],{

        duration:450

    });

}


/* ===================================
   ✨ SAO LẤP LÁNH
=================================== */

setInterval(()=>{

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";
    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";
    star.style.fontSize=(10+Math.random()*15)+"px";
    star.style.opacity="0";
    star.style.transition="2s";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.style.opacity="1";
        star.style.transform="scale(2)";

    },50);

    setTimeout(()=>{

        star.style.opacity="0";

    },1600);

    setTimeout(()=>{

        star.remove();

    },2200);

},250);