const button = document.getElementById("sendPostId");
button.onclick = e => {
    fetch(`https://jsonplaceholder.typicode.com/users/${postId.value}`)
        .then(response => {
            console.log(response);
            if (response.ok){
                // console.log(response.text());
                return response.json();
            }
            else {
                console.log(response.status)
                 throw new Error(response.status);
            }
        })
        .then(data => {
            console.log(data)
            const name = document.createElement('h2');
            name.appendChild(document.createTextNode(`Name ${data.name}`));
            document.body.appendChild(name);
            const city = document.createElement('h3');
            city.appendChild(document.createTextNode(`City: ${data.address.city}`));
            document.body.appendChild(city);
            const street = document.createElement('h3');
            street.appendChild(document.createTextNode(`Street: ${data.address.street}`));
            document.body.appendChild(street);
        })
        .catch(e => {
            console.log(e);
            const h2 = document.createElement('h2');
            h2.appendChild(document.createTextNode(`Error: ${Error.status}`));
            document.body.appendChild(h2);
        })
}