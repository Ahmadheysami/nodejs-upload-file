const userLoginBtn = document.getElementById("loginBtn")
const loginModal = document.querySelector(".modal.signin")
const modalClose = document.querySelector(".modal-close")

function openLoginModal(e) {
    e.preventDefault();
    loginModal.classList.add("show")
}

function closeModal() {
    let target = this.dataset.target
    document.querySelector(target).classList.remove('show')
}

userLoginBtn.addEventListener("click", openLoginModal)
modalClose.addEventListener("click", closeModal)