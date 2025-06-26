//for you & following button blue line toggle
document.querySelector(".foryou").addEventListener("click",()=>{
    document.querySelector(".line").style.visibility="visible"
    document.querySelector(".line2").style.visibility="hidden"
    document.querySelector(".posts").style.display="block"
})
document.querySelector(".following").addEventListener("click",()=>{
    document.querySelector(".line").style.visibility="hidden"
    document.querySelector(".line2").style.visibility="visible"
    document.querySelector(".posts").style.display="none"
})
function blue(){
    document.querySelector(".search").style.border="none"
    document.querySelector(".search").style.border="2px solid rgb(20, 114, 208)"
}
function replyandbreak(){
    document.querySelector(".reply").style.display="flex"
    document.querySelector(".break").style.display="block"
}

//comment hover effect function
function commnhover(){
    document.querySelector(".logoc").style.backgroundColor="rgba(29, 156, 240, 0.193)"
    document.querySelector(".commc").style.color="rgba(37, 99, 235, 1)"
    document.querySelector(".logoc>svg").style.color="rgb(37, 99, 235)"
}
function commnout(){
    document.querySelector(".logoc").style.backgroundColor="black"
    document.querySelector(".commc").style.color="rgb(107, 114, 128)"
    document.querySelector(".logoc>svg").style.color="rgb(107, 114, 128)"
}

//retweet hover function
function retweethover(){
    document.querySelector(".retweetc").style.backgroundColor="rgba(34, 139, 34, 0.193)"
    document.querySelector(".retc").style.color="rgb(22, 163, 74)"
    document.querySelector(".retweetc>svg").style.color="rgb(22, 163, 74)"
}
function retweetout(){
    document.querySelector(".retweetc").style.backgroundColor="black"
    document.querySelector(".retc").style.color="rgb(107, 114, 128)"
     document.querySelector(".retweetc>svg").style.color="rgb(107, 114, 128)"
}

//like hover effect function
function likehover(){
    document.querySelector(".likelc").style.backgroundColor="rgb(220, 38, 38,0.193)"
    document.querySelector(".likec").style.color="rgb(220, 38, 38)"
    document.querySelector(".likelc>svg").style.color="rgb(220, 38, 38)"
}
function likeout(){
    document.querySelector(".likelc").style.backgroundColor="black"
    document.querySelector(".likec").style.color="rgb(107, 114, 128)"
    document.querySelector(".likelc>svg").style.color="rgb(107, 114, 128)"
}

//graph icon hover effect function
function graphhover(){
    document.querySelector(".graphlc").style.backgroundColor="rgba(29, 156, 240, 0.193)"
    document.querySelector(".graphc").style.color="rgba(37, 99, 235, 1)"
    document.querySelector(".graphlc>svg").style.color="rgb(37, 99, 235)"
}
function graphout(){
    document.querySelector(".graphlc").style.backgroundColor="black"
    document.querySelector(".graphc").style.color="rgb(107, 114, 128)"
    document.querySelector(".graphlc>svg").style.color="rgb(107, 114, 128)"
}

//save icon hover effect
function savehover(){
    document.querySelector(".savec").style.backgroundColor="rgba(96, 165, 250,0.193)"
    document.querySelector(".savec>svg").style.color="rgb(96, 165, 250)"
}
function saveout(){
    document.querySelector(".savec").style.backgroundColor="black"
    document.querySelector(".savec>svg").style.color="rgb(107, 114, 128)"
}

//sharec icon hover effect function
function sharehover(){
    document.querySelector(".sharec").style.backgroundColor="rgba(96, 165, 250,0.193)"
    document.querySelector(".sharec>svg").style.color="rgb(96, 165, 250)"
}
function shareout(){
    document.querySelector(".sharec").style.backgroundColor="black"
    document.querySelector(".sharec>svg").style.color="rgb(107, 114, 128)"
}