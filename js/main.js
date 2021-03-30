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

    var url = window.location.href;

    $(".navbar-left a").forEach(function() {

        if (url == (this.href)) {

            $(this).closest(".navbar-list-item").addClass("active");
            $(this).closest(".navbar-list-item").parent().parent().addClass("active");

        }
    });
    
}

function showToggleMenu() {
    $(".side-toggle-menu").toggle('500', "swing");
}

function currentPageMenu() {

    var url = window.location.href;

    $(".e-side-menu a").forEach(function() {

        if (url == (this.href)) {

            $(this).closest(".side-list-item").addClass("active");
            $(this).closest(".side-list-item").parent().parent().addClass("active");

        }
    });
    
}