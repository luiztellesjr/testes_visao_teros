/// <reference types="cypress" />

describe('login correto',()=>{
    
    it('login no sistema',()=>{
        cy.visit('https://staging.app-terosopenbanking.com');

        cy.fixture('login').then((login) => {
            cy.get(':nth-child(1) > .form-control').type(login.user_id1,{ log: true }) 
            cy.get(':nth-child(2) > .form-control').type(login.senha_id1,{ log: true })
        })
        cy.get('.form-check-label').click();
        cy.get('.btn').click();
        cy.log('Login ok');

    })

});
