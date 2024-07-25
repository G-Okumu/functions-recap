// Initialize an empty array to hold item objects
let list_of_item_object = [];

// Define a function to add a new object to the list
const add_new_object = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value of the 'name' input field
    let name = document.getElementById('name').value;
    // Get the value of the 'quantity' input field
    let quantity = document.getElementById('quantity').value;
    // Get the value of the 'unit' input field
    let unit = document.getElementById('unit').value;
    // Get the value of the 'price' input field
    let price = document.getElementById('price').value;

    // Add the new object to the list_of_item_object array
    list_of_item_object.push({ "name": name, "quantity": quantity, "unit": unit, "price": price });

    // Call the display function to update the display area
    display();

    // Reset the form fields
    document.getElementsByTagName('form')[0].reset();
}

// Define a function to display the list of items
const display = () => {
    // Get the element with the id 'list'
    let display_area = document.getElementById("list");
    // Clear the current content of the display area
    display_area.innerHTML = '';

    // Iterate over each item in the list_of_item_object array
    list_of_item_object.forEach(element => {
        // Append the HTML for each item to the display area
        display_area.innerHTML += `
            <card>
                <cardbody>
                <h1>${element.name}</h1>
                <pre>Unit: ${element.unit}</pre>
                <p>Quantity: ${element.quantity}</p>
                <quote>Price: ${element.price}</quote>
                <button onclick="remove_item('${element.name}')">Remove</button>
                </cardbody>
            </card>
            `
    });
}

// Define a function to remove an item from the list
function remove_item(name) {
    // Filter out the item with the specified name from the list_of_item_object array
    list_of_item_object = list_of_item_object.filter(item => item.name.toLowerCase() !== name.toLowerCase());
    // Call the display function to update the display area
    display();
}

// Define a function to search for an item in the list
const search = () => {
    // Get the value of the 'search' input field
    let word = document.getElementById('search').value;
    // Filter the list_of_item_object array to show only items that match the search word
    list_of_item_object = list_of_item_object.filter(item => item.name.toLowerCase() === word.toLowerCase());
    // Call the display function to update the display area
    display();
}

// TO DO
// Define a function to calculate the mean price of all items
