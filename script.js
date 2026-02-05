/* =========================================================
   ELEMENT REFERENCES
   ========================================================= */

// Buttons
const startBtn = document.getElementById("startBtn");
const openGiftBtn = document.getElementById("openGiftBtn");

// Audio
const bgMusic = document.getElementById("bgMusic");
const clickSound = document.getElementById("clickSound");

// Scenes
const startScreen = document.getElementById("startScreen");
const morningScene = document.getElementById("morningScene");
const dateScene = document.getElementById("dateScene");
const roseScene = document.getElementById("roseScene");
const letterScene = document.getElementById("letterScene");
const giftScene = document.getElementById("giftScene");

// Gift elements
const giftBox = document.getElementById("giftBox");
const chocolateReveal = document.getElementById("chocolateReveal");
const roseReveal = document.getElementById("roseReveal");
const finalWish = document.getElementById("finalWish");

/* =========================================================
   PHASE 1 → PHASE 5 FLOW
   ========================================================= */

startBtn.addEventListener("click", async () => {
    try {
        clickSound.currentTime = 0;
        await clickSound.play();

        bgMusic.currentTime = 0;
        bgMusic.volume = 1;
        await bgMusic.play();
    } catch (err) {
        console.log("Audio autoplay blocked");
    }

    // Phase 1 → 2
    startScreen.classList.add("hidden");
    morningScene.classList.remove("hidden");

    // Phase 2 → 3
    setTimeout(() => {
        morningScene.classList.add("hidden");
        dateScene.classList.remove("hidden");
    }, 15000);

    // Phase 3 → 4
    setTimeout(() => {
        dateScene.classList.add("hidden");
        roseScene.classList.remove("hidden");
    }, 21000);

    // Phase 4 → 5
    setTimeout(() => {
        roseScene.classList.add("hidden");
        letterScene.classList.remove("hidden");
    }, 36000);
});

/* =========================================================
   PHASE 5 → PHASE 6 (GIFT ENTRY)
   ========================================================= */

openGiftBtn.addEventListener("click", async () => {
    try {
        clickSound.currentTime = 0;
        await clickSound.play();
    } catch (err) { }

    // Hide letter, show gift scene
    letterScene.classList.add("hidden");
    giftScene.classList.remove("hidden");

    // Show gift box after delay WITH animation
    setTimeout(() => {
        giftBox.classList.remove("hidden");
        giftBox.classList.add("show");
    }, 800);
});

/* =========================================================
   PHASE 6 : GIFT SEQUENCE
   ========================================================= */

giftBox.addEventListener("click", async () => {
    try {
        clickSound.currentTime = 0;
        await clickSound.play();
    } catch (err) { }

    // Hide gift box cleanly
    giftBox.classList.remove("show");
    giftBox.classList.add("hidden");

    // Chocolate GIF (5s)
    chocolateReveal.classList.remove("hidden");

    setTimeout(() => {
        chocolateReveal.classList.add("hidden");
        roseReveal.classList.remove("hidden");
    }, 5000);

    // Rose GIF (5s)
    setTimeout(() => {
        roseReveal.classList.add("hidden");
        finalWish.classList.remove("hidden");
    }, 10000);

    // Fade music smoothly
    setTimeout(() => {
        const fade = setInterval(() => {
            if (bgMusic.volume > 0.05) {
                bgMusic.volume -= 0.05;
            } else {
                bgMusic.pause();
                bgMusic.volume = 0;
                clearInterval(fade);
            }
        }, 300);
    }, 11000);
});
