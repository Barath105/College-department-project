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


function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}



// map


function initMap() {
    const saveethaLocation = { lat: 13.00602617140632, lng: 80.12319470810569 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
        center: saveethaLocation,
      zoom: 15, // Adjust the zoom level as needed
    });

    // Add a marker for Saveetha School of Engineering
    const marker = new google.maps.Marker({
        position: saveethaLocation,
        map: map,
        title: "Saveetha School of Engineering",
    });
}