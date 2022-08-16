class HeaderScreen {

    get header() {
      return $("~headerContainer");
    }

    get cart() {
      return $('~test-Cart');
    }
  }
  
  export default new HeaderScreen();