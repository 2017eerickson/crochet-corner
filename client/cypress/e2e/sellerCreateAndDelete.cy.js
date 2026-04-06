describe('Seller create item page', () => {

    Cypress.Commands.add('login', () => {
        cy.visit('/sellers')
        cy.get('#formBasicEmail').type('test@test.com')
        cy.get('#formBasicPassword').type('password')
        cy.get('#formBasicCheckbox').click()
        cy.get('#loginSubmitBtn').click()
    });

    it('should have a button for creating a new item on the seller home page', () => {
        cy.login()
        cy.get('button').contains('Create New Product').should('exist')
    })
    it('should navigate to create item page when create new item button is clicked', () => {        
        cy.login()
        cy.get('button').contains('Create New Product').click()
        cy.url().should('include', '/createproduct')
    })
    it('should create new item and display it on seller home page then delete', () => {
        cy.login()
        cy.get('button').contains('Create New Product').click()
        cy.get('#itemName').type('Test Item')
        cy.get('#descriptionInput').type('Test description')
        cy.get('#itemPrice').type('29.00')
        cy.get('#saveBtn').click()
        cy.url().should('include', '/sellerhomepage')
        cy.get('#sellerDisplay').last().should('contain', 'Test Item');  
        cy.get('#sellerDisplay').last().find('button').contains('Delete').click()
        cy.get('#sellerDisplay').should('not.contain', 'Test Item')
  
    })
    

})  