# Item List Management

This project is a simple web application to manage a list of items. Users can add, display, remove, and search for items. Additionally, the application calculates the mean price of all items.

- All meant to understand how to work with objects.

## Features

- Add new items to the list
- Display the list of items
- Remove items from the list
- Search for items by name
- Calculate and display the mean price of all items

## Technologies Used

- HTML
- CSS
- JavaScript

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/G-Okumu/functions-recap
    ```

2. **Navigate to the project directory:**
    ```bash
    cd functions-recap
    ```

3. **Open the `index.html` file in your web browser:**
    ```bash
    open index.html
    ```

## Usage

### Adding Items

1. Fill in the item details (name, quantity, unit, price) in the form.
2. Click the "Add Item" button to add the item to the list.
3. The item will be displayed in the list below the form.

### Removing Items

1. Click the "Remove" button next to the item you want to remove.
2. The item will be removed from the list.

### Searching for Items

1. Enter the name of the item you want to search for in the search box.
2. Click the "Search" button.
3. The list will display only the items that match the search term.

### Calculating Mean Price

1. The mean price of all items will be calculated and logged to the console when the `calculate_mean_price` function is called.
2. To calculate the mean price, you can add a button or call the function from the console.

## Code Explanation

### JavaScript Functions

#### `add_new_object(event)`

- Prevents the default form submission.
- Retrieves values from the input fields.
- Adds the new item object to the `list_of_item_object` array.
- Calls the `display` function to update the list.
- Resets the form fields.

#### `display()`

- Clears the current content of the display area.
- Iterates over each item in the `list_of_item_object` array and appends the HTML for each item to the display area.

#### `remove_item(name)`

- Filters out the item with the specified name from the `list_of_item_object` array.
- Calls the `display` function to update the list.

#### `search()`

- Filters the `list_of_item_object` array to show only items that match the search word.
- Calls the `display` function to update the list.

#### `calculate_mean_price()`

- Calculates the total price of all items using the `reduce` method.
- Calculates the mean price by dividing the total price by the number of items.
- Logs the mean price to the console.

## License

This project is licensed under the MIT License.
