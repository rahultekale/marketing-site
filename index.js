function submitForm() {
    // Basic form validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (!name || !email || !phone) {
        alert("Please fill in all fields");
        return;
    }

    // Simulate form submission (you can replace this with actual form submission logic)
    alert(`Thank you, ${name}! Our experts will contact you soon.`);
    document.getElementById("quote-form").reset();
}
