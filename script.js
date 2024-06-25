
 const navbar = document.querySelector('.navbar ul');
 const menu = document.querySelector('.btn-one');
 let count=1;
   menu.addEventListener('click',()=>{
        if(count===1){
            navbar.style.right="0";
            count =0;  
        }
        else{
            navbar.style.right ="-100%";
            count=1;
        }
   }
      
)

var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");


function stopVideo(){
    videoPlayer.style.display="none";
    
}
function playVideo(file){
    myVideo.src=file;

    
    videoPlayer.style.display="flex";
    videoPlayer.style.width="100%";
    videoPlayer.style.width="100%";

}

gsap.to("#nav",{
    backgroundColor:"transparent",
    height:"110px",
    duration:0.5,
}
)

gsap.from("#nav img,h4",{
    opacity:0,
   y:-50,
   durtion:1,
   delay:0.5,
   stagger:0.2
})
gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -10%",
        scrub:1
    }
})
gsap.from("#page1 h1",{
    opacity:0,
    duration:1,
    y:-100,
   delay:1
})
gsap.from("#page1 h2",{
    opacity:0,
    duration:1,
    delay:1.3,
    y:-100
})

function scrolll(){
    var left=document.querySelector(".card-wrapper");
    left.scrollBy(-320,0)
}
function scrollr(){
    var right=document.querySelector(".card-wrapper");
    right.scrollBy(320,0)
}


