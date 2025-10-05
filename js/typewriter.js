const text = "NEXUS GAMES";
let i = 0;
const speed = 150;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("type").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
window.onload = typeWriter;
