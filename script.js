document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Mengganti "youremail@example.com" dengan alamat email Anda
    const mailtoLink = `mailto:hasansihombing0709@gmailcom?subject=Pesan dari ${name}&body=${encodeURIComponent(message)}`;
    
    window.location.href = mailtoLink;
});