window.onload = function() {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
        document.getElementById("userName").textContent = `${user.firstName} ${user.lastName}`;
        document.getElementById("userEmail").textContent = user.email;
        document.getElementById("firstName").textContent = user.firstName;
        document.getElementById("lastName").textContent = user.lastName;
        document.getElementById("profilePic").src = user.profilePic;
    } else {
        // If no user is logged in, redirect to the login page
        window.location.href = "index.html";
    }
}

function uploadProfilePic() {
    const fileInput = document.getElementById("uploadPic");
    const reader = new FileReader();

    reader.onload = function () {
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        user.profilePic = reader.result;
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        localStorage.setItem("user", JSON.stringify(user));  // Update the main user data too
        document.getElementById("profilePic").src = reader.result;
    }

    reader.readAsDataURL(fileInput.files[0]);
}

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}
