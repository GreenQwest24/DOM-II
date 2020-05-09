const btns = document.querySelectorAll('.destination .btn'); 
btns.forEach(function (btn) {
    btn.addEventListener("mouserover" , (e) => {
        e.target.style.color = "black";
        e.target.style.background = "white";
        e.target.style.borderRadius = "0px";


    });
});