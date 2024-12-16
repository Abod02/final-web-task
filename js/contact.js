

// Initialize Google Map
function initMap() {
    const restaurantLocation = { lat: 40.73061, lng: -73.935242 }; // Replace with actual coordinates
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: restaurantLocation,
    });
    const marker = new google.maps.Marker({
        position: restaurantLocation,
        map: map,
    });
}

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const responseMessage = document.getElementById("responseMessage");

    // Check if all fields are filled
    if (name.value && email.value && message.value) {
        responseMessage.innerHTML = `<p class="text-success">Message sent successfully!</p>`;
        this.reset();
    } else {
        responseMessage.innerHTML = `<p class="text-danger">Please fill in all fields.</p>`;
    }
});
