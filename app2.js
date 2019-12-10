const listItems = document.getElementsByTagName("li");
console.log(listItems);
console.log(listItems.length);
console.log(listItems[0]);

//collection to array
Array.from(listItems).forEach(listItem =>{
    listItem.style.color = "red";
});

const btn = document.getElementsByClassName("btn");
console.log(btn);
btn[0].style.backgroundColor = "yellow";

//select element by ID
const title = document.getElementById("title");
console.log(title);
title.textContent = "Hello World!";

//select element with queryselector

const list1 = document.querySelector("#list");
console.log(list1);

const link = document.querySelector("li.item a");
console.log(link);
link.style.textDecoration = "none";
link.style.color = "green";

