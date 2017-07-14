var index = 1;
var index2;
var index3;

slides(index)
function slides(ind) {

    var slides = document.getElementsByClassName('slides');

    if (ind > slides.length) {
        index = 1
    };
    if (ind < 1) {
        index = slides.length
    };
    // console.log(index1);
    index2 = index + 1;
    // var index3 = index2 + 1;
    if (index2 > slides.length) {
        index2 = 1
    };
    if (index2 < 1) {
        index2 = slides.length
    };
    // console.log(index2);
    var index3 = index2 + 1;
    if (index3 > slides.length) {
        index3 = 1
    };
    if (index3 < 1) {
        index3 = slides.length
    };
    // console.log(index3);
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[index-1].style.display = 'block';
    slides[index2 - 1].style.display = 'block';
    slides[index3 - 1].style.display = 'block';
    slides[index - 1].style.left = '0%'
    slides[index2 - 1].style.left = '33.4%'
    slides[index3 - 1].style.left = '66.7%'
}
function incrementIndex() {
    index++;
    slides(index)
}
// for previous picture
function decrementIndex() {
    index--;
    slides(index)
    // rest of the work is done by the method slides
}
//setInterval(incrementIndex, 1000)