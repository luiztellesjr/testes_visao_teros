/// <reference types="cypress" />

describe('criando termo do complice do serviço de uma integração',()=>{
    
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
    
    it('editando serviço da integração Automatizada 1',()=>{
        cy.get('[href="/service?hash=8a791f87-1ed6-4acc-a412-38c610598166"]').click();
    }) 

    it.skip('selecionar Padrão de Compliance Recomendado',()=>{
        cy.get('.filter-option').click();
        cy.get('.filter-option').click();
        cy.get(':nth-child(2) > .dropdown-item > .text').click(); //Padrão de Compliance Recomendado
        cy.get('.teros_principal__content__column__info__form__table__plus').click();
    }) 

    it('editando complice do serviço da integração Automatizada 1',()=>{
        cy.get('[href="/compliance?serviceHash=8a791f87-1ed6-4acc-a412-38c610598166&hash=a4dca398-8269-4613-bdb0-5378cd27441a"]').click();
    }) 

    it('clicando em novo termo do complice do serviço da integração Automatizada 1',()=>{
        cy.get('.teros_principal__content__table__footer__add-item').click();
    }) 

    it('preenchendo dados do novo termo do complice',()=>{
        cy.get('#formGroupExampleInput').type('1'); //Número de Ordem
        cy.get('#formGroupExampleInput2').type('Finalidades de Uso'); //Nome
    })

    it('clicando em file',()=>{
        cy.get(':nth-child(1) > .tox-mbtn__select-label').click();
        cy.get('.tox-menu-nav__js').click();
    })

    it('iframe', function () {
        cy.get('[id^=tiny-vue_]').within(function($iFrame){
            const iframeContent = $iFrame.contents().find('body')
            cy.wrap(iframeContent)
            .clear()
            .click()
            .type('Os dados coletados poderão ser utilizados, exclusivamente, para as seguintes finalidades:')
        })
    })
    
    it('clicando em salvar termo do complice',()=>{
        cy.get('.teros_principal__content__column__info__form__table__plus').click();
    })


})



   
    



/*

    it.skip('escrevendo no iframe', () => {
        const iframe = cy
            .get('[id^=tiny-vue_]').first()
            .then(cy.wrap);
        iframe.type('hello',{ force : true });
    })



cy.get("tr:nth-child(6) .teros_principal__content__table__body__table__options__item:nth-child(1)").click({ force : true });





        //cy.get('[data-id^=tiny-vue_]').type('Teste');
        
        //cy.get('[id^=tiny-vue_]').last().type('Teste');

        //cy.get('[id^=tiny-vue_]').first().type('Teste');

        //cy.get('[id^=tiny-vue_]').type('Teste');
        //cy.get('[id^=tiny-vue_]')[0].type('Teste');

        //cy.get('#tiny-vue_4654178021621880027223_ifr')
        //cy.get('#tinymce').type('ppppppppppppppppppppppppppp'); 
        //"tiny-vue_23177567821621871249458"



*/



