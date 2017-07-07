var index = 1;
showImage(index);
function showImage(ind) {
    var slides = document.getElementsByClassName('slides');
    if (ind > slides.length) {
        index = 1;
    }
    if (ind < 1) {
        index = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[index - 1].style.display = 'block';
}
function incrementIndex() {
    index++;
    showImage(index);
}
setInterval(incrementIndex, 1000);