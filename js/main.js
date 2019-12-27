function addProductsToMainScreen() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.responseText);
            if(result.connectionError != '' || result.queryError != '') {
                alert(result.connectionError + result.queryError + result.requestError);
            } else {
                clearAllProducts();
                var productsList = document.getElementById('main-section')
                result.products.forEach(function(value) {
                    var h3 = document.createElement('h3');
                    h3.innerText = value.title;
                    var img = document.createElement('img');
                    img.src = "img/no-img.png";
                    img.alt = "Product image";
                    var p = document.createElement('p');
                    p.innerText = '€' + value.price;

                    var product = document.createElement('div');
                    product.className = 'product';
                    product.appendChild(h3);
                    product.appendChild(img);
                    product.appendChild(p);
                    product.addEventListener("click", function() {
                        location.href = 'details.php?get=' + value.id;
                    });

                    var col = document.createElement('div');
                    col.className = 'col';
                    col.appendChild(product);

                    productsList.appendChild(col);
                });
            }
        }
    };
    xhttp.open("POST", "http://localhost/tutorials/e-business-warehouse/includes/get.inc.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('get=all');
}

function clearAllProducts() {
    var productsList = document.getElementById('main-section');
    while(productsList.firstChild) {
        productsList.removeChild(productsList.firstChild);
    }
}

function getDetails(id) {
    var detailsSection = document.getElementById('details-section');

    var h2 = document.createElement('h2');
    h2.className = "details-center-align";
    h2.innerText = 'No such product';

    var pDescription = document.createElement('p');
    pDescription.className = "details-left-align";
    pDescription.innerText = 'bbbbbbb';
    pDescription.style.display = 'none';

    var pPrice = document.createElement('p');
    pPrice.className = "details-right-align";
    pPrice.innerText = 'price';
    pPrice.style.display = 'none';

    var pStock = document.createElement('p');
    pStock.className = "details-right-align";
    pStock.innerText = 'price';
    pStock.style.display = 'none';

    var button = document.createElement('button');
    button.className = "details-right-align";
    button.innerText = 'GET ACTUAL STOCK';
    button.style.display = 'none';
    button.addEventListener('click', function() {
        getProductStock(id, pStock);
    });

    detailsSection.appendChild(h2);
    detailsSection.appendChild(pDescription);
    detailsSection.appendChild(pPrice);
    detailsSection.appendChild(pStock);
    detailsSection.appendChild(button);

    if(id != '') {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var result = JSON.parse(this.responseText);
                console.log(this.responseText);
                if(result.connectionError != '' || result.queryError != '' || result.requestError != '') {
                    alert(result.connectionError + result.queryError + result.requestError);
                } else {
                    if(result.products.length != 0) {
                        h2.innerText = result.products[0].title;
                        pDescription.style.display = 'block';
                        pDescription.innerText = result.products[0].descrip;
                        pPrice.style.display = 'block';
                        pPrice.innerText = result.products[0].price;
                        pStock.style.display = 'block';
                        pStock.innerText = result.products[0].stock;
                        button.style.display = 'inline';
                    }
                }
            }
        };
        xhttp.open("POST", "http://localhost/tutorials/e-business-warehouse/includes/get.inc.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send('get=' + id);
    }
}

function getProductStock(id, element) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.responseText);
            if(result.connectionError != '' || result.queryError != '' || result.requestError != '') {
                alert(result.connectionError + result.queryError + result.requestError);
            } else {
                if(result.products.length != 0) {
                    element.textContent = result.products[0].stock;
                }
            }
        }
    };
    xhttp.open("POST", "http://localhost/tutorials/e-business-warehouse/includes/get.inc.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('get=' + id);
}

