/// <reference types="cypress"/>  
import { faker } from '@faker-js/faker';

describe('Testes de Login', () => {

    beforeEach(() => {
        cy.visit('/checkout-one'); // Pré condição 1
        cy.get('.checkout-area-bg > .check-heading > h3') // Pré condição 2
            .should('be.visible')
            .should('have.text', 'Billings Information');

    })

    it('Checkout com Sucesso', () => {

        cy.preencherBillingsInformation() // Command para preencher os dados de envio da conta
        cy.enviarBillingsInformation() // Command para enviar os dados preenchidos anteriormente

        cy.get('#headingThree > .collapsed > [name="payment"]').check()
            .get('#collapseThree > .payment_body > p')
            .should('contain.text', 'Some placeholder content for the second accordion panel. This panel is hidden by default')

        cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()

        cy.get('.offer_modal_left > h3')
            .should('have.text', 'Congrats! Your order was created with sucess!')


    })


}) 