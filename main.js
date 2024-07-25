let list_of_item_object = [];

const add_new_object = (event) => {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let quantity = document.getElementById('quantity').value;
    let unit = document.getElementById('unit').value;
    let price = document.getElementById('price').value;

    list_of_item_object.push({ "name": name, "quantity": quantity, "unit": unit, "price": price });

    display(); // calling the function

    document.getElementsByTagName('form')[0].reset();
}


const display = () => {
    let display_area = document.getElementById("list");
    display_area.innerHTML = '';

    list_of_item_object.forEach(element => {
        display_area.innerHTML += `
            <card>
                <cardbody>
                <h1>${element.name}</h1>
                <pre>Unit: ${element.unit}</pre>
                <p>Quantity: ${element.quantity}  </p>
    
                <quote>Price: ${element.price}</quote>

                <button onclick="remove_item('${element.name}')">Remove</button>
                </cardbody>
            </card>
            `
    });
}

function remove_item(name) {
    list_of_item_object = list_of_item_object.filter(item => item.name.toLowerCase() !== name.toLowerCase());// show only items that do not match the name
    display(list_of_item_object);
}


const search = () => {
    let word = document.getElementById('search').value;
    list_of_item_object = list_of_item_object.filter(item => item.name.toLowerCase() === word.toLowerCase()); // show only items that matches the word.
    display(list_of_item_object);
}

// add a function that calculates the mean price of all items.
// - reduce
// - for loop