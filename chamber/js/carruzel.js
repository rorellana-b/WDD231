document.addEventListener("DOMContentLoaded", () => {
    const spotlightContainer = document.getElementById("business-container");

    function loadSpotlight() {
        fetch("../chamber/data/members.json")
            .then(response => response.json())
            .then(data => {
                const shuffled = data.sort(() => 0.5 - Math.random());
                const selectedBusinesses = shuffled.slice(0, 3);

                const spotlightHTML = selectedBusinesses.map(business => `
                    <div class="business-spotlight">
                        <img src="${business.iconFile}" alt="${business.name} logo">
                        <h3>${business.name}</h3>
                        <p>${business.otherInfo.description}</p>
                        <a href="${business.website}" target="_blank">Visit Website</a>
                    </div>
                `).join("");

                spotlightContainer.innerHTML = `
                    <section id="spotlight">
                        <div class="spotlight-container">
                            ${spotlightHTML}
                        </div>
                    </section>
                `;
            })
            .catch(error => console.error("Error loading business data:", error));
    }

    loadSpotlight();
    setInterval(loadSpotlight, 8000);
}); 