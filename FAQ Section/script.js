
function toggle(index) {
    let get_faq = document.getElementById("faq" + index);
    let caretIcon = document.querySelector("li:nth-child(" + index + ") .bi-caret-down-fill");
    let crossIcon = document.querySelector("li:nth-child(" + index + ") .bi-x");

        if (get_faq.style.display === "none") {
            get_faq.style.display = "block";
            crossIcon.style.display = "inline-block";
            caretIcon.style.display = "none";
        } else {
            get_faq.style.display = "none";
            caretIcon.style.display = "inline-block";
            crossIcon.style.display = "none";
        }
}