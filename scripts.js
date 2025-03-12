// Dropdown-Menüs (Mobile)
document.querySelectorAll('.dropdown').forEach((dropdown) => {
    const trigger = dropdown.querySelector('button');
    const menu = dropdown.querySelector('.dropdown-menu');

    trigger.addEventListener('click', (e) => {
        e.stopPropagation(); // Verhindert das Schließen bei Klick auf den Button
        closeAllDropdowns(); // Schließt alle anderen Dropdowns
        menu.classList.toggle('active'); // Öffnet/Schließt das aktuelle Menü
    });
});

// Funktion zum Schließen aller Dropdowns
function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('active');
    });
}

// Schließen der Dropdowns bei Klick außerhalb
document.addEventListener('click', closeAllDropdowns);

// Verhindern des Schließens bei Klick innerhalb des Menüs
document.querySelectorAll('.dropdown-menu').forEach(menu => {
    menu.addEventListener('click', (e) => e.stopPropagation());
});

// Back-to-top Button (unverändert)
window.addEventListener('scroll', () => {
    const backToTop = document.getElementById('back-to-top');
    backToTop?.classList.toggle('opacity-0', window.scrollY < 200);
});

document.getElementById('back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark Mode Toggle (leicht angepasst, um Duplizierung zu vermeiden)
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    if (darkModeToggle) { // Check, ob der Button existiert (wichtig, da asynchron geladen)
        // Überprüfe, ob der Dark Mode im localStorage gespeichert ist
        const isDarkMode = localStorage.getItem('darkMode') === 'true';

        // Setze den Dark Mode basierend auf dem gespeicherten Zustand
        if (isDarkMode) {
            body.classList.add('dark-mode');
            darkModeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        }

        // Event Listener für den Dark Mode Button
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDarkMode = body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);

            // Wechsle das Icon zwischen Mond und Sonne
            const icon = darkModeToggle.querySelector('i');
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        });
    }
});
