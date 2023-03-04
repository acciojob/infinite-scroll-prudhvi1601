
const ol = document.querySelector('#infi-list');

// Add 10 items
var nextItem = 1;
function createItem() {
    for (var i = 1; i <= 10; i++) {
        const li = document.createElement('li');
        li.innerHTML = "Item " + nextItem++;
        ol.appendChild(li);
    }
}

// detect when scrolled
ol.addEventListener('scroll', function (){
    if(ol.scrollTop + ol.clientHeight >= ol.scrollHeight){
        // when user scroll to bottom then it will add more
        createItem();
    }
});

// initially add some items
createItem();