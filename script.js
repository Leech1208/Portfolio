// WICHTIG: Warten bis der DOM fertig geladen ist
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. FILTER LOGIK (mit Support für mehrere Kategorien)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Aktiven Status wechseln
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                // Unterstützt mehrere Kategorien (space-separated)
                const categories = card.getAttribute('data-category').split(' ');
                
                // Zeige Karte wenn "all" oder wenn die Kategorie enthalten ist
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'block';
                    setTimeout(() => { card.style.opacity = '1'; }, 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => { card.style.display = 'none'; }, 300);
                }
            });
        });
    });

    // 2. OVERLAY LOGIK
    const overlay = document.getElementById('project-overlay');
    const overlayContent = document.getElementById('overlay-content');

    // ─────────────────────────────────────────────────────────────────────────
    // PROJEKTDATEN — füll hier jeden TODO-Block mit echtem Inhalt
    // ─────────────────────────────────────────────────────────────────────────
    const projectData = {

        'cursed-chronicles': {
            title:       'Cursed Chronicles: Sleeping Beauty',
            category:    'Short Film / Animation',
            // Entweder videoUrl ODER images befüllen (oder beides — Video erscheint zuerst)
            videoUrl:    'https://www.youtube.com/embed/W0RxE5RQleE',
            // TODO: Bilder-Array — Pfade relativ zu index.html, z.B. './media/projekt/bild.jpg'
            images:      [], // TODO_IMAGES
            // TODO: Projektbeschreibung / Case Study Text
            description: 'TODO_BESCHREIBUNG',
            // TODO: Deine Rolle im Projekt
            role:        'Rigging / Animation / Editing',
            // TODO: Verwendete Tools (z.B. 'After Effects, Cinema 4D, Blender')
            tools:       'Toon Boom Harmony / Premiere Pro / Photoshop / Procreate',
            // TODO: Jahr des Projekts
            year:        '2024 - 2025',
        },

        'rrh-design': {
            title:       'Cursed Chronicles: Red Riding Hood',
            category:    'Character Design',
            videoUrl:    '', // TODO_VIDEO_URL
            images:      [
                './media/cursedchronices/rrh_all_characters.jpg',
                './media/cursedchronices/rrh_character_sheet.jpg',
                 './media/cursedchronices/rrh_draft.jpg',
                  './media/cursedchronices/rrh_draft2.jpg',
                   './media/cursedchronices/rrh_storyboard.jpg',
                    './media/cursedchronices/wolf_draft.jpg',
                     './media/cursedchronices/wolf_character_sheet.jpg',
            ], // TODO_IMAGES
            description: 'TODO_BESCHREIBUNG',
            role:        'Character Design',
            tools:       'Procreate',
            year:        '2024',
        },

        'login': {
            title:       'LOGIN',
            category:    'Short Film',
            videoUrl:    'https://www.youtube.com/embed/tLVsywI0Q4g', // TODO_VIDEO_URL
            images:      [], // TODO_IMAGES
            description: 'TODO_BESCHREIBUNG',
            role:        'Sound Design / Camera Assistant / Post Production',
            tools:       'Audition / Premiere Pro / After Effects / Lightroom',
            year:        '2015',
        },

        'expert-views': {
            title:       'PTV Expert Views',
            category:    'Corporate Video Series',
            videoUrl:    '', // TODO_VIDEO_URL
            images:      [], // TODO_IMAGES
            description: 'TODO_BESCHREIBUNG',
            role:        'TODO_ROLLE',
            tools:       'TODO_TOOLS',
            year:        'TODO_JAHR',
        },

        'logo-designs': {
            title:       'Logo Designs',
            category:    'Illustration',
            videoUrl:    '', // TODO_VIDEO_URL
            images:      [], // TODO_IMAGES
            description: 'TODO_BESCHREIBUNG',
            role:        'Illustrator',
            tools:       'Procreate / Photoshop / Illustrator',
            year:        '2025 -',
        },

        'leech': {
            title:       'Twitch Branding',
            category:    'Illustration / Graphic Design / Branding',
            videoUrl:    '', // TODO_VIDEO_URL
            images: [
                // Avatar (Header)
                './media/leech/avatar_circle_dark_dropshadow_small.png',
                // Emotes
                './media/leech/emotes/Leech12Arrive.gif',
                './media/leech/emotes/leech12Bedge.png',
                './media/leech/emotes/Leech12Leave.gif',
                './media/leech/emotes/Leech12Letsgo.gif',
                './media/leech/emotes/Leech12Letsgo_updated.gif',
                './media/leech/emotes/leech12Lion.png',
                './media/leech/emotes/leech12noted.gif',
                './media/leech/emotes/leechLurk_2000x2000.png',
                './media/leech/emotes/LeechWow_2000x2000W.png',
                // Overlays
                './media/leech/overlay/leech1208_text_transparent.png',
                './media/leech/overlay/about.png',
                './media/leech/overlay/BRB.png',
                './media/leech/overlay/startingsoon.png',
                './media/leech/overlay/current_projects.png',
                './media/leech/overlay/discord.png',
                './media/leech/overlay/donations.png',
                './media/leech/overlay/justChatting_text.png',
                './media/leech/overlay/overlay_pokemon_leech_new.png',
                './media/leech/overlay/setup.png',
                './media/leech/overlay/tiktok.png',
                // Sub Badges
                './media/leech/sub_badges/sub_badges1.jpg',
                './media/leech/sub_badges/sub_badges2.jpg',
                './media/leech/sub_badges/sub_badges3.jpg',
                './media/leech/sub_badges/sub_badges4.jpg',
            ],
            description: 'Branding for my Twitch Channel. Everything is custom made and hand drawn. Character design and emotes are made in Procreate on the iPad and animated in either Photoshop or Toon Boom Harmony. It was important to me to have a coherent design with recognition value.',
            role:        'Illustrator',
            tools:       'Photoshop / Procreate / Toon Boom Harmony',
            year:        '2024 -',
        },

        'short-animations': {
            title:       'Short Animations',
            category:    'Graphic Design / Animation',
            videoUrl:    '', // TODO_VIDEO_URL
            images:      [], // TODO_IMAGES
            description: 'TODO_BESCHREIBUNG',
            role:        'Illustration / Animation',
            tools:       'Photoshop / After Effects / Premiere Pro',
            year:        '2025 -',
        },

        'digital-drawings': {
            title:       'Digital Drawing',
            category:    'Illustration',
            videoUrl:    '', // TODO_VIDEO_URL
            images:      [], // TODO_IMAGES
            description: 'TODO_BESCHREIBUNG',
            role:        'TODO_ROLLE',
            tools:       'TODO_TOOLS',
            year:        'TODO_JAHR',
        },

        'sketch-book': {
            title:       'Sketch Book',
            category:    'Illustration',
            videoUrl:    './media/Sketch_Book_24/sketch_book.webm', // TODO_VIDEO_URL
            images:      [], // TODO_IMAGES
            description: 'This is a Sketch Book I started in the semester break of 2024. One drawing per day for 40 days straight. I used this to experiment with various penicils like alcohol markers, wooden pegs, ball pens or acrylic.',
            role:        'Illustrator',
            tools:       'assorted pens',
            year:        '2024',
        },

    };
    // ─────────────────────────────────────────────────────────────────────────

    // Baut das Bild-Layout dynamisch je nach Anzahl der Bilder
    function buildImageGrid(images) {
        if (!images || images.length === 0) return '';

        const [first, ...rest] = images;

        const header = `<div class="overflow-hidden rounded-xl border border-white/10 mb-4">
            <img src="${first}" class="w-full h-auto block hover:scale-105 transition-transform duration-500" loading="lazy">
        </div>`;

        if (rest.length === 0) return `${header}`;

        const colsClass = rest.length === 1 ? 'columns-1'
                        : rest.length === 2 ? 'columns-2'
                        : 'columns-2 md:columns-3';

        const restItems = rest.map(src =>
            `<div class="break-inside-avoid mb-4 overflow-hidden rounded-xl border border-white/10">
                <img src="${src}" class="w-full h-auto block hover:scale-105 transition-transform duration-500" loading="lazy">
            </div>`
        ).join('');

        return `${header}<div class="${colsClass} gap-4 mb-8">${restItems}</div>`;
    }

    // Mache Funktionen global verfügbar für onclick-Handler
    window.openOverlay = function(projectId) {
        if(!overlay) return;

        const p = projectData[projectId];
        if (!p) { console.warn('Keine Projektdaten für:', projectId); return; }

        document.body.style.overflow = 'hidden';
        overlay.classList.remove('hidden');

        const hasVideo  = p.videoUrl && p.videoUrl.trim() !== '';
        const hasImages = p.images && p.images.length > 0;

        const videoBlock = hasVideo
            ? `<div class="aspect-video bg-black rounded-xl mb-8 overflow-hidden border border-white/10">
                   <iframe class="w-full h-full" src="${p.videoUrl}" frameborder="0" allowfullscreen></iframe>
               </div>`
            : '';

        const imageGrid = hasImages ? buildImageGrid(p.images) : '';

        const emptyState = (!hasVideo && !hasImages)
            ? `<div class="aspect-video bg-black rounded-xl mb-8 flex items-center justify-center border border-white/10 text-gray-600 italic text-sm">
                   Noch kein Medium hinterlegt (videoUrl oder images befüllen)
               </div>`
            : '';

        overlayContent.innerHTML = `
            <div class="p-10 text-white">
                <p class="text-xs text-[#02dba4] font-bold uppercase tracking-widest mb-2">${p.category}</p>
                <h2 class="text-4xl font-black mb-8 uppercase">${p.title}</h2>
                ${videoBlock}
                ${imageGrid}
                ${emptyState}
                <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div class="md:col-span-2">
                        <h3 class="text-[#02dba4] font-bold mb-4 uppercase tracking-widest text-xs">The Project</h3>
                        <p class="text-gray-400 leading-relaxed">${p.description}</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/5">
                        <h3 class="text-[#02dba4] font-bold mb-4 uppercase tracking-widest text-xs">Details</h3>
                        <div class="space-y-4">
                            <div><span class="text-[10px] text-gray-500 block uppercase">Rolle</span>${p.role}</div>
                            <div><span class="text-[10px] text-gray-500 block uppercase">Tools</span>${p.tools}</div>
                            <div><span class="text-[10px] text-gray-500 block uppercase">Jahr</span>${p.year}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    window.closeOverlay = function() {
        overlay.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Reaktiviert Scrollen
    };

    // Schließen per Escape-Taste
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') window.closeOverlay();
    });

});