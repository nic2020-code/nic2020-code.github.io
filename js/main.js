function showModal() {

    var modalBlock = document.querySelector(".e-background-modal.e-hidden");
    var closeModalButton = document.querySelector(".e-close-button");

    modalBlock.classList.remove("e-hidden")

    closeModalButton.addEventListener('click', function() {
        modalBlock.classList.add("e-hidden")
    })

}

function rotateArrow() {
    var userArrow = document.querySelector(".user-arrow");
    if (!userArrow.classList.contains("rotate")) {
        userArrow.classList.add("rotate")
    } else userArrow.classList.remove("rotate");
}

function currentPage() {

    var navContainer = document.querySelector(".navbar-list-menu");
    var navItems = navContainer.querySelector(".navbar-list-item");

    for (var i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener("click", function() {
            var current = document.querySelector(".navbar-list-item.active");
            current[0].className = current[0].className.replace("active", "");
            this.className += "active";
        });
    }
    
}