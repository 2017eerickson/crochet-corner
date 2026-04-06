
describe('Home Page', () => {
    it('should display all items for sale ', () => {
        cy.visit('/')
        cy.get('#itemDisplay').children().should('have.length', 3)
    })
   
    it('should update cart quantity display in navbar when item is added to cart from homepage', () => {
        cy.visit('/')
        cy.get('#addToCartBtn').first().click()
        //checks value in cart quantity display in navbar updates to 1
        cy.get('#cartQuantity').should('have.text',  '1')
    })  
    it('should not add duplicate items to cart', () => {
        cy.visit('/')
        cy.get('#viewDetailsBtn').click()
        cy.get('#addToCartBtn').click()
        //checks that alert is displayed when trying to add duplicate item to cart
        cy.on('window:alert', (str) => {
            expect(str).to.equal('item already in cart ')
          })
    
    })
})

