describe('Seller Home Page', () => {
    it('should navigate to seller home page after successful login', () => {
        cy.visit('/sellers')
        cy.get('#formBasicEmail').type('test@test.com')
        cy.get('#formBasicPassword').type('password')
        cy.get('#formBasicCheckbox').click()
        cy.get('#loginSubmitBtn').click()
        cy.url().should('include', '/sellerhomepage')
        cy.get('#sellerDisplay').children().should('have.length', 5)

        })
    it ("should have a navigation bar with a logout button ", () =>{
        cy.visit('/sellers')
        cy.get('#formBasicEmail').type('test@test.com')
        cy.get('#formBasicPassword').type('password')
        cy.get('#formBasicCheckbox').click()
        cy.get('#loginSubmitBtn').click()
        cy.url().should('include', '/sellerhomepage')
        cy.get('button').contains('Logout').should('exist')

    })
})