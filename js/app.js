document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');

  // define function to create a new list item
  const addEntry = function(event) {
    event.preventDefault();

    // create new list item
    const newListItem = document.createElement('li');

    // create 3 spans with the contents of the form
    const title = document.createElement('h2');
    title.textContent = event.target.title.value;

    const author = document.createElement('h3');
    author.textContent = event.target.author.value;

    const category = document.createElement('p');
    category.textContent = event.target.category.value;

    // appent the 3 spans to the list item
    newListItem.appendChild(title);
    newListItem.appendChild(author);
    newListItem.appendChild(category);

    // append the list item to the list
    const list = document.querySelector('#reading-list');
    list.appendChild(newListItem);

    // clears up the form fields after submit
    event.target.reset();
  };

  // calls the addEntry function on submit
  form.addEventListener('submit', addEntry);

  // delete form
  const deleteForm = document.querySelector('#delete-form');

  // define function that deletes all list items
  const deleteAllListItems = function(event) {
    event.preventDefault();
    // select the list
    const list = document.querySelector('#reading-list');
    // delete all list items from list
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  };

  // calls the deleteAllListItems function when the delete button is pressed
  deleteForm.addEventListener('submit', deleteAllListItems);


})
