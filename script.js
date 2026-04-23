function toggleMenu() {
            const menu = document.getElementById('nav-menu');
            menu.classList.toggle('open');
        }
        document.querySelectorAll('.li-button').forEach(btn => {
            btn.addEventListener('click', () => {
                document.getElementById('nav-menu').classList.remove('open');
            });
        });

        function openLightbox(src) {
            document.getElementById('lightbox-img').src = src;
            document.getElementById('lightbox').classList.add('open');
        }
        function closeLightbox() {
            document.getElementById('lightbox').classList.remove('open');
        }
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLightbox();
        });