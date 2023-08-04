/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    this.beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'Teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste'
        cy.get('#firstName').type('Mauricio')
        cy.get('#lastName').type('Lanferdini')
        cy.get('#email').type('mauricio.lanferdini@exemplo.com')
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação', function(){
        cy.get('#firstName').type('Mauricio')
        cy.get('#lastName').type('Lanferdini')
        cy.get('#email').type('mauricio.lanferdini@exemplo,com')
        cy.get('#open-text-area').type('Test')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible') 
    })

    it('campo telefone continua vazio quando preenchido com valornão-numérico', function(){
        cy.get('#phone')
            .type('abcdefhij')
            .should('have.value', '')
    })

    it.only('campo telefone continua vazio quando preenchido com valornão-numérico', function(){
        cy.get('#phone')
            .type('abcdefhij')
            .should('have.value', '')
    })

  })