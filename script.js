
axios.get('https://northwind.vercel.app/api/products')
    .then(response => {
        var products = response.data;

        products.forEach(product => {

            var tbody = document.querySelector('tbody')
            var tr = document.createElement('tr')

            tr.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.unitPrice}</td>
                <td>${product.unitsInStock}</td>
                <td><button class='btn' data-id=${product.id} onclick=deleteProduct(${product.id})>Delete</button></td>
                `

            tbody.appendChild(tr)
        });
    })
    .catch(err => console.log(err, "Ürünler getirilemedi"))

const deleteProduct = (id) => {
    try {
        axios.delete(`https://northwind.now.sh/api/products/${id}`)
        document.querySelector(`[data-id="${id}"]`).parentElement.parentElement.remove();
    } catch (error) {
        console.log("Silme işlemi başarısız.")
    }
}