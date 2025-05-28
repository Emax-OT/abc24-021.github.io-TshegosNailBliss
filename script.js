/* BLOG SEARCH JS */ 

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("blogSearchInput");
    const cards = document.querySelectorAll(".blog-card");
  
    searchInput.addEventListener("keyup", function () {
      const filter = searchInput.value.toLowerCase();
  
      cards.forEach(card => {
        const title = card.querySelector(".blog-title").textContent.toLowerCase();
        card.style.display = title.includes(filter) ? "block" : "none";
      });
    });
  });

/* SUCCESS MESSAGE FOR BOOKING FORM */
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const dateInput = document.getElementById('date');
    const selectedDate = new Date(dateInput.value);
    const today = new Date();
    today.setHours(0,0,0,0);

    if (selectedDate < today) {
        alert('Please select a valid date. You cannot book for a past date.');
        dateInput.focus();
        return;
    }

    // AJAX submission to Formspree
    const form = this;
    const data = new FormData(form);
    fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            const msg = document.getElementById('success-message');
            msg.classList.remove('hidden');
            void msg.offsetWidth;
            msg.classList.add('show');
            form.reset();
        } else {
            alert('There was a problem submitting your booking. Please try again.');
        }
    }).catch(() => {
        alert('There was a problem submitting your booking. Please try again.');
    });
});

/* HAMBURGER RESPONSIVENESS */
document.getElementById('navbar-toggle').onclick = function() {
    document.getElementById('navbar-links').classList.toggle('active');
};