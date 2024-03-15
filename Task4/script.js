const userDatabase = {};
  console.log(userDatabase)

  function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if (userDatabase.hasOwnProperty(usernameInput) && userDatabase[usernameInput] === passwordInput) {
      // Login successful
      document.getElementById("login-form").style.display = "none";
      document.getElementById("register-form").style.display = "none";
      document.getElementById("secured-page").style.display = "block";
      document.getElementById("username-display").innerText = "Welcome, " + usernameInput + "!";
    } else {
      // Login failed
      alert("Incorrect username or password. Redirecting to register page.");
      showRegisterForm();
    }
  }

  function register() {
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;

    if (newUsername.trim() === '' || newPassword.trim() === '') {
      alert("Please enter a valid username and password.");
      return;
    }

    if (userDatabase.hasOwnProperty(newUsername)) {
      alert("Username already exists. Please choose a different one.");
    } else {
      userDatabase[newUsername] = newPassword;
      alert("Registration successful!");
      document.getElementById("login-form").style.display = "none";
      document.getElementById("register-form").style.display = "none";
      document.getElementById("secured-page").style.display = "block";
      document.getElementById("username-display").innerText = "Welcome, " + newUsername + "!";
    }
  }

  function showRegisterForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
    document.getElementById("secured-page").style.display = "none";
  }

  function showLoginForm() {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("secured-page").style.display = "none";
  }

  function logout() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
    document.getElementById("secured-page").style.display = "none";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("new-username").value = "";
    document.getElementById("new-password").value = "";
  }