const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const imageShowed = $('#image--showed');
const imageInCollection = $$('.images-collections__item')
const prevButton = $('.arrow-button.left');
const nextButton = $('.arrow-button.right');


function showImage(){
    imageInCollection.forEach((image,index) => {
        if(image.classList.contains('active')){
            imageShowed.src = `./pic/img${index + 1}.jpeg`
        }
    })
}

imageInCollection.forEach((image,index) => {
    image.onclick = (e) => {
        $('.images-collections__item.active').classList.remove('active');
        image.classList.add('active')
        showImage();
    }   
})

function nextImage(){
    let currentIndex;
    for(var index = 0; index < imageInCollection.length; index++) {
        if(imageInCollection[index].classList.contains('active')){
            imageInCollection[index].classList.remove('active')
            if(index == imageInCollection.length - 1){
                currentIndex = 0;
            }
            else{
                currentIndex = index + 1;
            }
        }
    }
    imageInCollection[currentIndex].classList.add('active')
    showImage();
}
function prevImage(){
    let currentIndex;
    for(var index = 0; index < imageInCollection.length; index++) {
        if(imageInCollection[index].classList.contains('active')){
            imageInCollection[index].classList.remove('active')
            if(index == 0){
                currentIndex = imageInCollection.length - 1;
            }
            else{
                currentIndex = index - 1;
            }
        }
    }
    imageInCollection[currentIndex].classList.add('active')
    showImage();
}

prevButton.addEventListener('click',prevImage);
nextButton.addEventListener('click',nextImage);


