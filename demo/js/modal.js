document.querySelector(".tt-btn-primary").onclick = (e) => {
    document.querySelector("#confirm").classList.add("show")
}

document.querySelector(".tt-btn-warning").onclick = (e) => {
    document.querySelector("#modal").classList.add("show")
}

document.querySelector(".tt-close").onclick = (e) => {
    document.querySelector("#confirm").classList.remove("show")
}
document.querySelector(".tt-modal-close").onclick = (e) => {
    document.querySelector("#modal").classList.remove("show")
}