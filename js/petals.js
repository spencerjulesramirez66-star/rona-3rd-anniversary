const petalsContainer =
    document.getElementById("petals");

const PETAL_COUNT = 12;

function createPetal() {

    const petal =
        document.createElement("span");

    petal.className = "petal";

    petal.style.left =
        `${Math.random() * 100}%`;

    petal.style.setProperty(
        "--drift",
        `${Math.random() * 200 - 100}px`
    );

    petal.style.animationDuration =
        `${Math.random() * 8 + 10}s`;

    petal.style.animationDelay =
        `${Math.random() * -15}s`;

    petalsContainer.appendChild(petal);
}

for (let i = 0; i < PETAL_COUNT; i++) {
    createPetal();
}