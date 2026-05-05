// Масив з ID наших товарів
const productIds = ['pixel9', 'pixel8', 'buds'];

// Відновлення стану при завантаженні сторінки
window.onload = function() {
    productIds.forEach(function(id) {
        let desc = document.getElementById("desc_" + id);
        let state = localStorage.getItem("descState_" + id);

        if (state === "open") {
            desc.style.display = "block";
            desc.style.marginLeft = "30px";
        } else {
            desc.style.display = "none";
            desc.style.marginLeft = "0px";
        }
    });
};


function toggleBlock(id) {
    let desc = document.getElementById("desc_" + id);

    if (desc.style.display === "none" || desc.style.display === "") {

        desc.style.display = "block";
        localStorage.setItem("descState_" + id, "open");
        
        let pos = 0;
        let animId = setInterval(function() {
            if (pos >= 30) { 
                clearInterval(animId);
            } else {
                pos += 2; 
                desc.style.marginLeft = pos + "px";
            }
        }, 10); // Інтервал 10мс

    } else {
        desc.style.display = "none";
        desc.style.marginLeft = "0px"; 
        localStorage.setItem("descState_" + id, "closed");
    }
}