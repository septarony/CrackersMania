// Otomatis buka WhatsApp saat klik "Pesan Sekarang"
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if(this.textContent === "Pesan Sekarang") {
            e.preventDefault();
            const productName = this.parentElement.querySelector('h3').textContent;
            const waMessage = `Halo! Saya mau pesan ${productName}, bisa minta info lebih lanjut?`;
            window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(waMessage)}`, '_blank');
        }
    });
});