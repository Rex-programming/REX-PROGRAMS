
// ==========================================
// PRIME COMMUNITY - DATA
// ==========================================

const teams = [
    {
        sport: "football",
        sportName: "5-A-SIDE FOOTBALL",
        icon: "⚽",
        rating: "4.8",
        location: "EL COCO",
        name: "El Coco Court",
        address: "El Coco, La Chorrera, Panama Oeste",
        description: "Artificial turf pitches with professional lighting and locker rooms.",
        price: "$18/hour",
        members: "48 members"
    },
    {
        sport: "padel",
        sportName: "PADEL",
        icon: "🎾",
        rating: "4.9",
        location: "LA CHORRERA",
        name: "La Chorrera Padel Club",
        address: "La Chorrera, Panama Oeste",
        description: "4 padel courts with tempered glass and a climate-controlled lounge.",
        price: "$14/hour",
        members: "36 members"
    },
    {
        sport: "basketball",
        sportName: "BASKETBALL",
        icon: "🏀",
        rating: "4.6",
        location: "PUERTO CAIMITO",
        name: "Puerto Caimito Arena",
        address: "Puerto Caimito, La Chorrera, Panama Oeste",
        description: "Multi-purpose hall with regulation backboards and bleachers for 120 people.",
        price: "$12/hour",
        members: "52 members"
    },
    {
        sport: "volleyball",
        sportName: "VOLLEYBALL",
        icon: "🏐",
        rating: "4.7",
        location: "PLAYA LEONA",
        name: "Playa Leona Sports Hub",
        address: "Playa Leona, La Chorrera, Panama Oeste",
        description: "Volleyball court with regulation flooring and a professional adjustable net.",
        price: "$15/hour",
        members: "28 members"
    },
    {
        sport: "tennis",
        sportName: "TENNIS",
        icon: "🎾",
        rating: "4.8",
        location: "FARALLÓN",
        name: "Farallón Tennis Center",
        address: "Farallón, La Chorrera, Panama Oeste",
        description: "6 fast-clay courts with certified coaches available.",
        price: "$20/hour",
        members: "41 members"
    },
    {
        sport: "athletics",
        sportName: "ATHLETICS",
        icon: "🏃",
        rating: "4.5",
        location: "VACAMONTE",
        name: "Vacamonte Run Track",
        address: "Vacamonte, La Chorrera, Panama Oeste",
        description: "2.5 km seaside track with integrated calisthenics stations.",
        price: "Free",
        members: "63 members"
    },
    {
        sport: "football",
        sportName: "5-A-SIDE FOOTBALL",
        icon: "⚽",
        rating: "4.7",
        location: "HURTADO",
        name: "Hurtado Football Club",
        address: "Hurtado, La Chorrera, Panama Oeste",
        description: "5-a-side football team with an active league and weekly training sessions.",
        price: "$25/month",
        members: "38 members"
    },
    {
        sport: "basketball",
        sportName: "BASKETBALL",
        icon: "🏀",
        rating: "4.6",
        location: "GUÁCIMO",
        name: "Guácimo Ballers",
        address: "Guácimo, La Chorrera, Panama Oeste",
        description: "Youth basketball team with a sports development program.",
        price: "$20/month",
        members: "30 members"
    },
    {
        sport: "volleyball",
        sportName: "VOLLEYBALL",
        icon: "🏐",
        rating: "4.5",
        location: "LOS ANDES",
        name: "Los Andes Volley Squad",
        address: "Barrio Los Andes, La Chorrera, Panama Oeste",
        description: "Mixed volleyball team with friendly matches every weekend.",
        price: "$15/month",
        members: "24 members"
    },
    {
        sport: "padel",
        sportName: "PADEL",
        icon: "🎾",
        rating: "4.8",
        location: "BARRIO COLÓN",
        name: "Colón Padel Team",
        address: "Barrio Colón, La Chorrera, Panama Oeste",
        description: "Competitive padel team with monthly inter-club tournaments.",
        price: "$30/month",
        members: "22 members"
    },
    {
        sport: "tennis",
        sportName: "TENNIS",
        icon: "🎾",
        rating: "4.9",
        location: "EL TRÉBOL",
        name: "El Trébol Tennis Academy",
        address: "El Trébol, La Chorrera, Panama Oeste",
        description: "Tennis academy with classes for beginners and advanced players.",
        price: "$35/month",
        members: "33 members"
    },
    {
        sport: "athletics",
        sportName: "ATHLETICS",
        icon: "🏃",
        rating: "4.7",
        location: "CARDONA",
        name: "Cardona Runners",
        address: "Cardona, La Chorrera, Panama Oeste",
        description: "Community running group with sunrise group outings.",
        price: "Free",
        members: "45 members"
    }
];

// ==========================================
// ATHLETES DATA
// ==========================================

