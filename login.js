// Toggle Password

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

// Login Function
document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("btnLogin");

    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const errorMsg = document.getElementById("errorMsg");

            // Set your valid credentials here
            const validUsername = "admin";
            const validPassword = "yuya-admin123";

            if (username === validUsername && password === validPassword) {
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "dashboard.html"; // Redirect to your main system page
            } else {
                errorMsg.textContent = "⚠️ Incorrect username or password!";
            }
        });
    }

    // -------- MAIN PAGE PROTECTION --------
    const currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "dashboard.html") {
        if (localStorage.getItem("isLoggedIn") !== "true") {
            alert("Please log in first!");
            window.location.href = "../login.html"; // Adjust path based on your folder structure
        }
    }
});
