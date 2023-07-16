document.addEventListener('DOMContentLoaded', function() {
    // Fetch fruit data from the JSON data source
    fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
      .then(response => response.json())
      .then(data => {
        // Get references to the select elements
        const fruit1Select = document.getElementById('fruit1');
        const fruit2Select = document.getElementById('fruit2');
        const fruit3Select = document.getElementById('fruit3');
  
        // Populate the select elements with fruit options
        data.forEach(fruit => {
          const option1 = document.createElement('option');
          const option2 = document.createElement('option');
          const option3 = document.createElement('option');
          option1.text = fruit.name;
          option2.text = fruit.name;
          option3.text = fruit.name;
          fruit1Select.add(option1);
          fruit2Select.add(option2);
          fruit3Select.add(option3);
        });
      });
  });
  