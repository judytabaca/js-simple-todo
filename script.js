// vars
let newTask;
let result;


document.getElementById("addTask").onclick = function() {
    let newTask = document.getElementById("input").value;
    // console.log(newTask);
    // console.log("<li>" + newTask + "</li><button>Remove</button>");
    document.getElementById('myList').insertAdjacentHTML('afterbegin', '<li style="list-style: none;">' + newTask + '</li>');
    return result
}



function sayHi() {
    console.log("I said Hi!");
};
sayHi();

function greet(a, b) {
    console.log(a * b);
};

greet(2, 5);