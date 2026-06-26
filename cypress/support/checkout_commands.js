// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { faker } from '@faker-js/faker';

Cypress.Commands.add("preencherBillingsInformation", () => {
    cy.get('#fname').type(faker.person.firstName())

    cy.get('#lname').type(faker.person.lastName())

    cy.get('#cname').type(faker.company.name())

    cy.get('#email').type(faker.internet.email())

    cy.get('#country').select(1)

    cy.get('#city').select(2)

    cy.get('#zip').type(faker.string.numeric(9))

    cy.get('#faddress').type(`${faker.location.street()}, ${faker.location.buildingNumber()}, ${faker.location.secondaryAddress()}`)

    cy.get('#messages').type(faker.lorem.lines({ min: 1, max: 3 }))

    cy.get('#materialUnchecked').check()

})

Cypress.Commands.add("enviarBillingsInformation", () => {
    
    cy.get('.checkout-area-bg > .theme-btn-one').click()

    cy.get('h3', { timeout: 10000 }).should('contain.text', 'success')
})