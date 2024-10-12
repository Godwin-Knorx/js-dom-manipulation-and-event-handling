// Traverse the DOM

// Parent node traversal

// Initially i had declared a variable called "ul" which selects the 'ul' element

console.log(ul.parentNode); // It displays the parent of the 'ul' element
console.log(ul.parentElement); // It also displays the parent element of 'ul'

console.log(ul.parentNode.parentNode); //displays the grand parents of the 'ul'
console.log(ul.parentElement.parentElement); // Does the same thing

// We will get to understand the difference between parentNode and parentElement

const html = document.documentElement;

console.log(html);
console.log(html.parentNode); // It does not matter so long as is a node
console.log(html.parentElement); // It has to be an element

// child Nodes Traversal

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// Sibling Node Traversal


