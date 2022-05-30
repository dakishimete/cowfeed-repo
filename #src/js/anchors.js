const anchors = document.querySelectorAll("a[href*='#']");
for (let anchor of anchors){
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        const destination = anchor.getAttribute('href');
        document.querySelector('' + destination).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        closeBurgerMenu();
    });
}