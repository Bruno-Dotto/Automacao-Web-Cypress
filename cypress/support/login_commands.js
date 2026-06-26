
import { faker } from '@faker-js/faker';

Cypress.Commands.add("preencherEmail", (email) => {

    cy.get('#user').type(email)

})

Cypress.Commands.add("acessarLogin", () => {

    cy.visit('/login');

})

Cypress.Commands.add("preencherSenha", (senha) => {

    cy.get('#password').type(senha)

})

Cypress.Commands.add("clicarLogin", () => {

    cy.get('#btnLogin').click()

})

Cypress.Commands.add("assertMensagem", (seletor, mensagem) => {

    cy.get(seletor)
        .should('be.visible')
        .should('contain.text', mensagem)

})

Cypress.Commands.add("criarConta", () => {

    cy.get('#createAccount').click()

})

Cypress.Commands.add("assertNovaConta", (seletor, mensagem) => {

    cy.get('.account_form').find(seletor).should('be.visible')
        .should('contain.text', mensagem)

})