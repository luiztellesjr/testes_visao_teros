/// <reference types="cypress" />

describe('editando integração',()=>{
    
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
        cy.get(':nth-child(2) > .teros_principal__menu__list__item__link').click();
    })
    
    it('clicando resultados',()=>{
        cy.get(".form-control").select("20");
    })
    
    it('editar integração',()=>{
        cy.get('[href="/integration?hash=45d7cbec-62fe-4e61-9fe6-5c5fed8b8d1d#form"]').click();
    }) 

    it('clicando no dropdown editar abrir',()=>{
        cy.get(':nth-child(1) > #headingOne > .teros_principal__content__accordion__card__header__title > .teros_principal__content__accordion__card__header__title__btn').click();
    })
    
       
    it('preenchendo nome e selecionando categoria',()=>{
        cy.get('#formGroupExampleInput1')
          .clear()
          .type('Integração Automatizada 3a');
    })

    it('salvando edição da integração',()=>{
        cy.get('.teros_principal__content__column__info__form__combo__salvar').click();
    })


});

