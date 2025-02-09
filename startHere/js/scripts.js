// grab the whole URL href
const currentUrl = window.location.href;

//divide the URL in two halves 
const everything = currentUrl.split('?')

//Grab just the second part
let formData = everything[1].split('&');

function show(cup) {
    console.log(cup)
    formData.forEach((element) => {
        console.log(element)
        if (element.startsWith(cup)) {
            result = element.split('=')[1].replace("%40", "@");
        }
    })
    return (result)
}

const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
<p>Apointment for ${show('first')} ${show('last')}</p>
<p>Proxy ${show('ordinance')} on ${show('fecha')} in the ${show('location')} </p>
<p>Your phone: ${show('phone')}</p>
<p href="mailto:juan@gmail.com">Your email: ${show('email')}</p>
`;

