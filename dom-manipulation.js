// DOM Manipulation

// manipulating the css styles

title.style.color = 'white'; // it works when it is one item selected. since it is an inline styling

console.log(title);

const list = document.querySelectorAll('.list-items');
// list.style.fontWeight = 'bold';   This doesn't work since multiple elements are selected
// For it to work, we need to loop each of the elements

// looping the elements using a for loop
list.forEach(element => {
  element.style.fontFamily = 'Roboto'; // After looping each element, change the style of the each element in the list 
});

console.log(list.length);

for ( i = 0; i < list.length; i++ ) { // using the standard for loop
  list[i].style.fontSize = '2rem'; // changes the font size of the elements inside the list
}

// creating elements

const ul = document.querySelector('ul');
const li = document.createElement('li'); // this is creates an "li" element

// Adding elements

ul.append(li); // this places "li" as the child of "ul"

// Modifying the text

const firstListItem = document.querySelector('.list-items');

console.log(firstListItem.innerHTML); // displays everything including the html tags
console.log(firstListItem.innerText); // displays text only
console.log(firstListItem.textContent); // diplay text only but the way it is in the html file

li.innerText = 'Candy'; // i have changed the inner text of the created element above to display candy

// Modifying attributes and classes

li.setAttribute('id', 'main-heading'); // This is setting the class attribute of the created element to "list-items"

li.removeAttribute('id'); // This is removing the class attribute on the li element created earlier

// Accesing attributes

const titleAttribute = title.getAttribute('id'); // gets the "id attribute of the title and assigns it a variable"
console.log(titleAttribute); // displays the "id" attribute stored in the varaible "titleAttribute"

li.classList.add('list-items'); // This adds the class attribute named "list-items"
// It works the same way as ------> li.setAttribute('class', 'list-items');

console.log(li.classList.contains('list-items')); // To check if an element has the class selected. It returns true or false

li.classList.remove('list-items'); // removing a class from an element

console.log(li.classList.contains('list-items')); // To check if an element has the class selected. It returns true or false


