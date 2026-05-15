/**
 * 1. ONE-PAGE SMOOTH SCROLLING
 * Navigiert sanft zu den Ankern in der URL
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/**
 * 2. PROJEKT-FILTER LOGIK
 */
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Aktiven Status der Buttons wechseln
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                // Kurze Verzögerung für Fade-In Animation
                setTimeout(() => card.style.opacity = '1', 10);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    });
});

/**
 * 3. OVERLAY LOGIK (OPEN/CLOSE)
 */
const overlay = document.getElementById('project-overlay');

function openOverlay(projectId) {
    overlay.classList.remove('hidden');
    document.body.classList.add('no-scroll'); // Hintergrund-Scrollen deaktivieren

    // Hier könntest du den Inhalt basierend auf projectId laden
    // Für diesen Export nutzen wir einen Platzhalter-Inhalt
    document.getElementById('overlay-content').innerHTML = `
        <div class="p-10">
            <h2 class="text-4xl font-black mb-6">Case Study: ${projectId.replace('-', ' ')}</h2>
            <div class="aspect-video bg-black rounded-xl mb-10 overflow-hidden">
                <iframe class="w-full h-full" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0"></iframe>
            </div>
            <div class="grid grid-cols-3 gap-10">
                <div class="col-span-2">
                    <h3 class="text-[#02dba4] font-bold mb-4 uppercase">The Challenge</h3>
                    <p class="text-gray-400 mb-8">Detaillierte Beschreibung des Projekts, der Ziele und deiner Herangehensweise...</p>
                </div>
                <div class="space-y-4">
                    <div><span class="text-xs text-gray-500 block">ROLE</span> Lead Designer</div>
                    <div><span class="text-xs text-gray-500 block">TOOLS</span> After Effects, C4D</div>
                </div>
            </div>
        </div>
    `;
}

function closeOverlay() {
    overlay.classList.add('hidden');
    document.body.classList.add('no-scroll'); // Reaktiviert Scrollen
    document.body.classList.remove('no-scroll');
}

// Schließen via ESC-Taste
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeOverlay();
});
