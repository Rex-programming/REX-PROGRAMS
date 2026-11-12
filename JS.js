
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute(
        'aria-label',
        isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );
});

navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation menu');
    });
});


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        const isAlreadyOpen = item.classList.contains("active");

        // Close all questions
        faqItems.forEach(faq => {
            faq.classList.remove("active");
            faq.querySelector(".faq-question")
                .setAttribute("aria-expanded", "false");
            faq.querySelector(".faq-icon").textContent = "+";
        });

        // Open selected question if it was closed
        if (!isAlreadyOpen) {
            item.classList.add("active");
            question.setAttribute("aria-expanded", "true");
            item.querySelector(".faq-icon").textContent = "−";
        }

    });

});


const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value;
        const email = document.getElementById("contactEmail").value;
        const message = document.getElementById("contactMessage").value;

        const subject = encodeURIComponent(
            "PRIME Contact - " + name
        );

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

        window.location.href =
            "mailto:hello@prime.app?subject=" + subject +
            "&body=" + body;

    });

}

/* =========================================
   PRIME BOOKING SYSTEM - DEMO
========================================= */

const bookingModal = document.getElementById("booking-modal");
const bookingOverlay = document.getElementById("booking-overlay");
const bookingClose = document.getElementById("booking-close");

const bookingImage = document.getElementById("booking-image");
const bookingTitle = document.getElementById("booking-title");
const bookingLocation = document.getElementById("booking-location");
const bookingPrice = document.getElementById("booking-price");
const bookingSport = document.getElementById("booking-sport");

const bookingDates = document.getElementById("booking-dates");
const bookingTimes = document.getElementById("booking-times");

const bookingConfirm = document.getElementById("booking-confirm");
const bookingContent = document.getElementById("booking-content");
const bookingSuccess = document.getElementById("booking-success");
const confirmationDetails = document.getElementById("confirmation-details");
const bookingDone = document.getElementById("booking-done");

const availableTimes = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM"
];

let selectedDate = null;
let selectedTime = null;
let selectedCourt = null;


// Get a local date without UTC conversion

function getDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


// Generate the next three dates

function generateBookingDates() {
    bookingDates.innerHTML = "";

    const today = new Date();

    for (let i = 0; i < 3; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);

        const button = document.createElement("button");
        button.type = "button";
        button.className = "booking-date";

        const label = i === 0
            ? "Today"
            : i === 1
                ? "Tomorrow"
                : new Intl.DateTimeFormat("en-US", {
                    weekday: "short",
                    day: "numeric"
                }).format(date);

        button.textContent = label;

        button.addEventListener("click", () => {
            selectedDate = date;
            selectedTime = null;

            document.querySelectorAll(".booking-date").forEach((item) => {
                item.classList.remove("active");
            });

            button.classList.add("active");

            document.querySelectorAll(".booking-time").forEach((item) => {
                item.classList.remove("active");
            });

            bookingConfirm.disabled = true;
        });

        bookingDates.appendChild(button);

        if (i === 0) {
            selectedDate = date;
            button.classList.add("active");
        }
    }
}


// Generate time slots

function generateBookingTimes() {
    bookingTimes.innerHTML = "";

    availableTimes.forEach((time) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "booking-time";
        button.textContent = time;

        button.addEventListener("click", () => {
            selectedTime = time;

            document.querySelectorAll(".booking-time").forEach((item) => {
                item.classList.remove("active");
            });

            button.classList.add("active");

            bookingConfirm.disabled = !selectedDate;
        });

        bookingTimes.appendChild(button);
    });
}


// Identify the sport

function identifySport(name) {
    const lowerName = name.toLowerCase();

    if (lowerName.includes("pool")) return "SWIMMING";
    if (lowerName.includes("volley")) return "VOLLEYBALL";
    if (lowerName.includes("turf")) return "FOOTBALL";

    return "SPORT";
}


// Open booking window

function openBooking(card) {
    selectedCourt = {
        name: card.querySelector("h3").textContent,
        location: card.querySelector(".court-location").textContent,
        price: card.querySelector(".court-price strong").textContent,
        image: card.querySelector(".court-image img").src,
        rating: card.querySelector(".court-rating")?.textContent || ""
    };

    bookingTitle.textContent = selectedCourt.name;
    bookingLocation.textContent =
        `${selectedCourt.location} · ${selectedCourt.rating}`;

    bookingPrice.textContent = selectedCourt.price;
    bookingImage.src = selectedCourt.image;
    bookingSport.textContent = identifySport(selectedCourt.name);

    bookingImage.alt = selectedCourt.name;

    bookingContent.hidden = false;
    bookingSuccess.hidden = true;

    selectedTime = null;

    generateBookingDates();
    generateBookingTimes();

    bookingConfirm.disabled = true;

    bookingModal.hidden = false;
    document.body.style.overflow = "hidden";
}


// Close booking window

function closeBooking() {
    bookingModal.hidden = true;
    document.body.style.overflow = "";
}

document.querySelectorAll(".book-court").forEach((button) => {
    button.addEventListener("click", () => {
        const card = button.closest(".court-card");

        if (card) {
            openBooking(card);
        }
    });
});

bookingClose.addEventListener("click", closeBooking);
bookingOverlay.addEventListener("click", closeBooking);
bookingDone.addEventListener("click", closeBooking);


// Close with Escape

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !bookingModal.hidden) {
        closeBooking();
    }
});


// Simulated reservation confirmation

bookingConfirm.addEventListener("click", () => {
    if (!selectedCourt || !selectedDate || !selectedTime) {
        return;
    }

    const formattedDate = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    }).format(selectedDate);

    const demoCode = "PRIME-DEMO-" +
        Date.now().toString().slice(-6);

    confirmationDetails.innerHTML = `
        <div><strong>Court:</strong> ${selectedCourt.name}</div>
        <div><strong>Date:</strong> ${formattedDate}</div>
        <div><strong>Time:</strong> ${selectedTime}</div>
        <div><strong>Price:</strong> ${selectedCourt.price} / hour</div>
        <div><strong>Reference:</strong> ${demoCode}</div>
    `;

    bookingContent.hidden = true;
    bookingSuccess.hidden = false;
});
