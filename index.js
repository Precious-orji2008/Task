document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    if (name === "" || email === "") {
      alert("Please fill out all fields before submitting.");
    } else {
      alert("Form submitted successfully!");
    }
  });
