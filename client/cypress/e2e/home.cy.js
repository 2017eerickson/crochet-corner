import CartPage from "../../src/pages/CartPage"

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

describe('Gallery Page', () => {
     // it('should display items sold items', () => {
    //     cy.visit('/gallery')
    //     //check tht there ate to itens displayed on gallery page 

    //     cy.get('#galleryItems').children().should('have.length', 2)
    // })
})

describe('Seller Details Page', () => {})
describe('Edit Item Page', () => {})
describe('Create Item Page', () => {})
describe('Delete Item', () => {})
describe('Logout', () => {})
       


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