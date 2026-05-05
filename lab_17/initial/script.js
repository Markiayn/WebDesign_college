function toggleDescription() {
    let description = document.getElementById("productDescription");
    if (description.style.display === "none") {
        description.style.display = "block";
        localStorage.setItem("descriptionState", "open");
    } else {
        description.style.display = "none";
        localStorage.setItem("descriptionState", "closed");
    }
}
window.onload = function() {
    let description = document.getElementById("productDescription");
    let state = localStorage.getItem("descriptionState");
    if (state === "open") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}