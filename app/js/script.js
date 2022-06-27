const btnHamburgur = document.getElementById("btnHamburgur");
const overlay = document.getElementById("overlay");

btnHamburgur.addEventListener("click", function() {
    if (btnHamburgur.classList.contains("open")){
        btnHamburgur.classList.remove("open");
        overlay.style.display = "none";
    }
    else{
        btnHamburgur.classList.add("open");
        overlay.style.display = "block";
    }
})