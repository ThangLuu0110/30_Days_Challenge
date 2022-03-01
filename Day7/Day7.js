var inputValue = document.querySelector('.search-part input');
var searchPart = document.querySelector('.search-part');
var removeBtn = document.querySelector('.remove-btn');
var deleteBtn = [];
document.onkeydown = function(e) {
    if(e.which == 13) {
        var searchValue = inputValue.value;
        var searchTag = document.createElement('div');
        searchTag.className = 'search-tag';
        var contentPart = document.createElement('div');
        contentPart.className = 'content';
        contentPart.innerText = `${searchValue}`;
        var removeXPart = document.createElement('div');
        removeXPart.className = 'remove-x';
        removeXPart.innerHTML += `<i class="bi bi-x-lg"></i>`;
        removeXPart.addEventListener('click', function(e) {
            removeXPart.parentElement.remove();
        });
        deleteBtn.push(removeXPart);
        searchTag.appendChild(contentPart);
        searchTag.appendChild(removeXPart);
        searchPart.appendChild(searchTag);
        inputValue.value = '';
        
    }
}
removeBtn.onclick = function(){
    var deleteAllSearchTag = document.querySelectorAll('.search-tag');
    for (var i = 0; i<deleteAllSearchTag.length; i++){
        deleteAllSearchTag[i].remove();
    }
}

function deleteAllSearchTag(){
    console.log('clicked');
}
