function validateForm() {
    const name = document.forms["myForm"]["name"].value;
    const email = document.forms["myForm"]["email"].value;
    const phone = document.forms["myForm"]["phone"].value;
  
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
  
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
  
    if (phone == "") {
      alert("Phone must be filled out");
      return false;
    }
  
    if (!phone.match(/^\d{10}$/)) {
      alert("Invalid phone number. Please enter a 10-digit number");
      return false;
    }
  
    return true;
  }
  