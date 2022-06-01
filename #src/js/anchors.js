const anchorElements = document.querySelectorAll(".anchor");
for (let anchorElement of anchorElements){
    anchorElement.addEventListener("click", function(e){
        e.preventDefault();

        const destination = anchorElement.dataset.anchor;
        document.querySelector('' + destination).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        
        closeBurgerMenu();
    });
}