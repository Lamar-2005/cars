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
            'red': '3d assets/tesla modell.glb',
            'white': '3d assets/tesla model black.glb'
        };

    
        const dots = document.querySelectorAll('.dot'); 
        dots.forEach(dot => dot.classList.remove('active'));
        element.classList.add('active');

       
        if (modelMap[colorKey]) {
        
            modelViewer.src = modelMap[colorKey];
        }
    }