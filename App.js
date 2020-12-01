class Product {
    constructor(name, price, year){
        this.name = name,
        this.price = price,
        this.year = year
    }

}

class UI{
    addProduct(product){
        const productList = document.getElementById("product-list");
        const element = document.createElement("div");
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Price</strong> ${product.price}
                    <strong>Product Year</strong> ${product.year}
                </div>
            </div>
       `;
       productList.appendChild(element);
    }
    deleteProduct(){

    }
    showMessage(){

    }
}

document.getElementById("product-form")
    .addEventListener("submit", function(){
   const name = document.getElementById("name").value;
   const price = document.getElementById("price").value;
   const year = document.getElementById("year").value;

   const product = new Product(name, price, year);
   const ui= new UI();
   ui.addProduct(product);


   e.preventDefault();
});