describe('Login', () => {
        it('should navigate to seller login page when login button is clicked on navbar', () => { 
            cy.visit('/')
            cy.get('button').contains('Login').click()
            cy.url().should('include', '/sellers')
        })
        it('should navigate to seller home page after successful login', () => {
            cy.visit('/sellers')
            cy.get('#formBasicEmail').type('test@test.com')
            cy.get('#formBasicPassword').type('password')
            cy.get('#formBasicCheckbox').click()
            cy.get('#loginSubmitBtn').click()
            cy.url().should('include', '/sellerhomepage')
        })
        
        // it('should navigate to seller home page after successful account creation', () => {
        //     cy.visit('/sellers')
        //     cy.get('#formBasicEmail').type('ece@ece.com')
        //     cy.get('#formBasicPassword').type('password')
        //     cy.get('#loginSubmitBtn').click()
        //     cy.url().should('include', '/sellerhomepage')
        // })
        
})  