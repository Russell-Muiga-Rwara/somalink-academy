// ======================================
// SOMALINK FUTURES SCRIPT
// ======================================

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initContactForm();
    initResourceSearch();
    initTooltips();
    initCounters();
    initBackToTop();
});

// ======================================
// DARK MODE
// ======================================

function initTheme() {
    const themeToggle = document.getElementById("themeToggle");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    updateThemeIcon();

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            const currentTheme =
                document.body.classList.contains("dark-mode")
                    ? "dark"
                    : "light";

            localStorage.setItem("theme", currentTheme);

            updateThemeIcon();
        });
    }
}

function updateThemeIcon() {
    const icon = document.querySelector("#themeToggle i");

    if (!icon) return;

    if (document.body.classList.contains("dark-mode")) {
        icon.className = "bi bi-sun-fill";
    } else {
        icon.className = "bi bi-moon-stars-fill";
    }
}

// ======================================
// CONTACT FORM VALIDATION
// ======================================

function initContactForm() {
    const form = document.getElementById("contactForm");

    if (!form) return;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const successAlert = document.getElementById("successAlert");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let valid = true;

        clearValidation();

        if (name.value.trim() === "") {
            invalidate(name);
            valid = false;
        } else {
            validate(name);
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {
            invalidate(email);
            valid = false;
        } else {
            validate(email);
        }

        if (subject.value.trim() === "") {
            invalidate(subject);
            valid = false;
        } else {
            validate(subject);
        }

        if (message.value.trim().length < 20) {
            invalidate(message);
            valid = false;
        } else {
            validate(message);
        }

        if (valid) {
            if (successAlert) {
                successAlert.classList.remove("d-none");

                setTimeout(() => {
                    successAlert.classList.add("d-none");
                }, 5000);
            }

            form.reset();

            document
                .querySelectorAll(".is-valid")
                .forEach((el) => {
                    el.classList.remove("is-valid");
                });
        }
    });

    function clearValidation() {
        document
            .querySelectorAll(".is-invalid")
            .forEach((el) => {
                el.classList.remove("is-invalid");
            });
    }

    function validate(field) {
        field.classList.remove("is-invalid");
        field.classList.add("is-valid");
    }

    function invalidate(field) {
        field.classList.remove("is-valid");
        field.classList.add("is-invalid");
    }
}

// ======================================
// RESOURCE SEARCH
// ======================================

function initResourceSearch() {
    const searchInput =
        document.getElementById("resourceSearch");

    if (!searchInput) return;

    searchInput.addEventListener("keyup", () => {
        const filter =
            searchInput.value.toLowerCase();

        const cards =
            document.querySelectorAll(
                ".resource-card"
            );

        cards.forEach((card) => {
            const text =
                card.textContent.toLowerCase();

            if (text.includes(filter)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// ======================================
// BOOTSTRAP TOOLTIPS
// ======================================

function initTooltips() {
    const tooltipTriggerList =
        document.querySelectorAll(
            '[data-bs-toggle="tooltip"]'
        );

    [...tooltipTriggerList].forEach((el) => {
        new bootstrap.Tooltip(el);
    });
}

// ======================================
// COUNTER ANIMATION
// ======================================

function initCounters() {
    const counters =
        document.querySelectorAll(".counter");

    counters.forEach((counter) => {
        const target =
            +counter.dataset.target;

        const speed = 200;

        const updateCounter = () => {
            const current =
                +counter.innerText.replace(
                    /,/g,
                    ""
                );

            const increment =
                Math.ceil(target / speed);

            if (current < target) {
                counter.innerText =
                    (
                        current + increment
                    ).toLocaleString();

                setTimeout(
                    updateCounter,
                    10
                );
            } else {
                counter.innerText =
                    target.toLocaleString() +
                    "+";
            }
        };

        updateCounter();
    });
}

// ======================================
// BACK TO TOP BUTTON
// ======================================

function initBackToTop() {
    const backToTop =
        document.getElementById(
            "backToTop"
        );

    if (!backToTop) return;

    window.addEventListener(
        "scroll",
        () => {
            if (window.scrollY > 300) {
                backToTop.style.display =
                    "block";
            } else {
                backToTop.style.display =
                    "none";
            }
        }
    );

    backToTop.addEventListener(
        "click",
        () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    );
}