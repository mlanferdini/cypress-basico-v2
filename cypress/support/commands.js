Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function (){
    cy.get('#firstName').type('Mauricio')
    cy.get('#lastName').type('Lanferdini')
    cy.get('#email').type('mauricio.lanferdini@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})