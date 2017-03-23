function leftIn() {
    // create the li element
    var li = document.createElement('li');

    // limit the amount of li element 
    var list = document.getElementsByTagName('li');
    if (list.length === 60) {
        alert("已输入的数据限制最多为60个，回炉重造吧…");
        myInput.focus();
        return;
    }

    // get input value from #myInput, If the input value is not a valid number...
    var inputValue = myInput.value;
    if (!isNumeric(inputValue)) {
        myInput.value = null;
        myInput.focus();
        return;
    }
    if (inputValue > 100 || inputValue < 10) {
        myInput.value = null;
        myInput.focus();
        return;
    } else {
        li.textContent = inputValue;
        li.style.height = inputValue * 3 + "px";
    }

    if (ul.firstElementChild !== null) {
        // if there is someone here already, insert before it
        ul.insertBefore(li, ul.firstElementChild);
    } else {
        // or just append at the end
        ul.appendChild(li);
    }

    // clear the input bar and focus on it
    myInput.value = null;
    myInput.focus();
    // add click event to remove the element
    li.addEventListener('click', function () {
        this.remove();
        myInput.focus();
    });
}

function rightIn() {
    // it is similar to the leftIn function
    var li = document.createElement('li');

    var list = document.getElementsByTagName('li');
    if (list.length === 60) {
        alert("已输入的数据限制最多为60个，回炉重造吧…");
        myInput.focus();
        return;
    }

    var inputValue = myInput.value;
    if (!isNumeric(inputValue)) {
        myInput.value = null;
        myInput.focus();
        return;
    }
    if (inputValue > 100 || inputValue < 10) {
        myInput.value = null;
        myInput.focus();
        return;
    } else {
        li.textContent = inputValue;
        li.style.height = inputValue * 3 + "px";
    }

    ul.appendChild(li);
    myInput.value = null;
    myInput.focus();
    li.addEventListener('click', function () {
        this.remove();
        myInput.focus();
    });
}

function leftOut() {
    // store the textContent of the element
    var str = ul.firstElementChild.textContent;
    // remove the node
    ul.removeChild(ul.firstElementChild);
    // alert the textContent
    alert("The element's value: " + str);
    myInput.focus();
}

function rightOut() {
    var str = ul.lastElementChild.textContent;
    ul.removeChild(ul.lastElementChild);
    alert("The element's value: " + str);
    myInput.focus();
}

function orderList() {
    let list = ul.getElementsByTagName('li');
    let temp;

    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length - i - 1; j++) {
            if (list[j].textContent > list[j + 1].textContent) {
                temp = list[j].style.height;
                list[j].style.height = list[j + 1].style.height;
                list[j + 1].style.height = temp;
                temp = list[j].textContent;
                list[j].textContent = list[j + 1].textContent;
                list[j + 1].textContent = temp;
            }
        }
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function swap(items, firstIndex, secondIndex) {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




// select the element what we need
var myInput = document.querySelector('#myInput');
var leftInButton = document.querySelector('#leftIn');
var rightInButton = document.querySelector('#rightIn');
var leftOutButton = document.querySelector('#leftOut');
var rightOutButton = document.querySelector('#rightOut');
var orderButton = document.querySelector('#orderButton');
var ul = document.querySelector('#number-list');

// add click event
leftInButton.addEventListener('click', leftIn);
rightInButton.addEventListener('click', rightIn);
leftOutButton.addEventListener('click', leftOut);
rightOutButton.addEventListener('click', rightOut);
orderButton.addEventListener('click', orderList);

myInput.focus();