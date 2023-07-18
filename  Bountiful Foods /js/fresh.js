// Fetch the fruit data from the JSON source and populate the select elements
fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
  .then(response => response.json())
  .then(data => {
    const fruitOptions = data.map(fruit => `<option value="${fruit.name}">${fruit.name}</option>`);
    const selectElements = document.querySelectorAll('#fruit1, #fruit2, #fruit3');
    selectElements.forEach(select => {
      select.innerHTML = fruitOptions.join('');
    });
  })
  .catch(error => {
    console.error('Error fetching fruit data:', error);
  });

// Event listener to handle form submission
document.getElementById('submitBtn').addEventListener('click', event => {
  event.preventDefault(); // Prevent form submission if the form is not valid

  // Get form input values
  const firstName = document.getElementById('firstName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const fruit1 = document.getElementById('fruit1').value;
  const fruit2 = document.getElementById('fruit2').value;
  const fruit3 = document.getElementById('fruit3').value;
  const specialInstructions = document.getElementById('specialInstructions').value;

  // Get the current date in the format YYYY-MM-DD
  const orderDate = new Date().toISOString().slice(0, 10);

  // Calculate total nutrients based on the selected fruits
  const fruits = [fruit1, fruit2, fruit3];
  let totalCarbohydrates = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let totalSugar = 0;
  let totalCalories = 0;

  // Fetch the fruit data again to calculate the totals
  fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
    .then(response => response.json())
    .then(data => {
      fruits.forEach(fruitName => {
        const selectedFruit = data.find(fruit => fruit.name === fruitName);
        if (selectedFruit) {
          totalCarbohydrates += selectedFruit.nutritions.carbohydrates;
          totalProtein += selectedFruit.nutritions.protein;
          totalFat += selectedFruit.nutritions.fat;
          totalSugar += selectedFruit.nutritions.sugar;
          totalCalories += selectedFruit.nutritions.calories;
        }
      });

      // Create the output message
      const outputMessage = `
        <h3>Order Summary</h3>
        <p><b>First Name:</b> ${firstName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone Number:</b> ${phone}</p>
        <p><b>Fruit 1:</b> ${fruit1}</p>
        <p><b>Fruit 2:</b> ${fruit2}</p>
        <p><b>Fruit 3:</b> ${fruit3}</p>
        <p><b>Special Instructions:</b> ${specialInstructions}</p>
        <p><b>Order Date:</b> ${orderDate}</p>
        <h3>Total Nutrients</h3>
        <p><b>Total Carbohydrates:</b> ${totalCarbohydrates}g</p>
        <p><b>Total Protein:</b> ${totalProtein}g</p>
        <p><b>Total Fat:</b> ${totalFat}g</p>
        <p><b>Total Sugar:</b> ${totalSugar}g</p>
        <p><b>Total Calories:</b> ${totalCalories}</p>
      `;

      // Display the output on the page
      document.getElementById('output').innerHTML = outputMessage;
    })
    .catch(error => {
      console.error('Error fetching fruit data:', error);
    });
});
