const jsonFile = '../chamber/data/members.json';

const container = document.getElementById('business-container');

function createBusinessCard(business) {
    const card = document.createElement('div');
    card.className = 'business-card';

    // Create elements
    const logo = document.createElement('img');
    logo.src = business.iconFile;
    logo.alt = `${business.name} Logo`;


    const name = document.createElement('h3');
    name.textContent = business.name;

    const phone = document.createElement('p');
    phone.textContent = `PHONE: ${business.phone}`;

    const email = document.createElement('p');
    email.textContent = `EMAIL: ${business.email}`

    // Crear y agregar el enlace al sitio web
    const link = document.createElement('a');
    link.href = business.website;
    link.textContent = `URL: ${business.website.replace(/^]https?:\/\//, '')}`;
    link.target = '_blank';

    card.appendChild(name);
    card.appendChild(logo);
    card.appendChild(email);
    card.appendChild(phone);
    card.appendChild(link);

    return card;
}

// toogle view to change card/list
const viewSwitch = document.getElementById('viewSwitch');
const gallery = document.getElementById('business-container');

viewSwitch.addEventListener('change', () => {
    // Toggle between "cards" and "list" classes
    gallery.classList.toggle('cards');
    gallery.classList.toggle('list');

});

fetch(jsonFile)
    .then(response => {
        if (!response.ok) throw new Error('Error cargando el archivo JSON');
        return response.json();
    })
    .then(data => {
        data.forEach(business => {
            const card = createBusinessCard(business);
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error:', error));


