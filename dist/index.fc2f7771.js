const texts = [
    "Arduino boards",
    "ESP8266 boards",
    "ESP32 boards",
    "Raspberry Pi boards",
    "Orange Pi boards",
    "feature phones",
    "smartphones",
    "computers",
    "smart TVs",
    "Wi-Fi routers",
    "microcontrollers",
    "single-board computers",
    "Teensy boards"
];
function changeText() {
    const changingText = document.getElementById("changingText");
    let index = 0;
    setInterval(()=>{
        changingText.textContent = texts[index];
        index = (index + 1) % texts.length;
        changingText.classList.remove("opacity-0");
        setTimeout(()=>{
            changingText.classList.add("opacity-0");
        }, 1800);
    }, 2000);
}
window.onload = changeText;
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    const contactBtn = document.querySelector("#submitBtn");
    contactBtn.addEventListener("click", function() {
        const name = document.querySelector("#name").value;
        const msg = document.querySelector("#message").value;
        window.open(`mailto:serverdarkcity@gmail.com?subject=${name}&body=${msg}`);
    });
    links.forEach((link)=>{
        link.addEventListener("click", function(event) {
            const targetId = this.getAttribute("href").substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                event.preventDefault();
                const offsetTop = target.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

//# sourceMappingURL=index.fc2f7771.js.map
