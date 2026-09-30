const starsContainer =
    document.getElementById("stars");

const STAR_COUNT = 80;

for (let i = 0; i < STAR_COUNT; i++) {

    const star =
        document.createElement("span");

    star.className = "star";

    star.style.left =
        `${Math.random() * 100}%`;

    star.style.top =
        `${Math.random() * 100}%`;

    const size =
        Math.random() * 2 + .5;

    star.style.width =
        `${size}px`;

    star.style.height =
        `${size}px`;

    star.style.animationDelay =
        `${Math.random() * 5}s`;

    star.style.animationDuration =
        `${Math.random() * 4 + 3}s`;

    starsContainer.appendChild(star);
}