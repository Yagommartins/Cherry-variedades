document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelectorALL('[data-dropdown-toggle]');
    dropdownToggle.forEach((toggle) => {
        toggle.addEventListener("click", function () {
            const parent = this.closest('dropdown-item');
            parent.classList.toggle("active");

        })
    })
});