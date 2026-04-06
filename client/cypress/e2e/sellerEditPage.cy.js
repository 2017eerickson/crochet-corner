describe('Seller details/Edit Page', () => {

    Cypress.Commands.add('login', () => {
        cy.visit('/sellers')
        cy.get('#formBasicEmail').type('test@test.com')
        cy.get('#formBasicPassword').type('password')
        cy.get('#formBasicCheckbox').click()
        cy.get('#loginSubmitBtn').click()
    });

    it ('should navigate to seller details page when view details button is clicked on seller home page', () => {
        cy.login()
        cy.get('#sellerDisplay').children().eq(0).find('button').contains('View Details').click()
        cy.url().should('include', '/sellerdetails/')  
    })
    it ('should open edit item page when edit item button is clicked on seller details page', () => {
        cy.login()
        cy.get('#sellerDisplay').children().eq(0).find('button').contains('View Details').click()
        cy.get('#formBasicPassword').type('password')
        cy.get('#formBasicCheckbox').click()
        cy.get('#loginSubmitBtn').click()
        cy.get('#sellerDisplay').children().eq(0).find('button').contains('View Details').click()
        cy.get('button').contains('Edit Item').click()
        cy.get('button').contains('Save').should('exist')
        cy.get('button').contains('Cancel').should('exist')
    })
     it ('should update item details on seller home page after saving changes on edit item page', () => {
        cy.login()
        cy.get('#sellerDisplay').children().eq(0).find('button').contains('View Details').click()
        cy.get('button').contains('Edit Item').click()
        cy.get('#itemName').type('updated name')
        cy.get('button').contains('Save').click()
        cy.get('#sellerDetailsName').should('have.text', 'updated name')
     })

    
})