
var imageGallery = document.querySelectorAll('.image-box');
var biggerImage = document.querySelector('.image');
var showImage = document.querySelector('.show-image');
var xBtn = document.querySelector('.x-btn');
var leftControl = document.querySelector('.left-control-btn');
var rightControl = document.querySelector('.right-control-btn');
var listImage = [
    {
        link: './pic/img1.jpeg'
    },
    {
        link: './pic/img2.jpeg'
    },
    {
        link: './pic/img3.jpeg'
    },
    {
        link: './pic/img4.jpeg'
    },
    {
        link: './pic/img5.jpeg'
    },
    {
        link: './pic/img6.jpeg'
    },
    {
        link: './pic/img7.jpeg'
    },
    {
        link: './pic/img8.jpeg'
    },
]
function zoomImage(){
    imageGallery.forEach(function(image, index){
        image.addEventListener('click', function(e){
            showImage.style.visibility=  "visible";
            biggerImage.innerHTML = '';
            var picture = document.createElement('img');
            picture.className = 'picture';
            picture.src = listImage[index].link;
            Object.assign(picture.style,{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            })
            biggerImage.appendChild(picture);
        })
    })
}
document.onkeydown = function(e) {
    if(e.which == 27){
        showImage.style.visibility= "hidden";
    }
}
xBtn.onclick = function(e) {
    showImage.style.visibility= "hidden";
}
leftControl.onclick = function(e) {
    var pictureLink = document.querySelector('.picture');
    var link = document.querySelector('.picture').src;
    var cutLink = `.${link.slice(-14)}`;
    for (var i=0; i<listImage.length;i++){
        if(listImage[i].link === cutLink){
            if(i == 0){
                pictureLink.src = listImage[7].link
            }
            else{
                pictureLink.src = listImage[i-1].link;
            }
        }
    }
    console.log(biggerImage.outerHTML)
}
rightControl.onclick = function(e) {
    var pictureLink = document.querySelector('.picture');
    var link = document.querySelector('.picture').src;
    var cutLink = `.${link.slice(-14)}`;
    for (var i=0; i<listImage.length;i++){
        if(listImage[i].link === cutLink){
            if(i == 7){
                pictureLink.src = listImage[0].link
            }
            else{
                pictureLink.src = listImage[i+1].link;
            }
        }
    }
    console.log(biggerImage.outerHTML)
}

zoomImage();