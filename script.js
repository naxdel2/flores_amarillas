const btn = document.getElementById('revealBtn');
const intro = document.getElementById('intro');
const gift = document.getElementById('gift');

btn.addEventListener('click', () => {
  // Ocultar la parte inicial
  intro.style.display = 'none';

  // Mostrar regalo
  gift.classList.remove('hidden');
  gift.setAttribute('aria-hidden','false');

  // Reproducir música
  bgMusic.play();
  bgMusic.loop = true;
  bgMusic.volume = 0.5;

  // Empezar lluvia de flores
  startFlowerRain();
});

function startFlowerRain(){
  const flowers = ["🌻","💛","🌻","💛"]; // emojis que caerán
  setInterval(()=>{
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.textContent = flowers[Math.floor(Math.random()*flowers.length)];
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (4 + Math.random()*3) + "s";
    document.body.appendChild(flower);

    // eliminar cuando termine
    setTimeout(()=>{flower.remove();},7000);
  },400);
}
