$(document).ready(function(){
    animaPhoto();
    animaPhotoL();
});


/* FADE IN */
function animaPhoto(){
    const obeserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements =  document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => obeserver.observe(el));
}

/* FADE LEFT */
function animaPhotoL(){
    const obeserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if(entry.isIntersecting){
                entry.target.classList.add('showL');
            } else {
                entry.target.classList.remove('showL');
            }
        });
    });

    const hiddenElements =  document.querySelectorAll('.hiddenL');
    hiddenElements.forEach((el) => obeserver.observe(el));
}