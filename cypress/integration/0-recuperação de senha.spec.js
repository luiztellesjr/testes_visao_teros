/// <reference types="cypress" />

describe('recuperação de senha',()=>{

    it('Recuperação de senha',()=>{
        cy.visit('http://d3qn2apnnw5pnb.cloudfront.net');
        cy.get('.teros_principal__login__column__form__obs').click();
        cy.get('#email').type('luiztellesjr@gmail.com');
        cy.get('.btn').click();
    })

});
