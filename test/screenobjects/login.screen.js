class LoginScreen {
  password = 'secret_sauce';

    get userNameInput() {
      return $("~test-Username");
    }

    get passwordInput() {
      return $('~test-Password');
    }

    get loginBtn() {
      return $("~test-LOGIN");
    }

    async loginAsStandardUser (){
      await this.userNameInput.setValue('standard_user');
      await this.passwordInput.setValue(this.password);
      await this.loginBtn.click();
    }
    
  }
  
  export default new LoginScreen();