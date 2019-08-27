var domAccordion = document.querySelector('.tt-accordion-header');
if (domAccordion != undefined) {
    domAccordion.onclick = (e) => {

        if (domAccordion.classList.contains("tt-accordion-header-active")) {
            domAccordion.classList.remove("tt-accordion-header-active");
            document.querySelector(".tt-accordion-icon").classList.replace("fa-chevron-up", "fa-chevron-down");
        } else {
            domAccordion.classList.add("tt-accordion-header-active");
            document.querySelector(".tt-accordion-icon").classList.replace("fa-chevron-down", "fa-chevron-up");
        }
    }
}