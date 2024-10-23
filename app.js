const users = {
    "admin": {
        username: "admin",
        password: "12345678",
        role: "admin"
    },
    "user": {
        username: "user",
        password: "12345678",
        role: "user"
    }
};

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] && users[username].password === password) {
        if (users[username].role === "admin") {
            window.location.href = "admin.html";
        } else {
            window.location.href = "user.html";
        }
    } else {
        document.getElementById("message").textContent = "Nome de usuário ou senha incorretos!";
    }
});