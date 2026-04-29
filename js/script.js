// js/script.js

// ========== VALIDASI FORM CONTACT ==========
function validateContactForm(event) {
    event.preventDefault();
    
    // Ambil nilai dari form
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    
    // Reset error message
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('messageError').innerHTML = '';
    
    let isValid = true;
    
    // Validasi Nama
    if (name === '') {
        document.getElementById('nameError').innerHTML = 'Nama harus diisi!';
        isValid = false;
    } else if (name.length < 3) {
        document.getElementById('nameError').innerHTML = 'Nama minimal 3 karakter!';
        isValid = false;
    }
    
    // Validasi Email
    if (email === '') {
        document.getElementById('emailError').innerHTML = 'Email harus diisi!';
        isValid = false;
    } else if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').innerHTML = 'Email tidak valid (harus mengandung @ dan .)!';
        isValid = false;
    }
    
    // Validasi Pesan
    if (message === '') {
        document.getElementById('messageError').innerHTML = 'Pesan harus diisi!';
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('messageError').innerHTML = 'Pesan minimal 10 karakter!';
        isValid = false;
    }
    
    // Jika valid, tampilkan alert sukses
    if (isValid) {
        let alertDiv = document.getElementById('liveAlert');
        alertDiv.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Terima kasih, ${name}!</strong> Pesan Anda berhasil dikirim!
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Scroll ke alert
        alertDiv.scrollIntoView({ behavior: 'smooth' });
        
        // Hilangkan alert setelah 5 detik
        setTimeout(() => {
            let alert = document.querySelector('.alert');
            if (alert) {
                alert.remove();
            }
        }, 5000);
    }
    
    return isValid;
}

// ========== GALLERY MODAL ==========
function showModal(imageSrc, title) {
    let modalImage = document.getElementById('modalImage');
    let modalTitle = document.getElementById('modalGalleryLabel');
    
    modalImage.src = imageSrc;
    modalTitle.innerHTML = title;
    
    let modal = new bootstrap.Modal(document.getElementById('galleryModal'));
    modal.show();
}

// ========== SET ACTIVE NAVIGATION ==========
function setActiveNav() {
    let currentPage = window.location.pathname.split('/').pop();
    if (currentPage === '' || currentPage ===  'index.html') {
        currentPage = 'index.html';
    }
    
    let navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        let href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

// Panggil saat halaman load
document.addEventListener('DOMContentLoaded', function() {
    setActiveNav();
    console.log('Website portofolio siap!');
});