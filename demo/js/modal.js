if (document.querySelector(".tt-btn-primary")) {
    document.querySelector(".tt-btn-primary").onclick = (e) => {
        document.querySelector("#confirm").classList.add("show")
    }
}

if (document.querySelector(".tt-btn-warning")) {
    document.querySelector(".tt-btn-warning").onclick = (e) => {
        document.querySelector("#modal").classList.add("show")
    }
}

if (document.querySelector(".tt-close")) {
    document.querySelector(".tt-close").onclick = (e) => {
        document.querySelector("#confirm").classList.remove("show")
    }
}

if (document.querySelector(".tt-modal-close")) {
    document.querySelector(".tt-modal-close").onclick = (e) => {
        document.querySelector("#modal").classList.remove("show")
    }
}
