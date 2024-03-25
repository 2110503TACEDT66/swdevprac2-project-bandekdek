 
describe('logging in', () => {
        const ue1 = 'testuser1@gmail.com'
        const up1 = 'TE5st@r+'
        const ae1 = 'Admin1@gmail.com'
        const ap2 = '12345678'    
    beforeEach(()=>{
        cy.visit('http://localhost:3000');
        cy.get('[title="User page"]').click();
        cy.get('#email').type(ue1);
        cy.get('#password').type(up1);
        cy.get('#signin').click();      
    })

    it('should display name on home page', ()=> {
        cy.get('#username').should('contain.text', 'Welcome Courtney Dibbert')  
    })

    it('should be able to log out', ()=> {
        cy.get('[title="Sign out"]').click();  
        cy.get('#submitButton').click();
        cy.get('[title="Home page"]').click();
        cy.url().should('eq', 'http://localhost:3000/');
        cy.get('#username').should('not.exist')
    })


})