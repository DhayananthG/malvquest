let texts = [
    "Go Global, Learn Limitless!",
    "Study Abroad, Shape Tomorrow!",
    "Dream Bigger, Study Further!",
    "Your Global Journey Begins Today!",
    "Higher Studies, Higher Horizons!",
    "Discover, Learn, Conquer!",
    "Step Out, Stand Out!",
    "Expand Minds, Explore Borders!",
    "Think Global, Learn Universal!",
    "From Here to Anywhere!"
];

let textElement = document.getElementById('animated-text');
let num = 0;
const n = texts.length;

const change_text = () => {
    textElement.innerText = texts[num];

    // Animate text
    const letters = textElement.innerText.split('');
    textElement.innerHTML = letters.map((letter, index) => {
        const char = letter === ' ' ? '&nbsp;' : letter;
        return `<span style="animation-delay: ${index * 0.1}s; animation: fadeIn 0.1s;">${char}</span>`;
    }).join('');

    num = (num + 1) % n;
    setTimeout(change_text, 5000);
};

document.addEventListener('DOMContentLoaded', () => {
    change_text();
});

const sidebar = document.getElementById('sidebar');
const sidebarOpen = document.getElementById('sidebarOpen');
const sidebarClose = document.getElementById('sidebarClose');

sidebarOpen.addEventListener('click', () => {
    sidebar.classList.remove('-translate-x-full');
});

sidebarClose.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
});

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('bg-white', 'shadow-md', 'text-black');
        navbar.classList.remove('bg-transparent', 'text-white');
    } else {
        navbar.classList.add('bg-transparent', 'text-white');
        navbar.classList.remove('bg-white', 'shadow-md', 'text-black');
    }
});

const serviceNavbar = document.getElementById('service-navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        serviceNavbar.classList.add('bg-white', 'text-black'); // Adds white background and text black color
        serviceNavbar.classList.remove('bg-transparent'); // Removes transparent background and white text
    } else {
        serviceNavbar.classList.add('bg-transparent'); // Restores initial styles
        serviceNavbar.classList.remove('bg-white', 'text-black'); // Removes white background and black text
    }
});

// Hide loader and show content when the page finishes loading
window.onload = function () {
    const loader = document.getElementById('loader-container');
    const content = document.getElementById('content');

    // Hide loader
    loader.style.display = 'none';

    // Show content
    content.style.display = 'block';
};

const scriptURL = "https://script.google.com/macros/s/AKfycbw8lrd_i81uKeBMbVoxAbMjY8J1U1atCgIwOcO4TeJICcLA8ylzb5gCj_sXseAK2Tkrqg/exec";
const form = document.forms["submit-to-google-sheet"];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    var formData = new FormData(form);
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var query = document.getElementById("query").value;

    // Append values to the formData
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Mobile", mobile);
    formData.append("Query", query);
    console.log('FormData:', formData);

    fetch(scriptURL, { method: "POST", body: formData })
        .then((response) => {
            formData.forEach((value, key) => {
                console.log(key + ": " + value);
            });
            msgg.innerHTML = "Booking Registered Successfully";
            form.reset();
            setTimeout(function () {
                msgg.innerHTML = "";
            }, 4000);
        })
        .catch((error) => {
            msgg.innerHTML = "Error Occurred";
        });
});
