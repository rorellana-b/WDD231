document.addEventListener("DOMContentLoaded", function () {
    // take the URL
    const params = new URLSearchParams(window.location.search);

    // take the values 
    const firstName = params.get("username") || "Not provided";
    const lastName = params.get("userlastname") || "Not provided";
    const organizationTitle = params.get("organization") || "Not provided";
    const email = params.get("email") || "Not provided";
    const phone = params.get("phone") || "Not provided";
    const businessName = params.get("businessName") || "Not provided";
    const membership = params.get("membership") || "Not selected";
    const timestamp = params.get("timestamp") || new Date().toLocaleString();

    // Create the HTML
    document.getElementById("displayData").innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Organizational Title:</strong> ${organizationTitle}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Membership Level:</strong> ${membership}</p>
        <p><strong>Submission Time:</strong> ${timestamp}</p>
    `;
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        // take the stamp time
        const timestampInput = document.getElementById("timestamp");
        timestampInput.value = new Date().toISOString();

    });
});