const athletes = [
    {
        initials: "DF",
        rating: "4.9",
        sport: "Football",
        level: "Advanced",
        name: "Diego Fábrega",
        description: "8 years coaching youth teams. Specialist in individual technique.",
        stats: [
            ["124", "Matches"],
            ["38", "Goals"],
            ["5", "Trophies"]
        ]
    },
    {
        initials: "CU",
        rating: "5.0",
        sport: "Padel",
        level: "Professional",
        name: "Camila Ureña",
        description: "Former professional padel player. Personalized lessons for all levels.",
        stats: [
            ["98", "Matches"],
            ["72", "Wins"],
            ["8", "Trophies"]
        ]
    },
    {
        initials: "RS",
        rating: "4.8",
        sport: "Athletics",
        level: "Coach",
        name: "Ricardo Solis",
        description: "Strength & conditioning coach and running guide. Progressive plans from 5K to 21K.",
        stats: [
            ["45", "Races"],
            ["1:32:10", "PR"],
            ["3", "Trophies"]
        ]
    },
    {
        initials: "MG",
        rating: "4.7",
        sport: "5-a-side Football",
        level: "Intermediate",
        name: "Mariana Gómez",
        description: "Forward for Los Halcones FC. Active player every week in El Coco.",
        stats: [
            ["42", "Matches"],
            ["21", "Goals"],
            ["2", "Trophies"]
        ]
    },
    {
        initials: "LT",
        rating: "4.6",
        sport: "Basketball",
        level: "Advanced",
        name: "Luis Torres",
        description: "Match organizer at Puerto Caimito. Point guard with great court vision.",
        stats: [
            ["87", "Matches"],
            ["412", "Points"],
            ["4", "Trophies"]
        ]
    },
    {
        initials: "AV",
        rating: "4.8",
        sport: "Padel",
        level: "Intermediate",
        name: "Andrea Vega",
        description: "Padel player in La Chorrera. Climbed 2 levels in 6 months with Prime.",
        stats: [
            ["56", "Matches"],
            ["34", "Wins"],
            ["1", "Trophy"]
        ]
    }
];

// ==========================================
// RENDER TEAMS
// ==========================================

const teamsGrid = document.getElementById("teams-grid");

function renderTeams(filter = "all") {
    if (!teamsGrid) return;

    const filteredTeams = filter === "all"
        ? teams
        : teams.filter(team => team.sport === filter);

    teamsGrid.innerHTML = filteredTeams.map(team => `
        <article class="team-card">
            <div class="team-visual ${team.sport}">
                <span class="sport-icon">${team.icon}</span>
                <span class="sport-name">${team.sportName}</span>
                <span class="team-rating">★ ${team.rating}</span>
            </div>

            <div class="team-info">
                <p class="team-location">${team.location}</p>

                <h3>${team.name}</h3>

                <p class="team-address">${team.address}</p>

                <p class="team-description">${team.description}</p>

                <div class="team-meta">
                    <span class="team-price">${team.price}</span>
                    <span class="team-members">${team.members}</span>
                </div>

                <button class="join-button"
                        type="button"
                        data-team="${teams.indexOf(team)}">
                    Join team ↗
                </button>
            </div>
        </article>
    `).join("");
}

renderTeams();

// ==========================================
// TEAM FILTERS
// ==========================================

const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        renderTeams(button.dataset.filter);
    });
});

// ==========================================
// REGISTRATION MODAL
// ==========================================

const registrationModal = document.getElementById("registration-modal");
const registrationForm = document.getElementById("registration-form");
const registrationContainer = document.getElementById("registration-form-container");
const registrationSuccess = document.getElementById("registration-success");

const selectedTeamText = document.getElementById("selected-team");
const modalClose = document.getElementById("modal-close");
const modalOverlay = document.getElementById("modal-overlay");
const successClose = document.getElementById("success-close");

function openRegistration(team) {
    if (!registrationModal) return;

    selectedTeamText.textContent = `Selected team: ${team.name}`;

    registrationContainer.hidden = false;
    registrationSuccess.hidden = true;

    registrationForm.reset();

    registrationModal.hidden = false;
    document.body.style.overflow = "hidden";

    document.getElementById("full-name").focus();
}

function closeRegistration() {
    registrationModal.hidden = true;
    document.body.style.overflow = "";
}

teamsGrid.addEventListener("click", event => {
    const button = event.target.closest(".join-button");

    if (!button) return;

    const team = teams[Number(button.dataset.team)];

    if (team) {
        openRegistration(team);
    }
});

modalClose.addEventListener("click", closeRegistration);
modalOverlay.addEventListener("click", closeRegistration);
successClose.addEventListener("click", closeRegistration);

// ==========================================
// DEMO FORM SUBMISSION
// ==========================================

registrationForm.addEventListener("submit", event => {
    event.preventDefault();

    if (!registrationForm.reportValidity()) return;

    // Demo only: no data is collected, stored or sent.
    registrationContainer.hidden = true;
    registrationSuccess.hidden = false;
});

// ==========================================
// LIVE NOW TICKER
// ==========================================

