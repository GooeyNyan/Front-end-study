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
        alert("Please enter an integer between 10 and 100");
        myInput.value = null;
        myInput.focus();
        return;
    }
    if (inputValue > 100 || inputValue < 10) {
        alert("Please enter an integer between 10 and 100");
        myInput.value = null;
        myInput.focus();
        return;
    } else {
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
        alert("Please enter an integer between 10 and 100");
        myInput.value = null;
        myInput.focus();
        return;
    }
    if (inputValue > 100 || inputValue < 10) {
        alert("Please enter an integer between 10 and 100");
        myInput.value = null;
        myInput.focus();
        return;
    } else {
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
    let str = ul.firstElementChild.style.height;
    // remove the node
    ul.removeChild(ul.firstElementChild);
    // alert the textContent
    alert("The element's height: " + str);
    myInput.focus();
}

function rightOut() {
    let str = ul.lastElementChild.style.height;
    ul.removeChild(ul.lastElementChild);
    alert("The element's height: " + str);
    myInput.focus();
}

function orderList() {
    let list = ul.getElementsByTagName('li');
    let stop = 0;
    let delay = 1800 / list.length;
    let i = 0, j = 0;
    let intervalID = setInterval(function () {
        if (i < list.length) {
            if (j < list.length - i - 1) {
                    list[j].className = "";
                    list[j + 1].className = "active";
                if (list[j].offsetHeight > list[j + 1].offsetHeight) {
                    let temp = list[j].style.height;
                    list[j].style.height = list[j + 1].style.height;
                    list[j + 1].style.height = temp;
                }
                j++;
            } else {
                i++;
                list[list.length - i].className = "finished";
                j = 0;
            }
        }
    }, delay);
}

function createList() {
    ul.innerHTML = '';
    for (let i = 0; i < 60; i++) {
        let li = document.createElement('li');
        li.style.height = Math.floor(Math.random() * 100 * 3 + 1 + 10) + "px";
        li.addEventListener('click', function () {
            this.remove();
            myInput.focus();
        });
        ul.appendChild(li);
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

function resetList() {

}


// select the element what we need
var myInput = document.querySelector('#myInput');
var leftInButton = document.querySelector('#leftIn');
var rightInButton = document.querySelector('#rightIn');
var leftOutButton = document.querySelector('#leftOut');
var rightOutButton = document.querySelector('#rightOut');
var orderButton = document.querySelector('#orderButton');
var resetButton = document.querySelector('#resetButton');
var createButton = document.querySelector('#createButton');
var ul = document.querySelector('#number-list');

// add click event
leftInButton.addEventListener('click', leftIn);
rightInButton.addEventListener('click', rightIn);
leftOutButton.addEventListener('click', leftOut);
rightOutButton.addEventListener('click', rightOut);
orderButton.addEventListener('click', orderList);
resetButton.addEventListener('click', resetList);
createButton.addEventListener('click', createList);

myInput.focus();