const users = [
    { rollnumber: "160123733036", password: "160123733036", name: "Vivek Chandra" },
    { rollnumber: "160123733040", password: "160123733040", name: "Yashwanth" }
];
function handleSubmit(event) {
    event.preventDefault();
    const rollnumber = document.getElementById("floatingInput").value;
    const password = document.getElementById("floatingPassword").value;

    if (rollnumber && password) {
        window.location.href = "Home.html";
    } else {
        alert("Please fill in both fields!");
    }
    const user = users.find(u => u.rollnumber === rollnumber && u.password === password);
    if (user) {
        document.cookie = `username=${user.name}; path=/; max-age=86400`; 
        window.location.href = "Home.html";
    } else {
        alert("Invalid roll number or password!");
    }
}
function greetUser() {
    const cookies = document.cookie.split('; ');
    const usernameCookie = cookies.find(cookie => cookie.startsWith('username='));
    
    if (usernameCookie) {
        const username = usernameCookie.split('=')[1];
        document.querySelector(".greet").innerHTML="Welcome!"+username
    }
}
function handleLogout() {
    document.cookie = "username=; path=/; max-age=0"; 
    window.location.href = "login.html";
}

window.onload = greetUser;