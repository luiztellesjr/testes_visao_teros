describe('handling iframe', function () {
    
    it('iframe', function () {
    
        cy.visit('http://the-internet.herokuapp.com/iframe');

        cy.get('#mce_0_ifr').within(function($iFrame){
            const iframeContent = $iFrame.contents().find('body')

            cy.wrap(iframeContent)
            .clear()
            .click()
            .type('kkkkkkkkkkkk')

        })

    })


})



















/* Cypress.Commands.add('switchToIframe', (iframe) => {
    return cy
        .get(iframe)
        .its(`0.contentDocument.body`)
        .should('be.visible')
        .then(cy.wrap);
});
    
it.skip('Teste de iframe',()=>{
    cy.visit('http://the-internet.herokuapp.com/iframe');
    cy.switchToIframe(`#mce_0_ifr`).clear().type('teste');
    return cy.wrap();
})

it.skip('Teste de iframe',()=>{
    cy.visit('http://the-internet.herokuapp.com/iframe');
    cy.switchToIframe(`#mce_0_ifr`).clear().type('teste');
})

it.skip('Teste de iframe',()=>{
    cy.visit('http://the-internet.herokuapp.com/iframe');
    const iframe = cy
        .get(`#mce_0_ifr`)
        .its(`0.contentDocument.body`)
        .should('be.visible')
        .then(cy.wrap)
        .find('');
    iframe
        .clear()
        .type('Os dados coletados poderão ser utilizados, exclusivamente, para as seguintes finalidades:');

})

 */