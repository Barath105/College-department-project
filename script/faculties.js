
// Nav Bar

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('.child-2 nav');
    const menuIcon = document.getElementById('menuIcon');

    menuIcon.addEventListener('click', function (event) {
        nav.classList.toggle('show');
        event.stopPropagation(); // Prevent the click event from propagating to the document
    });

    document.addEventListener('click', function (event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnMenuIcon = menuIcon.contains(event.target);

        if (!isClickInsideNav && !isClickOnMenuIcon) {
            nav.classList.remove('show');
        }
    });
});


function searchByName() {
    // Get the input value
    var searchInput = document.getElementById('searchInput').value.toLowerCase();

    // Get all the profile boxes
    var profileBoxes = document.querySelectorAll('.box');

    // Loop through each profile box and show/hide based on the search input
    profileBoxes.forEach(function(box) {
        var boxName = box.querySelector('.name_job').textContent.toLowerCase();
        var displayValue = boxName.includes(searchInput) ? 'block' : 'none';
        box.style.display = displayValue;
    });
}


function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}



