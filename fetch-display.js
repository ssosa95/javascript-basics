async function displayAllUsers() {
    try {
        const userList = document.querySelector("#userList");
        const response = await fetch("https://jsonplaceholder.typicode.com/users/");
        
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
}
        const data = await response.json();

        let userListHTML = "";
        data.forEach((user) => {
            userListHTML += `
                <h2>${user.name}</h2>
                <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                <p>Email: ${user.email}</p>
                <p>Phone Number: ${user.phone}</p>
                <p>Company: ${user.company.name}</p>
            `;
        });
        userList.innerHTML = userListHTML;
}   catch (error) {
        console.log("Error fetching user data:", error);
}
}

displayAllUsers();