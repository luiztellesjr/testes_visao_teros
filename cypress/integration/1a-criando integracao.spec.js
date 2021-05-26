/// <reference types="cypress" />

describe('criando integração',()=>{
    
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

    it('pausando...',()=>{
        cy.pause()
    })

    it('clicando no menu integração',()=>{
        cy.get(':nth-child(2) > .teros_principal__menu__list__item__link').click();
    })
    
    it('clicando em nova integração',()=>{
        cy.get('.teros_principal__content__table__footer__add-item').click();
    })

    it('clicando no dropdown editar abrir',()=>{
        cy.get(':nth-child(1) > #headingOne > .teros_principal__content__accordion__card__header__title > .teros_principal__content__accordion__card__header__title__btn').click();
    })

    it('preenchendo nome e selecionando categoria',()=>{
        cy.get('#formGroupExampleInput1').type('Integração Automatizada 3');
        cy.get('.filter-option').click();
        cy.get('.filter-option').click();
        cy.get('li:nth-child(2) .text').click();
    })

    it('clicando no dropdown editar fechar',()=>{
        cy.get(':nth-child(1) > #headingOne > .teros_principal__content__accordion__card__header__title > .teros_principal__content__accordion__card__header__title__btn').click();
    })

    it('clicando no dropdown autenticação abrir',()=>{
        cy.get(':nth-child(3) > #headingOne > .teros_principal__content__accordion__card__header__title > .teros_principal__content__accordion__card__header__title__btn').click();
    })

    it("Selecionando tipo de autenticação", () => {
        cy.get("#exampleFormControlSelect1").select("2");
    });

    it("preenchendo dados de autenticação", () => {
        cy.get('#formGroupExampleInput6').type('https://api.teros.teste/v1/authentication/token');
        cy.get("#exampleFormControlSelect4").select("2");
        cy.get('#formGroupExampleInput8').type('2f8fefb4-5d79-4b85-af24-c93a741c662c');
        cy.get('#formGroupExampleInput9').type('HQEKBBJS0JWZBLPL0UL7GZBOAGPFGBLDM9TLBIY59SI0M814');

        cy.get('#formGroupExampleInput10').type('Scope 000000000000000000000');

        cy.get('#CustomHeaderField').type('Custom Authorization Header 1');
        cy.get('#CustomHeaderValue').type('Value 1');

        cy.get('.action-fields').click();
        cy.get(':nth-child(3) > #CustomHeaderField').type('Custom Authorization Header 2');
        cy.get(':nth-child(3) > #CustomHeaderValue').type('Value 2');
    });

    it("salvar integração", () => {
        cy.get('.teros_principal__content__column__info__form__combo__salvar').click();
    });
    
    it('clicando em sair',()=>{cy.contains('sair').click();})
    
});
