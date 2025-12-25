function moveSlide(type, direction) {
    const trackId = type === 'featured' ? 'featured-track' : 'purchased-track';
    const track = document.getElementById(trackId);
    const scrollAmount = 480; 

    if (direction === 1) {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
}


const porscheInter = document.querySelector('.porsche-interactive');
if (porscheInter) {
    porscheInter.addEventListener('mousemove', (e) => {
        const circles = document.querySelectorAll('.circle');
        const x = (window.innerWidth / 2 - e.pageX) / 30;
        const y = (window.innerHeight / 2 - e.pageY) / 30;
        
        circles.forEach((circle, index) => {
            circle.style.transform = `translate(calc(-50% + ${x * (index + 1)}px), calc(-50% + ${y * (index + 1)}px))`;
        });
    });
}

const carouselState = {
  featured: 0,
  purchased: 0
};

function moveSlide(type, direction) {
  const track = document.getElementById(`${type}-track`);
  const cards = track.querySelectorAll(".car-card");

  const visibleCards = 2; 
  const cardGap = 30;
  const cardWidth = cards[0].offsetWidth + cardGap;

  const maxIndex = Math.ceil(cards.length / visibleCards) - 1;


  carouselState[type] += direction;

  
  if (carouselState[type] < 0) {
    carouselState[type] = 0;
  } else if (carouselState[type] > maxIndex) {
    carouselState[type] = maxIndex;
  }

  
  const moveAmount = carouselState[type] * cardWidth * visibleCards;

  track.style.transform = `translateX(-${moveAmount}px)`;
}
const modelViewer = document.querySelector("#carModel");
const dots = document.querySelectorAll(".dot");

const colors = {
  black: [0.05, 0.05, 0.05, 1],
  white: [0.9, 0.9, 0.9, 1],
  red: [0.75, 0.1, 0.15, 1],
  blue: [0.1, 0.2, 0.7, 1]
};

modelViewer.addEventListener("load", () => {
  const material = modelViewer.model.materials[0];

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const color = dot.dataset.color;
      material.pbrMetallicRoughness.setBaseColorFactor(colors[color]);

      dots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });
});

    function changeColor(colorKey, element) {
       
        const modelViewer = document.getElementById('main-car-viewer');
        
       
        const modelMap = {
            'grey': '3d assets/porche model 1.glb', 
            'red': '3d assets/porche model red.glb',
            'white': '3d assets/porche model white.glb'
        };

    
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => dot.classList.remove('active'));
        element.classList.add('active');

       
        if (modelMap[colorKey]) {
        
            modelViewer.src = modelMap[colorKey];
        }
    }
