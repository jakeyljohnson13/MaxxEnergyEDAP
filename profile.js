let profile = {
    firstName: "John",
    lastName: "Doe",
    phone: "123-456-7890",
    email: "john.doe@example.com",
    address: "123 Main Street",
    city: "Los Angeles",
    state: "CA",
    zip: "90001"
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("firstName").value = profile.firstName;
    document.getElementById("lastName").value = profile.lastName;
    document.getElementById("phone").value = profile.phone;
    document.getElementById("email").value = profile.email;
    document.getElementById("address").value = profile.address;
    document.getElementById("city").value = profile.city;
    document.getElementById("state").value = profile.state;
    document.getElementById("zip").value = profile.zip;

    updateAboutSection();
});

function updateAboutSection() {
    document.getElementById("displayName").textContent = profile.firstName + " " + profile.lastName;
    document.getElementById("displayEmail").textContent = profile.email;
    document.getElementById("displayPhone").textContent = profile.phone;
    document.getElementById("displayAddress").textContent = 
        `${profile.address}, ${profile.city}, ${profile.state} ${profile.zip}`;
}

function saveProfile() {
    // Get values from form inputs
    profile.firstName = document.getElementById("firstName").value;
    profile.lastName = document.getElementById("lastName").value;
    profile.phone = document.getElementById("phone").value;
    profile.email = document.getElementById("email").value;
    profile.address = document.getElementById("address").value;
    profile.city = document.getElementById("city").value;
    profile.state = document.getElementById("state").value;
    profile.zip = document.getElementById("zip").value;

    updateAboutSection();

    alert("Profile saved!\n\n" + JSON.stringify(profile, null, 2));
}