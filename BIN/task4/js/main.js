function leftIn() {
    // create the li element
    var li = document.createElement('li');
    // get input value from #myInput
    li.textContent = myInput.value;
    // if there is someone here already, insert before it
    if (ul.firstElementChild !== null)
        ul.insertBefore(li, ul.firstElementChild);
    else
    // or just append at the end
        ul.appendChild(li);
    // clear the input bar and focus on it
    myInput.value = null;
    myInput.focus();
    // add click event to remove the element
    li.addEventListener('click', function(){
        this.remove();
        myInput.focus();
    });
}

function rightIn() {
    // it is similar to the leftIn function
    var li = document.createElement('li');
    li.textContent = myInput.value;
    ul.appendChild(li);
    myInput.value = null;
    myInput.focus();
    li.addEventListener('click', function(){
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

// select the element what we need
var myInput = document.querySelector('#myInput');
var leftInButton = document.querySelector('#leftIn');
var rightInButton = document.querySelector('#rightIn');
var leftOutButton = document.querySelector('#leftOut');
var rightOutButton = document.querySelector('#rightOut');
var ul = document.querySelector('#number-list');

// add click event
leftInButton.addEventListener('click', leftIn);
rightInButton.addEventListener('click', rightIn);
leftOutButton.addEventListener('click', leftOut);
rightOutButton.addEventListener('click', rightOut);

myInput.focus();