describe('Home Page', () => {
    it('should display all items for sale ', () => {
        cy.visit('/')
        cy.get('#itemDisplay').children().should('have.length', 3)
    })
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
    
})

// need test for all items for sale displaying
//need test for viewing item details 
//need test for adding item to cart via detail page 
//test that cart quantitiy updates upon addition of cart item 
//test that you cant add duplicate items to cart 
//test adding item from homepage chages cart quanitty display 
//test that both item are displayed on cart page 
//test that checkout button and stripe works
//test that after payment orderstatus page is displayed 
//test login take you to seller home page 
//test that navbar has logout in in on seller page 
//test that view details button on sellerhomepage takes you to sellerdetails page
//test that edit item button on seller details page takes you to edit item page
//test that edit item page has prepopulated data after save 
//test create item button on seller home page takes you to create item page
//test that create item page creates item and takes you to seller home page with new item displayed
//test that delete item button on seller details page deletes item and takes you to seller home page without deleted item displayed
//test that logout button on seller home page logs you out and takes you to homepage