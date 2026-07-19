// Pindah halaman
function nextPage(page) {
    document.querySelectorAll(".page").forEach(p => {
        p.classList.remove("active");
    });

    document.getElementById("page" + page).classList.add("active");
}

// Membuka amplop
function openLetter() {
    const envelope = document.querySelector(".envelope");

    if (!envelope.classList.contains("open")) {
        envelope.classList.add("open");

        setTimeout(() => {
            nextPage(3);
        }, 1000);
    }
}

// Tombol "Gamau" bergerak beberapa kali
const noBtn = document.getElementById("noBtn");

let moveCount = 0;

noBtn.addEventListener("click", () => {

    if (moveCount < 3) {

        const x = Math.random() * 180 - 90;
        const y = Math.random() * 120 - 60;

        noBtn.style.transform =
            `translate(${x}px,${y}px)`;

        noBtn.innerHTML = "Yakin? 🙈";

        moveCount++;

    } else {

        alert("Gapapa kok 😊 Makasih udah jujur.");

    }

});

// Tombol iya
function yesAnswer() {

    confettiEffect();

    setTimeout(() => {
        nextPage(5);
    }, 700);

}

// Tombol selesai
function finish() {

    alert("Makasih ya 🌸\nAku tunggu DM Instagram kamu 😊");

}

// Efek hati jatuh
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💗";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (18 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}

setInterval(createHeart, 350);

// Confetti sederhana
function confettiEffect() {

    for (let i = 0; i < 80; i++) {

        let c = document.createElement("div");

        c.style.position = "fixed";
        c.style.left = Math.random() * 100 + "%";
        c.style.top = "-20px";
        c.style.width = "8px";
        c.style.height = "8px";
        c.style.background =
            ["#ff5b95","#ffd54f","#7ed957","#66ccff","#ffffff"][Math.floor(Math.random()*5)];
        c.style.borderRadius = "50%";
        c.style.pointerEvents = "none";
        c.style.transition = "3s linear";

        document.body.appendChild(c);

        setTimeout(() => {
            c.style.transform =
                `translateY(${window.innerHeight + 100}px) rotate(720deg)`;
        }, 20);

        setTimeout(() => {
            c.remove();
        }, 3200);

    }

}