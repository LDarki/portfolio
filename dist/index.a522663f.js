const e=["Arduino boards","ESP8266 boards","ESP32 boards","Raspberry Pi boards","Orange Pi boards","feature phones","smartphones","computers","smart TVs","Wi-Fi routers","microcontrollers","single-board computers","Teensy boards"];window.onload=function(){let t=document.getElementById("changingText"),o=0;setInterval(()=>{t.textContent=e[o],o=(o+1)%e.length,t.classList.remove("opacity-0"),setTimeout(()=>{t.classList.add("opacity-0")},1800)},2e3)},document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll('a[href^="#"]');document.querySelector("#submitBtn").addEventListener("click",function(){let e=document.querySelector("#name").value,t=document.querySelector("#message").value;window.open(`mailto:serverdarkcity@gmail.com?subject=[Portfolio] ${e}&body=${t}`)}),e.forEach(e=>{e.addEventListener("click",function(e){let t=this.getAttribute("href").substring(1),o=document.getElementById(t);if(o){e.preventDefault();let t=o.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:t,behavior:"smooth"})}})})});
//# sourceMappingURL=index.a522663f.js.map
