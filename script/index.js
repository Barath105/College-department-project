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




// Image Slider

let currentIndex = 0;

        function showSlide(index) {
            const slider = document.querySelector('.slider');
            const slideWidth = document.querySelector('.slider-container').offsetWidth;
            currentIndex = index;
            const transformValue = -currentIndex * slideWidth;
            slider.style.transform = `translateX(${transformValue}px)`;
        }

        function showPrev() {
            currentIndex = (currentIndex - 1 + document.querySelectorAll('.slider img').length) % document.querySelectorAll('.slider img').length;
            showSlide(currentIndex);
        }

        function showNext() {
            currentIndex = (currentIndex + 1) % document.querySelectorAll('.slider img').length;
            showSlide(currentIndex);
        }

        // Automatic scrolling every 2 seconds
        setInterval(function () {
            showNext();
        }, 2500);


        function toggleDropdown() {
            var dropdown = document.getElementById("myDropdown");
            dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
        }



