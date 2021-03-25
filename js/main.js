function showModal() {

    var modalBlock = document.querySelector(".e-background-modal.e-hidden");
    var closeModalButton = document.querySelector(".e-close-button");

    modalBlock.classList.remove("e-hidden")

    closeModalButton.addEventListener('click', function() {
        modalBlock.classList.add("e-hidden")
    })

}