/// <reference types="cypress" />

describe('criando complice do serviço de uma integração',()=>{
    
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

    it('expandindo resultados de integração',()=>{
        cy.get(".form-control").select("20");
    })

    it('editando Integração Automatizada 1',()=>{
        cy.get('[href="/integration?hash=e58a5649-edc2-4435-ac5b-7e42f8b4c6a6#form"]').click();
    }) 

    it('clicando em serviços da integração',()=>{
        cy.contains('Serviços').click();
    })

    it('editando serviçoda integração Automatizada 1',()=>{
        cy.get('[href="/service?hash=8a791f87-1ed6-4acc-a412-38c610598166"]').click();
    }) 
    
    it('clicando em novo complice',()=>{
        cy.get('.teros_principal__content__table__footer__add-item').click();
    })

    it('preenchendo dados do novo complice',()=>{
        cy.get('#formGroupExampleInput').type('Padrão 1 - Coleta e Anonimização de Dados '); //Padrão de Compliance
        cy.get('#formGroupExampleInput3').type('Este padrão é indicado para uma operação em que não há custódia pois os dados pessoais coletados foram anonimizados antes do armazenamento. '); //Descrição
    })

    it('salvando dados do novo complice',()=>{
        cy.get('.teros_principal__content__column__info__form__table__plus').click();
    })


    
});
