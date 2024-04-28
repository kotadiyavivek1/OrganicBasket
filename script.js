document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    const formData = new FormData(event.target);
    
    // Convert FormData to JSON
    const json = {};
    formData.forEach((value, key) => {
      json[key] = value;
    });
    
    // Convert JSON to string
    const jsonString = JSON.stringify(json);
    
    // Log the JSON data (you can send it to your server)
    console.log(jsonString);
    
    // Reset the form
    event.target.reset();
  });

  function display(){
    alert("Our team contact you")
  }
  