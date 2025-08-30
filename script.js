const featureItems = document.querySelectorAll('.item');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target); // Remove observer after fade-in (optional)
    }
});
}, {
threshold: 0.2, // 20% visible triggers animation
});

featureItems.forEach(item => {
observer.observe(item);
});

