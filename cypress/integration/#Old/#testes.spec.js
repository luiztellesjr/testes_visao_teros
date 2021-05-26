//npx cypress open
//npm install -D cypress-iframe

//it('pausando...',()=>{cy.pause()})
//it('clicando em sair',()=>{cy.contains('sair').click();})




/// <reference types="cypress" />

describe('integracao',()=>{
    
    //beforeEach(async () => {
    //    cy.visit('http://staging.app-terosopenbanking.com/')
    //})

    it.skip('Recuperação de senha',()=>{
        cy.visit('http://d3qn2apnnw5pnb.cloudfront.net');
        cy.get('.teros_principal__login__column__form__obs').click();
        // cy.get - busca um elemento
        // cy.type - insere um texto
        cy.get('#email').type('luiztellesjr@gmail.com');
    })

    it.skip('login incorreto',()=>{
        cy.visit('http://staging.app-terosopenbanking.com');
        cy.get(':nth-child(1) > .form-control').type('test');
        cy.get('.btn').click();
        cy.get('v-toast v-toast--top').should('contain','Usuário ou senha incorretos');
    })

    it.skip('login no sistema',()=>{
        cy.visit('https://staging.app-terosopenbanking.com');

        cy.fixture('login').then((login) => {
            cy.get(':nth-child(1) > .form-control').type(login.user_id,{ log: true }) 
            cy.get(':nth-child(2) > .form-control').type(login.senha_id,{ log: true })
        })
        cy.get('.form-check-label').click();
        cy.get('.btn').click();
        cy.log('Login ok');
    })

    it('Atualiza home',()=>{
        cy.visit('https://staging.app-terosopenbanking.com');
    })

    it('clicando no menu integração',()=>{
        cy.get(':nth-child(2) > .teros_principal__menu__list__item__link').click();
    })

    /*
    it('clicando em nova integração',()=>{
        cy.get('.teros_principal__content__table__footer__add-item').click();
    })

    it('clicando no dropdown editar abrir',()=>{
        cy.get(':nth-child(1) > #headingOne > .teros_principal__content__accordion__card__header__title > .teros_principal__content__accordion__card__header__title__btn').click();
    })

    it('preenchendo nome e selecionando categoria',()=>{
        cy.get('#formGroupExampleInput1').type('Integração Automatizada 1');
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
    */
/*     it('logout no sistema',()=>{
        cy.wait(1000);
        cy.get('.teros_principal__header__menu__list__item__link').click();
    }) */
    

    
    
    
    /*     it('busca integração',()=>{
        cy.get('.input-field').type('Integração Automatizada 1');
        cy.get('.search-button').click();
    })
 */

    





    
    /*
    it('logout no sistema',()=>{
        cy.wait(3000);
        cy.get('.teros_principal__header__menu__list__item__link').click();
    })*/

    /*

    it('clicando em integração no menu',()=>{
        cy.get(':nth-child(2) > .teros_principal__menu__list__item__link').click();
    })
  
    it('editar integração',()=>{
        cy.get("tr:nth-child(6) .teros_principal__content__table__body__table__options__item:nth-child(1)").click({ force : true });
    })

    it('clicando em serviço da integração',()=>{
        cy.get(':nth-child(2) > .teros_principal__content__column__menu-vertical__list__item__link').click();
    })
    
    it('Habilitando e desabilitando serviço da integração',()=>{
        cy.get('tbody > tr > :nth-child(6) > .custom-control').click();
    })

    it('editar serviço',()=>{
        cy.get("tbody:nth-child(2) .teros_principal__content__table__body__table__options__item:nth-child(1)").click({ force : true });
    })

    */

    
    





    /*it('criando integração',()=>{
        cy.viewport(1280,720)

        cy.get('.teros_principal__content__table__footer__add-item > img').click();

        cy.get(':nth-child(1) > #headingOne > .teros_principal__content__accordion__card__header__title > .teros_principal__content__accordion__card__header__title__btn').click();
        cy.get(':nth-child(1) > .custom-control > .custom-control-label').click();
        cy.get('#formGroupExampleInput1').type('Integracao - Lojas Americanas');
        cy.get('.filter-option').click();
        cy.get('.filter-option').click();
        cy.get('li:nth-child(2) .text').click();
        
        cy.get('#formGroupExampleInput2').type('bc01a838-7a92-490e-be0b-5b122ed108ca');
        cy.get('#formGroupExampleInput3').type('57KXGTUI6NJDEKO9790DDLML0QH5G1R16FNAHZXYKBW24HEA');
        cy.get('#accessTokenUrlInput').type('https://api.sandbox.developer.btgpactual.com/v1/authentication/token');
        cy.get('#grantTypeInput').type('client_credentials');
        
        cy.get(':nth-child(2) > #headingOne > .teros_principal__content__accordion__card__header__title > .teros_principal__content__accordion__card__header__title__btn').click();
        cy.get('.teros_principal__content__column__info__form__combo__salvar > img').click();
    })*/





    /*it('logout no sistema',()=>{
        cy.wait(3000);
        cy.get('.teros_principal__header__menu__list__item__link').click();
    })*/


});






//cy.get("tr:nth-child(6) .teros_principal__content__table__body__table__options__item:nth-child(1)").click();
//cy.get("tr:nth-child(6) .teros_principal__content__table__body__table__options__item:nth-child(1) > a").click();
//cy.get('[title="Visualizar/Editar"] > .title > a').click();
//cy.get(':nth-child(6) > .teros_principal__content__table__body__table__options__item').children('.active').should('contain', "Visualizar/Editar").click();
//cy.get(':nth-child(6) > .teros_principal__content__table__body__table__options__item').should('contain', 'Visualizar/Editar');
/*Cypress.Commands.add('hideHubSpot', () => {
cy.get('#hubspot-messages-iframe-container')
.invoke('attr', 'style', 'display: none')
.should('have.attr', 'style', 'display: none')
*/


//<a href="/integration?hash=95457900-1847-484a-a342-d8a7c373a1e2#form" class="teros_principal__content__table__body__table__options__item" data-toggle="tooltip" data-placement="top" title="Visualizar/Editar"><div><img src="/static/img/icons/editar.svg" alt=""></div></a>

//const selector = cy.get(':nth-child(5) > [style="text-align: center; width: 130px;"] > .teros_principal__content__table__body__table__options');
//console.log(selector);


//cy.get('input[type="file"]').attachFile('/Modelo PDF.pdf')
//cy.get('#file-submit').click()
//cy.get('#uploaded-files').contains('Modelo PDF.pdf')


        //cy.url().should('contain','integrations');
        //cy.get('header span').should('contain','test').and('contain','Sair')
