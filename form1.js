// function showData() {
//   var Name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;

//   document.getElementById("displayName").textContent = Name;
//   document.getElementById("displayEmail").textContent = email;
//   document.getElementById("displayPassword").textContent = password;

//   document.getElementById("result").classList.remove("hidden");
  
// }
function showData() {
    // Retrieve form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayPassword").textContent = password;

    
    document.getElementById("result").classList.remove("hidden");

    
    document.getElementById("signup").reset();
  }
  