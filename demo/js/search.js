if (document.querySelector(".tt-search-input")) {
    document.querySelector(".tt-search-input").focus = (e) => {
        document.querySelector(".tt-search .on-focus").style.display = "block"
    }
}