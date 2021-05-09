const questions = document.querySelectorAll(".faq__question");
const box = document.querySelector(".box-desktop");

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
        const answer = this.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }

        // Bolden question when open
        this.classList.toggle("is-open");

        // Move @ box when open
        box.classList.toggle("move-box");
    });
}
