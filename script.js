const intro=document.getElementById("intro");
const birthday=document.getElementById("birthday");
const letter=document.getElementById("letter");
const reasons=document.getElementById("reasons");
const cake=document.getElementById("cake");
const finalPage=document.getElementById("final");

const openBtn=document.getElementById("openBtn");
const nextBtn=document.getElementById("nextBtn");
const reasonsBtn=document.getElementById("reasonsBtn");
const cakeBtn=document.getElementById("cakeBtn");
const wishBtn=document.getElementById("wishBtn");

function changePage(current,next){

current.classList.remove("active");

setTimeout(()=>{

next.classList.add("active");

},500);

}

openBtn.onclick=()=>{

changePage(intro,birthday);

}

nextBtn.onclick=()=>{

changePage(birthday,letter);

}

reasonsBtn.onclick=()=>{

changePage(letter,reasons);

}

cakeBtn.onclick=()=>{

changePage(reasons,cake);

}

wishBtn.onclick=()=>{

wishBtn.innerHTML="🎉 Happy Birthday!";

launchConfetti();

setTimeout(()=>{

changePage(cake,finalPage);

launchFireworks();

},3000);

}

function launchConfetti(){

const container=document.getElementById("confetti");

const colors=[
"#ff0066",
"#ff4d94",
"#ffd700",
"#00e5ff",
"#7fff00",
"#ffffff"
];

for(let i=0;i<180;i++){

const piece=document.createElement("div");

piece.classList.add("confetti");

piece.style.left=Math.random()*100+"vw";

piece.style.background=colors[Math.floor(Math.random()*colors.length)];

piece.style.animationDuration=(2+Math.random()*2)+"s";

piece.style.transform=`rotate(${Math.random()*360}deg)`;

container.appendChild(piece);

setTimeout(()=>{

piece.remove();

},4000);

}

}

function launchFireworks(){

const container=document.getElementById("fireworks");

const colors=[
"#ff0066",
"#ffd700",
"#00ffff",
"#7CFC00",
"#ffffff",
"#ff69b4"
];

for(let i=0;i<35;i++){

const dot=document.createElement("div");

dot.className="firework";

dot.style.left=Math.random()*100+"vw";

dot.style.top=Math.random()*70+"vh";

dot.style.background=colors[Math.floor(Math.random()*colors.length)];

container.appendChild(dot);

setTimeout(()=>{

dot.remove();

},1700);

}

}

const restartBtn=document.getElementById("restartBtn");

restartBtn.onclick=()=>{

location.reload();

}