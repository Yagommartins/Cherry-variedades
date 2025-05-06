document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelectorAll('[data-dropdown-toggle]');
    dropdownToggle.forEach((toggle) => {
        toggle.addEventListener('click', function () {
            const parent = this.closest('.dropdown-item');
            parent.classList.toggle('active');

        })
    })

    //fechar o dropdown ao clicar fora

    document.addEventListener('click', function (e) {
        dropdownToggle.forEach((toggle) => {
            const parent = toggle.closest('.dropdown-item');
            if (!parent.contains(e.target)) {
                parent.classList.remove('active');
            }

        })
    })

})

const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');

searchToggle.addEventListener('click', () => {
    searchOverlay.style.display = 'flex';
    serTimeout(() => {
        searchOverlay.querySelector('.search-input').focus();
    }, 100);
})

//fechar o botão de pesquisa

closeSearch.addEventListener('click', () => {
    searchOverlay.style.display = 'none';
})

//fechar com o esc

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchOverlay.style.display = 'none';
    }
})

//fechar o menu ao clicar fora
searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
        searchOverlay.style.display = 'none';
    }
})