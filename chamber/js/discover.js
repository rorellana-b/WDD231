const file = '../chamber/data/items.json';

const cardContainer = document.getElementById('cards');
async function fetchItems() {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error("Failed to load JSON");

        const data = await response.json();
        displayItems(data.items);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayItems(items) {
    items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("discover-cards");

        card.innerHTML = `
            <h2>${item.name}</h2>
            <figure><img src="${item.image}" alt="${item.name}"></figure>
            <address>${item.address}</address>
            <p>${item.description}</p>
            <button>Learn More</button>
        `;

        cardContainer.appendChild(card);
    });
}


document.addEventListener("DOMContentLoaded", fetchItems);


function calculateDaysSinceLastVisit(lastVisitDate) {
    const currentDate = new Date();
    const lastVisit = new Date(parseInt(lastVisitDate));  // Convert timestamp to Date object


    if (isNaN(lastVisit.getTime())) {
        return NaN;
    }

    const diffInTime = currentDate - lastVisit;
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
    return diffInDays;
}

function displayVisit() {
    const visitMessageElement = document.getElementById('visitMessage');
    const lastVisit = localStorage.getItem('lastVisit');

    if (lastVisit) {
        const daysSinceLastVisit = calculateDaysSinceLastVisit(lastVisit);

        if (isNaN(daysSinceLastVisit)) {
            visitMessageElement.textContent = "Oops, something went wrong with the visit date.";
        } else if (daysSinceLastVisit < 1) {
            visitMessageElement.textContent = "Back so soon! Awesome!";
        } else if (daysSinceLastVisit === 1) {
            visitMessageElement.textContent = "You last visited 1 day ago.";
        } else {
            visitMessageElement.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
        }
    } else {
        visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem('lastVisit', Date.now());
}

displayVisit();