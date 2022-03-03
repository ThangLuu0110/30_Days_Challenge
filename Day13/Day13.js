const $ = document.querySelector.bind(document);

const link = $('#image')
const label = $('.label')

link.addEventListener('change',()=>{
var file = link.files[0]
if(!file){
    return
}
if(!file.name.endsWith('jpg')){
    alert('Không đúng định dạng')
}
var imagePreview = document.createElement('img')
imagePreview.src = URL.createObjectURL(link.files[0])
label.appendChild(imagePreview)
})