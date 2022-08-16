class ProductCardScreen {

    get backBtn() {
      return $("~test-BACK TO PRODUCTS");
    }

    itemName(name) {
      return $(`~${name}`);
    }

    get addToCartBtn() {
      return $('~ADD TO CART')
    }

    
  }
  
  export default new ProductCardScreen();