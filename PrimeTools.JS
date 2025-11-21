// script.js
document.querySelectorAll('.tools-container button').forEach(btn => {
    btn.addEventListener('click', () => {
        alert(`L'outil "${btn.textContent}" sera bientôt disponible !`);
    });
});
