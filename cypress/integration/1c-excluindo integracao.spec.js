/// <reference types="cypress" />

describe('excluindo integração',()=>{
    
    it('login no sistema',()=>{
        cy.visit('https://staging.app-terosopenbanking.com');

        cy.fixture('login').then((login) => {
            cy.get(':nth-child(1) > .form-control').type(login.user_id,{ log: true }) 
            cy.get(':nth-child(2) > .form-control').type(login.senha_id,{ log: true })
        })
        cy.get('.form-check-label').click();
        cy.get('.btn').click();
        cy.log('Login ok');
    })

    it('clicando no menu integração',()=>{
        cy.contains('Integrações').click();
    })

    it('clicando resultados',()=>{
        cy.get(".form-control").select("20");
    })
    
    it('excluir integração',()=>{
        cy.get("tr:nth-child(12) .teros_principal__content__table__body__table__options__item:nth-child(2)").click({ force : true });
    })

    it('pausando...',()=>{cy.pause()})

    it('confirmar excluir integração',()=>{
        cy.get('.btn-primary--red').click();
    })

    it('clicando em sair',()=>{
        cy.contains('sair').click();
    })

    


});

