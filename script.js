let yesBtn = document.getElementById("yes");
let noBtn = document.getElementById("no");

yesBtn.onclick = function(){

    // CONFETTI EXPLOSION 🎉
    confetti({
        particleCount:200,
        spread:120,
        origin:{ y:0.6 }
    });

    // extra bursts
    setTimeout(()=>confetti({particleCount:150, spread:90}),300);
    setTimeout(()=>confetti({particleCount:150, spread:160}),600);

    // smooth transition
    setTimeout(()=>{
        window.location.href="love.html";
    },1200);
}

noBtn.onmouseover=function(){
    noBtn.style.position="absolute";
    noBtn.style.top=Math.random()*80+"%";
    noBtn.style.left=Math.random()*80+"%";
}
