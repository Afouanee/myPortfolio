document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    // Ajoute la classe 'change-color' lorsque la souris entre dans l'en-tête
    header.addEventListener('mouseenter', function() {
        header.classList.add('change-color');
    });

    // Retire la classe 'change-color' lorsque la souris quitte l'en-tête
    header.addEventListener('mouseleave', function() {
        header.classList.remove('change-color');
    });
});
