// DOM Selection

// GetElementById()

const title = document.getElementById('main-heading');
console.log(title);

// GetElementByClassName()

const listItems = document.getElementsByClassName('list-items');
console.log(listItems);

// GetElementByTagName()

console.log(document.getElementsByTagName('li'));

// QuerySelector()

console.log(document.querySelector('li')); // selects the first instance of the 'li'

// querySelectorAll()

console.log(document.querySelectorAll('li')); // selects all the instamces of 'li'
