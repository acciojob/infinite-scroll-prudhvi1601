
const ol = document.querySelector('#infi-list');

const li = document.createElement('li');
function createItem() {
    for (var i = 0; i < 9; i++) {
        li.innerHTML = "Item " + i;
        ol.appendChild(li);
    }
}

console.log(createItem());
