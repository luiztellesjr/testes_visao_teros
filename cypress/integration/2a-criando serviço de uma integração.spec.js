/// <reference types="cypress" />

describe('criando serviço de uma integração',()=>{
    
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

    it('clicando em novo serviço da integração',()=>{
        cy.get('.teros_principal__content__table__footer__add-item').click();
    })

    it('preenchendo dados do novo serviço',()=>{
        cy.get('#formGroupExampleInput').type('GetAccount'); //Nome do Serviço
        cy.get('#formGroupExampleInput1').type('Nome Comercial do Serviço'); //Nome Comercial
        cy.get('#formControlSelectResourceType').select("2"); //Tipo de recurso

        cy.get('#formGroupExampleInput2').type('https://api-terosopenbanking.sensedia.com/Endpoint'); //URL/Endpoint
        cy.get('#formGroupExampleInput3').type('https://api-terosopenbanking.sensedia.com/Callback'); //URL Callback

        cy.get('.action-fields').click();

        cy.get(':nth-child(2) > .teros_principal__content__accordion__card__header__collapse__body__form__column__fields > :nth-child(3) > div > .form-control').type('Dados de Serviço 1');

        cy.get(':nth-child(2) > .teros_principal__content__accordion__card__header__collapse__body__form__column__fields > :nth-child(3) > :nth-child(2)').click();
        cy.get(':nth-child(4) > .form-control').type('Dados de Serviço 2');

        cy.get(':nth-child(2) > .teros_principal__content__accordion__card__header__collapse__body__form__column__fields > :nth-child(3) > :nth-child(2)').click();
        cy.get(':nth-child(5) > .form-control').type('Dados de Serviço 3');
        
    })


    it("salvar novo serviço", () => {
        cy.get('.teros_principal__content__column__info__form__table__plus').click();
    });



    //it('pausando...',()=>{cy.pause()})
    //it('clicando em sair',()=>{cy.contains('sair').click();})
    



    
});
