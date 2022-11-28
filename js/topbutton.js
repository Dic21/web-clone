let topButton = document.querySelector("#toTopBtn");

window.onscroll = function(){
    scrollFunction();
}

function scrollFunction(){
    if(document.body.scrollTop > 20|| document.documentElement.scrollTop>20){
        topButton.style.display = "block";
    }else{
        topButton.style.display = "none";
    }
}

function topFunction(){
    window.scrollTo({top: 0, behavior: 'smooth'}); 
}