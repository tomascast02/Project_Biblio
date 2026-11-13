const track = document.getElementById('track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
    const slideWidth = track.clientWidth;
if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5)
    {
    track.scrollTo({ left: 0, behavior: 'smooth' });
    }
else
    {
    track.scrollBy({ left: slideWidth, behavior: 'smooth' });
    }
});

prevBtn.addEventListener('click', () => {
    const slideWidth = track.clientWidth;
    if (track.scrollLeft <= 0) {
    track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
    }
    else
    {
    track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid__item:not(.grid__item--catalogo)');

    gridItems.forEach(item => {
        const closeBtn = item.querySelector('.close-btn');
        item.addEventListener('click', (e) => {
            if (!item.classList.contains('expanded')) {
                gridItems.forEach(el => el.classList.remove('expanded'));
                item.classList.add('expanded');
            }
        });
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                item.classList.remove('expanded');
            });
        }
    });
});

