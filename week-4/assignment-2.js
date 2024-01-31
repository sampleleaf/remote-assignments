function ajax(url) {
    return fetch(url)
        .then(response => response.json())
}

function render(data) {
    const table = document.querySelector('table')
    table.innerHTML =   `<tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                        </tr>`
    data.map(function (product) {
        table.innerHTML +=  `<tr>
                                <td>${product.name}</td>
                                <td>$${product.price}</td>  
                                <td>${product.description}</td>
                            </tr>`
    })
}

const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url).then((data) => {
    render(data);
});
