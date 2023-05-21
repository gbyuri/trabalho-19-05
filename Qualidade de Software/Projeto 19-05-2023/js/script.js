
let i = 0;

window.addEventListener('load', function banner() {
    document.querySelector('#img-1').checked = true;
    document.querySelector('.banner-img1').style.display = "block";
})

function checkbanner1() {
    addEventListener('click', function check(){
        document.querySelector('#img-2').checked = false;
        document.querySelector('#img-3').checked = false;
        document.querySelector('#img-4').checked = false;
        document.querySelector('#img-5').checked = false;
        document.querySelector('#img-1').checked = true;
        document.querySelector('.banner-img1').style.display = "block";
        document.querySelector('.banner-img2').style.display = "none";
        document.querySelector('.banner-img3').style.display = "none";
        document.querySelector('.banner-img4').style.display = "none";
        document.querySelector('.banner-img5').style.display = "none";
    })
}
function checkbanner2() {
    addEventListener('click', function check(){
        document.querySelector('#img-1').checked = false;
        document.querySelector('#img-3').checked = false;
        document.querySelector('#img-4').checked = false;
        document.querySelector('#img-5').checked = false;
        document.querySelector('#img-2').checked = true;
        document.querySelector('.banner-img2').style.display = "block";
        document.querySelector('.banner-img1').style.display = "none";
        document.querySelector('.banner-img3').style.display = "none";
        document.querySelector('.banner-img4').style.display = "none";
        document.querySelector('.banner-img5').style.display = "none";
    })
}
function checkbanner3() {
    addEventListener('click', function check(){
        document.querySelector('#img-1').checked = false;
        document.querySelector('#img-2').checked = false;
        document.querySelector('#img-4').checked = false;
        document.querySelector('#img-5').checked = false;
        document.querySelector('#img-3').checked = true;
        document.querySelector('.banner-img3').style.display = "block";
        document.querySelector('.banner-img1').style.display = "none";
        document.querySelector('.banner-img2').style.display = "none";
        document.querySelector('.banner-img4').style.display = "none";
        document.querySelector('.banner-img5').style.display = "none";
    })
}
function checkbanner4() {
    addEventListener('click', function check(){
        document.querySelector('#img-1').checked = false;
        document.querySelector('#img-2').checked = false;
        document.querySelector('#img-3').checked = false;
        document.querySelector('#img-5').checked = false;
        document.querySelector('#img-4').checked = true;
        document.querySelector('.banner-img4').style.display = "block";
        document.querySelector('.banner-img1').style.display = "none";
        document.querySelector('.banner-img2').style.display = "none";
        document.querySelector('.banner-img3').style.display = "none";
        document.querySelector('.banner-img5').style.display = "none";
    })
}
function checkbanner5() {
    addEventListener('click', function check(){
        document.querySelector('#img-1').checked = false;
        document.querySelector('#img-2').checked = false;
        document.querySelector('#img-3').checked = false;
        document.querySelector('#img-4').checked = false;
        document.querySelector('#img-5').checked = true;
        document.querySelector('.banner-img5').style.display = "block";
        document.querySelector('.banner-img1').style.display = "none";
        document.querySelector('.banner-img2').style.display = "none";
        document.querySelector('.banner-img3').style.display = "none";
        document.querySelector('.banner-img4').style.display = "none";
    })
}