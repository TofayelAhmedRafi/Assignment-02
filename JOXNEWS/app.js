function toggleMenu(show) {
        const menu = document.getElementById('menuBar');
        const openBtn = document.getElementById('openMenu');
        const closeBtn = document.getElementById('closeMenu');

        if (show) {
        menu.style.display = 'block';
        openBtn.style.display = 'none';
        closeBtn.style.display = 'block';
        } else {
        menu.style.display = 'none';
        openBtn.style.display = 'block';
        closeBtn.style.display = 'none';
        }
    }