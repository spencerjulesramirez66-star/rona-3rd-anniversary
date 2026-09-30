const particlesContainer =
    document.getElementById("particles");

const PARTICLE_COUNT = 45;

function createParticle() {

    const particle =
        document.createElement("span");

    particle.className = "particle";

    const size =
        Math.random() * 3 + 1;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left =
        `${Math.random() * 100}%`;

    particle.style.top =
        `${Math.random() * 100}%`;

    particle.style.animationDuration =
        `${Math.random() * 5 + 4}s`;

    particle.style.animationDelay =
        `${Math.random() * -8}s`;

    particlesContainer.appendChild(particle);
}

for (let i = 0; i < PARTICLE_COUNT; i++) {
    createParticle();
}