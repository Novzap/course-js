let wrapper = document.querySelector('.wrapper');
let cube = document.querySelector('.cube');
let btn = document.querySelector('button');
window.addEventListener('DOMContentLoaded', function() {
    let posTop = 0,
        posLeft = 0;

    let h = parseInt(getComputedStyle(wrapper).height);
    let w = parseInt(getComputedStyle(wrapper).width);
    
    btn.addEventListener('click', function() {
        btn.disabled = true;
        function animate() {
            let requestID = requestAnimationFrame(animate);
            cube.style.top = posTop + 'px';        
            posTop++;
            if (posTop == h - 50) {
                cancelAnimationFrame(requestID);
            }
        }
        requestAnimationFrame(animate);
    
        function animateLeft() {
            let requestID = requestAnimationFrame(animateLeft);
            cube.style.left = posLeft + 'px';
            posLeft++;
            if (posLeft == w - 50) {
                cancelAnimationFrame(requestID);
            }
        }
        requestAnimationFrame(animateLeft);

    });
});
