/* =====================================================
   LUMÉ BEAUTY STUDIO
   Main JavaScript
   ===================================================== */


/* =====================================================
   MOBILE NAVIGATION
   ===================================================== */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuButton.querySelector("i");

        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });


    // Close menu after clicking a link

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menuButton.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* =====================================================
   NAVBAR ON SCROLL
   ===================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =====================================================
   REVIEW SLIDER
   ===================================================== */

const reviews = document.querySelectorAll(".review");

const previousReview = document.getElementById("prevReview");
const nextReview = document.getElementById("nextReview");

let currentReview = 0;


function showReview(index) {

    if (!reviews.length) return;

    reviews.forEach(review => {
        review.classList.remove("active");
    });

    reviews[index].classList.add("active");

}


if (nextReview) {

    nextReview.addEventListener("click", () => {

        currentReview++;

        if (currentReview >= reviews.length) {
            currentReview = 0;
        }

        showReview(currentReview);

    });

}


if (previousReview) {

    previousReview.addEventListener("click", () => {

        currentReview--;

        if (currentReview < 0) {
            currentReview = reviews.length - 1;
        }

        showReview(currentReview);

    });

}


/* =====================================================
   AUTOMATIC REVIEW SLIDER
   ===================================================== */

let reviewTimer;

function startReviewSlider() {

    if (reviews.length <= 1) return;

    reviewTimer = setInterval(() => {

        currentReview++;

        if (currentReview >= reviews.length) {
            currentReview = 0;
        }

        showReview(currentReview);

    }, 5000);

}

startReviewSlider();


/* =====================================================
   BOOKING FORM
   ===================================================== */

const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;


        if (!name || !phone || !service || !date || !time) {

            if (formMessage) {
                formMessage.textContent =
                    "Please fill in all the required fields.";
            }

            return;
        }


        // Basic phone validation

        const phoneDigits = phone.replace(/\D/g, "");

        if (phoneDigits.length < 10) {

            if (formMessage) {
                formMessage.textContent =
                    "Please enter a valid phone number.";
            }

            return;
        }


        if (formMessage) {

            formMessage.textContent =
                `Thank you, ${name}! Your appointment request has been received.`;

        }


        // Reset form

        bookingForm.reset();

    });

}


/* =====================================================
   DATE INPUT — PREVENT PAST DATES
   ===================================================== */

const dateInput = document.getElementById("date");

if (dateInput) {

    const today = new Date();

    const year = today.getFullYear();

    const month = String(today.getMonth() + 1).padStart(2, "0");

    const day = String(today.getDate()).padStart(2, "0");

    const todayString = `${year}-${month}-${day}`;

    dateInput.min = todayString;

}


/* =====================================================
   SMOOTH SCROLL
   ===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =====================================================
   IMAGE LOAD EFFECT
   ===================================================== */

const images = document.querySelectorAll("img");

images.forEach(image => {

    image.addEventListener("load", () => {

        image.classList.add("loaded");

    });

});


/* =====================================================
   WHATSAPP BOOKING
   ===================================================== */

/*
   Change this number to the salon owner's WhatsApp number.

   Format:
   Country code + number
   Example:
   919876543210

   Do NOT use:
   +91
   spaces
   brackets
   hyphens
*/

const salonWhatsApp = "919876543210";


function openWhatsAppBooking() {

    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const serviceInput = document.getElementById("service");
    const dateInputBooking = document.getElementById("date");
    const timeInput = document.getElementById("time");


    const name = nameInput ? nameInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.trim() : "";
    const service = serviceInput ? serviceInput.value : "";
    const date = dateInputBooking ? dateInputBooking.value : "";
    const time = timeInput ? timeInput.value : "";


    let message =
        "Hello LUMÉ Beauty Studio,%0A%0A" +
        "I would like to book an appointment.%0A%0A";


    if (name) {
        message += `Name: ${name}%0A`;
    }

    if (phone) {
        message += `Phone: ${phone}%0A`;
    }

    if (service) {
        message += `Service: ${service}%0A`;
    }

    if (date) {
        message += `Preferred Date: ${date}%0A`;
    }

    if (time) {
        message += `Preferred Time: ${time}%0A`;
    }


    const whatsappURL =
        `https://wa.me/${salonWhatsApp}?text=${message}`;


    window.open(
        whatsappURL,
        "_blank"
    );

}


/* =====================================================
   CONSOLE MESSAGE
   ===================================================== */

console.log(
    "LUMÉ Beauty Studio website loaded successfully."
);
