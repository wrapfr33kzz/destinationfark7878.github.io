let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain_behind = document.getElementById('mountain_behind')
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountain_front = document.getElementById('mountain_front')
let header = document.querySelector('header');

window.addEventListener('scroll',function(){
    let value = this.window.scrollY;
    stars.style.left = value * 0.25 +'px';
    moon.style.top = value * 1.05 +'px';
    mountain_behind.style.top = value * 0.5 +'px';
    mountain_front.style.top = value * 0 +'px';
    text.style.marginRight = value * 4 +'px';
    btn.style.marginRight = value * 1.5 +'px';
    header.style.top = value * 0.5 * 'px';
    

})