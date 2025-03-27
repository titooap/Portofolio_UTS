// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Dapatkan nilai input
    const nama = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const pesan = this.querySelector('textarea').value;
    
    // Contoh sederhana alert (di production, gunakan form handling yang sebenarnya)
    alert(`Pesan terkirim!\n\nNama: ${nama}\nEmail: ${email}\nPesan: ${pesan}`);
    
    // Reset form
    this.reset();
});