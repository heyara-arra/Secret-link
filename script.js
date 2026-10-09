// ========================================
// 💗 BIRTHDAY LOVE STORY - JAVASCRIPT
// ========================================

// Change this later if you want a different secret word.
const SECRET_WORD = "mahal";

// Music is a placeholder for now.
// We can add your chosen song later.
const MUSIC_URL = "";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);


// ========================================
// ✨ 1. TWINKLING STARS
// ========================================

const sky = $("#sky");

if (sky) {
    for (let i = 0; i < 80; i++) {
        const star = document.createElement("span");

        star.className = "star";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 4 + "s";
        star.style.animationDuration = 2 + Math.random() * 4 + "s";

        const size = 2 + Math.random() * 3;
        star.style.width = size + "px";
        star.style.height = size + "px";

        sky.appendChild(star);
    }
}


// ========================================
// 💕 2. FLOATING HEARTS
// ========================================

const heartContainer = $("#floating-hearts");

function createHeart() {
    if (!heartContainer) return;

    const heart = document.createElement("span");
    heart.className = "heart";

    const hearts = ["♡", "♥", "💕", "💗", "💖"];
    heart.textContent = hearts[
        Math.floor(Math.random() * hearts.length)
    ];

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = 12 + Math.random() * 20 + "px";
    heart.style.animationDuration = 5 + Math.random() * 6 + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

setInterval(createHeart, 1000);


// ========================================
// 💌 3. SCENE NAVIGATION
// ========================================

function showScene(sceneNumber) {
    $$(".scene").forEach((scene) => {
        scene.classList.remove("active");
    });

    const targetScene = $("#scene-" + sceneNumber);

    if (targetScene) {
        targetScene.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Opening button
const beginButton = $("#begin-button");

if (beginButton) {
    beginButton.addEventListener("click", () => {
        showScene(2);
    });
}

// Continue buttons
const continue2 = $("#continue-2");

if (continue2) {
    continue2.addEventListener("click", () => {
        showScene(3);
    });
}

$$("[data-next]").forEach((button) => {
    button.addEventListener("click", () => {
        const nextScene = button.dataset.next;
        showScene(nextScene);
    });
});

const continue5 = $("#continue-5");

if (continue5) {
    continue5.addEventListener("click", () => {
        showScene(6);
    });
}

const continue6 = $("#continue-6");

if (continue6) {
    continue6.addEventListener("click", () => {
        showScene(7);
    });
}


// ========================================
// 💗 4. INTERACTIVE QUESTION
// ========================================

const questionReply = $("#question-reply");

const replies = {
    yes: "Awww! Alam kong may special place ako sa puso mo. 💗",
    curious: "Hehe, curious ka na? May mga sorpresa pa akong inihanda para sa'yo! ✨",
    shy: "Huwag kang mahiya, love. This little story is made just for you. 🥹💕"
};

$$("[data-reply]").forEach((button) => {
    button.addEventListener("click", () => {
        const answer = button.dataset.reply;

        if (questionReply) {
            questionReply.textContent =
                replies[answer] || "You are special to me. 💗";
        }

        // Reveal the continue button after choosing.
        if (continue2) {
            continue2.classList.remove("hidden");
        }

        // Highlight the selected answer.
        $$("[data-reply]").forEach((item) => {
            item.classList.remove("selected");
        });

        button.classList.add("selected");
    });
});


// ========================================
// 🌷 5. CLICKABLE LOVE STORY DETAILS
// ========================================

const storyMessages = {
    beginning:
        "Sa dami ng taong puwedeng makilala sa mundo, masaya akong ikaw ang nakilala ko. Hindi man perpekto ang lahat, special sa akin ang mga sandaling kasama kita. 💗",

    reasons:
        "May mga simpleng bagay sa'yo na nagpapasaya sa akin. Ang presensya mo, ang mga pag-uusap natin, at ang mga moments na tayo lang ang nakakaintindi. Thank you for being you. 🥹💕",

    wish:
        "Ang wish ko para sa'yo ay good health, happiness, success, at lakas ng loob sa bawat pagsubok. Sana maabot mo ang mga pangarap mo, at sana marami ka pang masasayang birthday na ma-celebrate. 🎂✨"
};

$$("[data-open]").forEach((button) => {
    button.addEventListener("click", () => {
        const messageType = button.dataset.open;
        const messageElement = $("#" + messageType + "-message");

        if (!messageElement) return;

        messageElement.textContent =
            storyMessages[messageType] || "You are loved more than you know. 💗";

        messageElement.classList.toggle("hidden");

        button.classList.toggle("selected");
    });
});


// ========================================
// 📸 6. PHOTO GALLERY INTERACTIONS
// ========================================

const photoCaptions = [
    "Isang memory na gusto kong balikan. 💗",
    "Simple moments, special memories. ✨",
    "Sana mas marami pa tayong ganitong moments. 🥹💕",
    "Isa lang ito sa mga memories na gusto kong ingatan. 💖"
];

const photoMessage = $("#photo-message");

$$(".photo").forEach((photo) => {
    photo.addEventListener("click", () => {
        $$(".photo").forEach((item) => {
            item.classList.remove("selected");
        });

        photo.classList.add("selected");

        const photoNumber = Number(photo.dataset.photo);
        const caption =
            photoCaptions[photoNumber] ||
            "Another special memory with you. 💗";

        if (photoMessage) {
            photoMessage.textContent = caption;
        }
    });
});


// ========================================
// 💞 7. CHOOSE YOUR SURPRISE
// ========================================

const pathTitle = $("#path-title");
const pathText = $("#path-text");
const pathResult = $("#path-result");
const continuePath = $("#continue-5");

const pathChoices = {
    letter: {
        title: "A Letter Just for You 💌",
        text: "May mga bagay na mas madaling sabihin kapag galing sa puso. Sa susunod na part, may message akong gustong ibahagi sa'yo."
    },

    memories: {
        title: "Our Little Memories 📸",
        text: "Hindi kailangang grand ang bawat moment para maging special. Minsan, ang maliliit na alaala ang pinakamasarap balikan."
    },

    dreams: {
        title: "Dreams for Your Future 🌙",
        text: "Sana matupad mo ang mga pangarap mo, one step at a time. I hope your future brings you peace, happiness, and many reasons to smile."
    }
};

$$("[data-path]").forEach((button) => {
    button.addEventListener("click", () => {
        const selectedPath = button.dataset.path;
        const choice = pathChoices[selectedPath];

        if (!choice) return;

        if (pathTitle) {
            pathTitle.textContent = choice.title;
        }

        if (pathText) {
            pathText.textContent = choice.text;
        }

        if (pathResult) {
            pathResult.classList.remove("hidden");
        }

        if (continuePath) {
            continuePath.classList.remove("hidden");
        }

        $$("[data-path]").forEach((item) => {
            item.classList.remove("selected");
        });

        button.classList.add("selected");
    });
});


// ========================================
// 🎂 8. BLOW OUT THE BIRTHDAY CANDLES
// ========================================

let candlesBlown = 0;

const candles = $$(".candle");
const wishStatus = $("#wish-status");
const makeWishButton = $("#make-wish");

function updateCandleStatus() {
    if (!wishStatus) return;

    if (candlesBlown === 0) {
        wishStatus.textContent =
            "Click each candle to blow it out! 🎂";
    } else if (candlesBlown < candles.length) {
        wishStatus.textContent =
            `You blew out ${candlesBlown} of ${candles.length} candles! ✨`;
    } else {
        wishStatus.textContent =
            "All candles are out! Make your birthday wish, love. 💗";
    }
}

candles.forEach((candle) => {
    candle.addEventListener("click", () => {
        if (candle.classList.contains("out")) return;

        candle.classList.add("out");
        candle.textContent = "♡";

        candlesBlown++;
        updateCandleStatus();
    });
});

if (makeWishButton) {
    makeWishButton.addEventListener("click", () => {
        if (candlesBlown < candles.length) {
            if (wishStatus) {
                wishStatus.textContent =
                    "Blow out all the candles first, love! 🎂💕";
            }
            return;
        }

        if (wishStatus) {
            wishStatus.textContent =
                "Wish made! Sana matupad ang lahat ng wishes mo. Happy Birthday! 🎉💖";
        }

        // Make a little heart celebration.
        for (let i = 0; i < 12; i++) {
            setTimeout(createHeart, i * 100);
        }

        if (continue6) {
            continue6.classList.remove("hidden");
        }

        makeWishButton.textContent = "Wish Made! 💖";
    });
}


// ========================================
// 🔐 9. SECRET LOVE REVEAL
// ========================================

const secretForm = $("#secret-form");
const secretAnswer = $("#secret-answer");
const secretFeedback = $("#secret-feedback");
const finalLetter = $("#final-letter");
const restartButton = $("#restart-button");

if (secretForm) {
    secretForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const answer = secretAnswer
            ? secretAnswer.value.trim().toLowerCase()
            : "";

        if (answer === SECRET_WORD.toLowerCase()) {
            if (secretFeedback) {
                secretFeedback.textContent =
                    "Correct! You unlocked your special birthday message! 💗🔓";
            }

            if (finalLetter) {
                finalLetter.classList.remove("hidden");
            }

            if (restartButton) {
                restartButton.classList.remove("hidden");
            }

            // Heart celebration
            for (let i = 0; i < 18; i++) {
                setTimeout(createHeart, i * 120);
            }
        } else {
            if (secretFeedback) {
                secretFeedback.textContent =
                    "Hehe, try again, love! Hint: isang sweet na tawag sa taong mahal mo. 💕";
            }

            if (finalLetter) {
                finalLetter.classList.add("hidden");
            }

            if (restartButton) {
                restartButton.classList.add("hidden");
            }
        }
    });
}


// ========================================
// 🎀 10. RESTART THE LOVE STORY
// ========================================

if (restartButton) {
    restartButton.addEventListener("click", () => {
        // Reset scenes
        showScene(1);

        // Reset question choices
        if (questionReply) {
            questionReply.textContent = "";
        }

        if (continue2) {
            continue2.classList.add("hidden");
        }

        $$("[data-reply]").forEach((button) => {
            button.classList.remove("selected");
        });

        // Hide story messages
        [
            "#beginning-message",
            "#reasons-message",
            "#wish-message"
        ].forEach((selector) => {
            const element = $(selector);

            if (element) {
                element.classList.add("hidden");
            }
        });

        $$("[data-open]").forEach((button) => {
            button.classList.remove("selected");
        });

        // Reset photo gallery
        $$(".photo").forEach((photo) => {
            photo.classList.remove("selected");
        });

        if (photoMessage) {
            photoMessage.textContent = "";
        }

        // Reset path choices
        if (pathResult) {
            pathResult.classList.add("hidden");
        }

        if (continuePath) {
            continuePath.classList.add("hidden");
        }

        $$("[data-path]").forEach((button) => {
            button.classList.remove("selected");
        });

        // Reset candles
        candlesBlown = 0;

        candles.forEach((candle) => {
            candle.classList.remove("out");
            candle.textContent = "🕯️";
        });

        updateCandleStatus();

        if (makeWishButton) {
            makeWishButton.textContent = "Make a Wish 💗";
        }

        if (continue6) {
            continue6.classList.add("hidden");
        }

        // Reset secret reveal
        if (secretForm) {
            secretForm.reset();
        }

        if (secretFeedback) {
            secretFeedback.textContent = "";
        }

        if (finalLetter) {
            finalLetter.classList.add("hidden");
        }

        if (restartButton) {
            restartButton.classList.add("hidden");
        }
    });
}


// ========================================
// 🎵 11. MUSIC BUTTON (PLACEHOLDER)
// ========================================

const musicButton = $("#music-toggle");
let musicAudio = null;
let musicIsPlaying = false;

if (musicButton) {
    musicButton.addEventListener("click", () => {
        if (!MUSIC_URL) {
            musicButton.textContent = "♫ Music: add song later 💗";

            setTimeout(() => {
                musicButton.textContent = "♫ Music: OFF";
            }, 2000);

            return;
        }

        if (!musicAudio) {
            musicAudio = new Audio(MUSIC_URL);
            musicAudio.loop = true;
        }

        if (musicIsPlaying) {
            musicAudio.pause();
            musicIsPlaying = false;
            musicButton.textContent = "♫ Music: OFF";
        } else {
            musicAudio.play()
                .then(() => {
                    musicIsPlaying = true;
                    musicButton.textContent = "♫ Music: ON";
                })
                .catch(() => {
                    musicButton.textContent = "♫ Tap to play music";
                });
        }
    });
}


// ========================================
// 💗 INITIAL SETUP
// ========================================

updateCandleStatus();

console.log("💗 Birthday Love Story loaded successfully!");
