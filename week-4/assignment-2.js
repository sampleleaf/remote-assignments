async function ajax(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

function render(data) {
    const table = document.querySelector('table')
    let tableContent =  `<tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                        </tr>`
    data.forEach(function (product) { //雖然map也能跑，但map會建立新陣列，重複讀取寫入，所以效能較低
    tableContent += `<tr>
                        <td>${product.name}</td>
                        <td>$${product.price}</td>  
                        <td>${product.description}</td>
                    </tr>`
    })
    table.innerHTML = tableContent
}

const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url).then((data) => {
    render(data);
});
