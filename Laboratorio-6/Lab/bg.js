// BASADO EN EL PROYECTO: https://codepen.io/emkopic/pen/GRKyYEV


// JavaScript para el efecto de neuronas
const canvas = document.getElementById('brainCanvas');
const ctx = canvas.getContext('2d');

// Configurar canvas para ocupar toda la pantalla
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Clase para las neuronas
class Neuron {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3 + 2;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
}

// Clase para las conexiones
class Connection {
    constructor(neuronA, neuronB) {
        this.neuronA = neuronA;
        this.neuronB = neuronB;
    }

    draw() {
        const dx = this.neuronA.x - this.neuronB.x;
        const dy = this.neuronA.y - this.neuronB.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(this.neuronA.x, this.neuronA.y);
            ctx.lineTo(this.neuronB.x, this.neuronB.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 150})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
        }
    }
}

// Crear neuronas y conexiones
const neurons = Array(200).fill().map(() => new Neuron());
const connections = [];

for (let i = 0; i < neurons.length; i++) {
    for (let j = i + 1; j < neurons.length; j++) {
        connections.push(new Connection(neurons[i], neurons[j]));
    }
}

// Función de animación
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    neurons.forEach(neuron => {
        neuron.update();
        neuron.draw();
    });

    connections.forEach(connection => connection.draw());

    requestAnimationFrame(animate);
}

animate();