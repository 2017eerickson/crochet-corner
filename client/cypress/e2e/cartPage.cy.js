describe('CartPage', () => {
    it('should navigate to cart page and display correct number ofitems in cart when cart button is clicked', () => {
        cy.visit('/')
        cy.get('#addToCartBtn').first().click()
        cy.get('#itemDisplay').children().eq(1).find('#addToCartBtn').click()
        cy.get('#itemDisplay').children().eq(2).find('#addToCartBtn').click()
        cy.get('#cartQuantity').should('have.text',  '3')
        cy.get('#cartButton').click()
        cy.get('#cartItemContainer').children().should('have.length', 3)
    })
    it('should remove item from cart when remove from cart button is clicked on cart page', () => {
        cy.visit('/')
        cy.get('#addToCartBtn').first().click()
        cy.get('#cartButton').click()
        cy.get('#removeFromCartBtn').first().click()
        //checks that your cart is empty message is displayed after item is removed from cart
        cy.get('#cartItems').should('contain', 'Your cart is empty...')
        cy.get('#cartQuantity').should('have.text',  '0')
    })
    it('should navigate to checkout page when checkout button is clicked on cart page', () => {
        cy.visit('/')
        cy.get('#addToCartBtn').first().click()
        cy.get('#cartButton').click()
        cy.get('button').contains('Checkout').click()
        cy.url().should('include', '/checkout')
    })
})


// it('completes a Stripe payment', () => {
    //     cy.visit('/checkout');
        
    //     // Fill Stripe fields using the custom command
    //     cy.fillStripeElement('cardnumber', '4242 4242 4242 4242');
    //     cy.fillStripeElement('exp-date', '12/25');
    //     cy.fillStripeElement('cvc', '123');
    //     cy.fillStripeElement('postal', '90210');

    //     cy.get('#submit-button').click();
    //     cy.contains('Success').should('be.visible');
    // });