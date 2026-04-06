describe('Details page', () => {
     it('should display item details when view details button is clicked', () => {
        cy.visit('/')
        cy.get('#viewDetailsBtn').click()
        cy.get('#productDetails').should('exist')
    })
    it('should add item to cart when add to cart button is clicked on detail page', () => {
        cy.visit('/')
        cy.get('#viewDetailsBtn').click()
        cy.get('#addToCartBtn').click()
        //checks value in cart quantity display in navbar updates to 1
        cy.get('#cartQuantity').should('have.text',  '1')
    })
    it('should not add duplicate items to cart', () => {
        cy.visit('/details/1')
        cy.get('#addToCartBtn').click()
        //checks that alert is displayed when trying to add duplicate item to cart
        cy.on('window:alert', (str) => {
            expect(str).to.equal('item already in cart ')
          })
    
    })
})