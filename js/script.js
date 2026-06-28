document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (!form) return;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const successAlert = document.getElementById("successAlert");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let valid = true;

        // ---------- Name ----------

        if (name.value.trim() === "") {

            name.classList.add("is-invalid");
            valid = false;

        } else {

            name.classList.remove("is-invalid");
            name.classList.add("is-valid");

        }

        // ---------- Email ----------

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {

            email.classList.add("is-invalid");
            valid = false;

        } else {

            email.classList.remove("is-invalid");
            email.classList.add("is-valid");

        }

        // ---------- Subject ----------

        if (subject.value.trim() === "") {

            subject.classList.add("is-invalid");
            valid = false;

        } else {

            subject.classList.remove("is-invalid");
            subject.classList.add("is-valid");

        }

        // ---------- Message ----------

        if (message.value.trim().length < 20) {

            message.classList.add("is-invalid");
            valid = false;

        } else {

            message.classList.remove("is-invalid");
            message.classList.add("is-valid");

        }

        // ---------- Success ----------

        if (valid) {

            successAlert.classList.remove("d-none");

            form.reset();

            name.classList.remove("is-valid");
            email.classList.remove("is-valid");
            subject.classList.remove("is-valid");
            message.classList.remove("is-valid");

            setTimeout(function () {

                successAlert.classList.add("d-none");

            }, 5000);

        }

    });

});

// =========================
// Dark Mode Toggle
// =========================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    // Apply saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    });

}