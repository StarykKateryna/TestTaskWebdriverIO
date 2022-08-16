class ProductsListScreen {

    get list() {
      return $("~test-PRODUCTS");
    }

    item(name, price) {
      return this.list.$(`~󰝁 ${name} $${price} 󰇛 ADD TO CART`);
    }

    addToCartBtn(name, price) {
      return this.item(name, price).$('//*[@name="ADD TO CART"]')
    }

    
  }
  
  export default new ProductsListScreen();