const liveActivities = [
    {
        name: "Diego Fábrega",
        status: "Available now",
        sport: "Football"
    },
    {
        name: "Camila Ureña",
        status: "Session ends 12PM",
        sport: "Padel"
    },
    {
        name: "Ricardo Solis",
        status: "Morning run · 5 slots left",
        sport: "Athletics"
    },
    {
        name: "Luis Torres",
        status: "Open court tonight",
        sport: "Basketball"
    },
    {
        name: "Andrea Vega",
        status: "Available now",
        sport: "Padel"
    },
    {
        name: "Mariana Gómez",
        status: "Match at 8PM",
        sport: "5-a-side"
    }
];

const tickerTrack = document.getElementById("ticker-track");

function createTickerCards() {
    if (!tickerTrack) return;

    const createGroup = () => `
        <div class="ticker-group">
            ${liveActivities.map(activity => `
                <article class="ticker-card">
                    <span class="ticker-status">● ${activity.status}</span>
                    <strong>${activity.name}</strong>
                    <span>${activity.sport}</span>
                </article>
            `).join("")}
        </div>
    `;

    // Two identical groups create a continuous ticker.
    tickerTrack.innerHTML = createGroup() + createGroup();
}

createTickerCards();

// ==========================================
// RENDER ATHLETES
// ==========================================

const athletesGrid = document.getElementById("athletes-grid");

function renderAthletes() {
    if (!athletesGrid) return;

    athletesGrid.innerHTML = athletes.map((athlete, index) => `
        <article class="athlete-card">
            <div class="athlete-top">
                <div class="athlete-avatar">${athlete.initials}</div>
                <span class="athlete-rating">★ ${athlete.rating}</span>
            </div>

            <div class="athlete-category">
                <span>${athlete.sport}</span>
                <span>${athlete.level}</span>
            </div>

            <h3>${athlete.name}</h3>

            <p class="athlete-description">
                ${athlete.description}
            </p>

            <div class="athlete-stats">
                ${athlete.stats.map(stat => `
                    <div class="athlete-stat">
                        <strong>${stat[0]}</strong>
                        <span>${stat[1]}</span>
                    </div>
                `).join("")}
            </div>

            <button class="profile-button"
                    type="button"
                    data-athlete="${index}">
                View profile ↗
            </button>
        </article>
    `).join("");
}

renderAthletes();

// ==========================================
// ATHLETE PROFILE MODAL
// ==========================================

const profileModal = document.createElement("div");

profileModal.className = "modal";
profileModal.hidden = true;

profileModal.innerHTML = `
    <div class="modal-overlay profile-overlay"></div>

    <div class="modal-content" role="dialog" aria-modal="true"
         aria-labelledby="profile-name">

        <button class="modal-close profile-close"
                aria-label="Close profile">×</button>

        <div class="athlete-avatar profile-avatar"></div>

        <p class="eyebrow">PRIME COMMUNITY PROFILE</p>

        <h2 id="profile-name"></h2>

        <p class="profile-sport"></p>

        <p class="modal-description profile-description"></p>

        <div class="athlete-stats profile-stats"></div>

        <p class="demo-notice">
            Demonstration profile. This is not a verified real user account.
        </p>
    </div>
`;

document.body.appendChild(profileModal);

function closeProfile() {
    profileModal.hidden = true;
    document.body.style.overflow = "";
}

athletesGrid.addEventListener("click", event => {
    const button = event.target.closest(".profile-button");

    if (!button) return;

    const athlete = athletes[Number(button.dataset.athlete)];

    if (!athlete) return;

    profileModal.querySelector(".profile-avatar").textContent =
        athlete.initials;

    profileModal.querySelector("#profile-name").textContent =
        athlete.name;

    profileModal.querySelector(".profile-sport").textContent =
        `${athlete.sport} · ${athlete.level} · ★ ${athlete.rating}`;

    profileModal.querySelector(".profile-description").textContent =
        athlete.description;

    const statsContainer = profileModal.querySelector(".profile-stats");

    statsContainer.innerHTML = athlete.stats.map(stat => `
        <div class="athlete-stat">
            <strong>${stat[0]}</strong>
            <span>${stat[1]}</span>
        </div>
    `).join("");

    profileModal.hidden = false;
    document.body.style.overflow = "hidden";
});

profileModal.querySelector(".profile-close")
    .addEventListener("click", closeProfile);

profileModal.querySelector(".profile-overlay")
    .addEventListener("click", closeProfile);

// ==========================================
// KEYBOARD CONTROLS
// ==========================================

document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    if (registrationModal && !registrationModal.hidden) {
        closeRegistration();
    }

    if (!profileModal.hidden) {
        closeProfile();
    }
});

// ==========================================
// MOBILE NAVIGATION
// ==========================================

const mobileMenu = document.getElementById("mobile-menu");
const communityHeader = document.querySelector(".community-header");

mobileMenu.addEventListener("click", () => {
    const isOpen = communityHeader.classList.toggle("menu-open");

    mobileMenu.textContent = isOpen ? "×" : "☰";
    mobileMenu.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
        communityHeader.classList.remove("menu-open");
        mobileMenu.textContent = "☰";
        mobileMenu.setAttribute("aria-expanded", "false");
    });
});
