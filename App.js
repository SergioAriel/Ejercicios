class Product {
    constructor(name, price, year){
        this.name = name,
        this.price = price,
        this.year = year
    }

}

class UI{
    constructor(isShowAlert){
        this.isShowAlert = isShowAlert
    }
    addProduct(product){
        const productList = document.getElementById("product-list");
        const element = document.createElement("div");
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Year</strong>: ${product.year}
                    <a name="delete" href="#" class="btn btn-danger">Delete</a>
                </div>
            </div>
       `;
       productList.appendChild(element);
       
    }

    resetForm(){
        document.getElementById("product-form").reset()
    }

    deleteProduct(element){
        if(element.name === "delete"){
            element.parentElement.parentElement.parentElement.remove()
            this.showMessage("Product Delete Satisfactory", "danger")
        }
        
    }
    showMessage(message, cssClass){
        if (!this.isShowAlert) {
            this.isShowAlert=true
            const div = document.createElement("div");
            div.className = `alert alert-${cssClass}`;
            div.appendChild(document.createTextNode(message));
            //Showing in DOM
            const container = document.querySelector(".container");
            const app = document.querySelector("#App");
            if(document.querySelector(".alert")){
                document.querySelector(".alert").remove()
            }
            container.insertBefore(div, app)
            setTimeout(() => {
                document.querySelector(".alert").remove()
                this.isShowAlert=false
            }, 3000);;
        }

    }
}
//DOM Events
document.getElementById("product-form").addEventListener("submit", function(){
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const year = document.getElementById("year").value;
    const product = new Product(name, price, year);
    const ui= new UI(false);

    if(name==="" || price=== "" || year=== ""){
        return ui.showMessage("Complete Message", "info");
    };
    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage("Producto Agregado", 'success')

   event.preventDefault();
});

document.getElementById("product-list").addEventListener('click', function(e){
    const ui = new UI(false)
    ui.deleteProduct(e.target)
});