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
            `
            var td = document.createElement('td')
            var button = document.createElement('button')
            button.textContent = 'Delete'
            button.classList.add('btn')
            td.appendChild(button)

            button.addEventListener('click', function () {
                axios.delete(`https://northwind.now.sh/api/products/${product.id}`);
                td.parentElement.remove()
            });

            tr.append(td)
            tbody.appendChild(tr)
        });
    })
    .catch(err => console.log(err))