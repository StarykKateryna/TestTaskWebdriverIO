class CheckoutScreen {

  //checkout Information 
    get checkoutInfoHeader() {
      return $('//XCUIElementTypeStaticText[@name="CHECKOUT: INFORMATION"]');
    }

    get firstNameInput() {
      return $('~test-First Name');
    }

    get lastNameInput() {
      return $('~test-Last Name');
    }

    get postalCodeInput() {
      return $('~test-Zip/Postal Code');
    }

    get continueBtn() {
      return $("~test-CONTINUE");
    }

    async fillInfo (firstName, lastName, postalCode){
      await this.firstNameInput.setValue(firstName);
      await this.lastNameInput.setValue(lastName);
      await this.postalCodeInput.setValue(postalCode);
      await this.continueBtn.click();
    }

    //checkout overview 

    itemName(name) {
      return $(`~${name}`);
    }

    get paymentInfo (){
      return $('~Payment Information: SauceCard #31337')
    }

    get shippingInfo(){
      return $('~Shipping Information: FREE PONY EXPRESS DELIVERY!')
    }

    itemTotal(total){
      return $(`~Item total: $${total}`)
    }

    get finishBtn (){
      return $('~test-FINISH')
    }

    //checkout COMPLETE 

    get checkoutComplited (){
      return $('//XCUIElementTypeOther[@name="CHECKOUT: COMPLETE!"]')
    }

    get orderSuccess(){
      return $('~THANK YOU FOR YOU ORDER')
    }
  }
  
  export default new CheckoutScreen();