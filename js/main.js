// Sample cities data
const cities = [
    "Berlin", "London", "New York", "Paris", "Tokyo",
    "Barcelona", "Amsterdam", "Singapore", "Sydney", "Toronto",
    "Lisbon", "Dubai", "Hong Kong", "Miami", "Los Angeles",
    "Chicago", "Austin", "Berlin", "Vienna", "Madrid",
    "Rome", "Milan", "Stockholm", "Copenhagen", "Zurich"
];

// Populate cities grid
function populateCities() {
    const cityGrid = document.querySelector('.city-grid');
    if (!cityGrid) return;
    
    cityGrid.innerHTML = cities.map(city => `
        <div class="city-card">
            <h3>${city}</h3>
            <p>View apartments</p>
        </div>
    `).join('');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    populateCities();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
