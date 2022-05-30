let upBtn = document.getElementById('upbtn');
upBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});