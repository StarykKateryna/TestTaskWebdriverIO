class CartContentScreen {
  get cartContent(){
    return $('~test-Cart Content')
  }

  get items() {
    return this.cartContent.$$('//XCUIElementTypeOther[@name="test-Item"]');
  }

  get checkoutBtn() {
      return $('~test-CHECKOUT')
    }
  }
  
  export default new CartContentScreen();