
const vertical = document.querySelector('.vertical')
const horizontal = document.querySelector('.horizontal')
const target = document.querySelector('.target')
const tag = document.querySelector('.tag')

addEventListener('load', function() {
    const targetRect = target.getBoundingClientRect();
    
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;

    let curX = 0;
    let curY = 0;
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        console.log(x, y);
    })
    
    function animate() {
        requestAnimationFrame(animate);
        curX += (mouseX - curX) * 0.2;
        curY += (mouseY - curY) * 0.2;

        vertical.style.transform = `translateX(${curX}px)`;
        horizontal.style.transform = `translateY(${curY}px)`;
        target.style.transform = `translate(${curX-targetHalfWidth}px, ${curY-targetHalfHeight}px)`;
        tag.style.transform = `translate(${curX}px, ${curY}px)`;
        tag.innerHTML = `${Math.ceil(curX)}px ${Math.ceil(curY)}px`;
    }
    animate();
})