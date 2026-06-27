import { faker } from '@faker-js/faker';

Cypress.Commands.add("preencheCampo", (seletor, info) => {
    cy.get(seletor, {timeout: 30000})
    .should('be.visible')
    .clear()
    .type(info);

});