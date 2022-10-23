$(document).ready(function () {

    let animate = document.querySelector('.animate');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        animate.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    });
});