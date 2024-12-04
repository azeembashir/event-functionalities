document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Display data
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayPassword").textContent = password;
  
    // Show result
    document.getElementById("result").classList.remove("hidden");
  
    // Optionally reset form
    this.reset();
  });
  