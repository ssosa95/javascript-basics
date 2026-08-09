fetch("https://jsonplaceholder.typicode.com/users/6")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(data.name);
        console.log(data.email);
        console.log(data.address);
        console.log(data.username);
        console.log(data.address.street);
        console.log(data.company.name);
        console.log(data.company.catchPhrase);
    });

