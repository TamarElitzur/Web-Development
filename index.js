// page to navigte
function loadPage(page) {

    // Get Reference for the HTML elemet by its ID
    // contentFrame is iframe element type
    let iframeElement = document.getElementById("contentFrame");

    // Give the Iframe the HTML address
    iframeElement.src = page;

    // Close sidebar on mobile
    document.getElementById("sidebar").classList.remove("show");
}

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("show");
}