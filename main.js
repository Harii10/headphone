ScrollReveal({
    reset: true,
    distance: '400px',
    duration: 1000,
    delay: 100
});

ScrollReveal().reveal('.first,.second', { origin: 'top'})
ScrollReveal().reveal('.para,.images, .div-img', { origin: 'right'})
ScrollReveal().reveal('.m-btn,.t-img', { origin: 'bottom'});
ScrollReveal().reveal('.image,.para-p, .f-div', { origin: 'left'})
