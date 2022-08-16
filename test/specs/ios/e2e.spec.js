import LoginScreen from '../../screenobjects/login.screen'
import HeaderScreen from '../../screenobjects/header.screen'
import ProductsListScreen from '../../screenobjects/productsList.screen'
import ProductCardScreen from '../../screenobjects/productCard.screen'
import CartContentScreen from '../../screenobjects/cartContent.screen'
import CheckoutScreen from '../../screenobjects/checkout.screen'

describe('IOS', () => {
    it('login', async () => {
        const products = {
            first:{
                name: 'Sauce Labs Backpack', price:'29.99'
            },
            second:{
                name: 'Sauce Labs Fleece Jacket', price:'49.99'
            }
        };
        const postalCode = Math.random().toString(16).substr(2, 6); 
        const itemTotal = Number(products.first.price)+Number(products.second.price);

        // login
       await LoginScreen.loginAsStandardUser();
       await expect(await HeaderScreen.cart).toBeExisting();

       //add first product to the busket
       await ProductsListScreen.addToCartBtn(products.first.name, products.first.price).click();
       await expect(await HeaderScreen.cart).toHaveAttr('label', '1')

       //add second product to the busket throw product page
       await ProductsListScreen.item(products.second.name, products.second.price).click();
       await expect(await ProductCardScreen.itemName(products.second.name)).toBeExisting();
       await ProductCardScreen.addToCartBtn.click();
       await expect(await HeaderScreen.cart).toHaveAttr('label', '2')

       //check busket
       await HeaderScreen.cart.click();
       await expect(await CartContentScreen.items).toBeElementsArrayOfSize(2);
       await CartContentScreen.checkoutBtn.click();

       //checkout information
       await expect(await CheckoutScreen.checkoutInfoHeader).toBeExisting();

       await CheckoutScreen.fillInfo('Test', 'TestLastName', postalCode)

       await expect(await CheckoutScreen.itemName(products.first.name)).toBeExisting();
       await expect(await CheckoutScreen.itemName(products.second.name)).toBeExisting();
       await expect(await CheckoutScreen.paymentInfo).toBeExisting();
       await expect(await CheckoutScreen.shippingInfo).toBeExisting();
       await expect(await CheckoutScreen.itemTotal(itemTotal)).toBeExisting();

       await CheckoutScreen.finishBtn.click();
       
       await expect(await CheckoutScreen.checkoutComplited).toBeExisting();
       await expect(await CheckoutScreen.orderSuccess).toBeExisting();

    })
})