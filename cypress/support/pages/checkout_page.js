

export function acessarCheckout() {
    cy.visit('/checkout-one');
}

export function validarAcessoPaginaCheckout(seletor, mensagem) {
    cy.get(seletor)
        .should('be.visible')
        .should('have.text', mensagem)
}
export function preencherFirstName(nome) {
    cy.preencheCampo('#fname', nome)
}

export function preencherLastName(nome) {
    cy.preencheCampo('#lname', nome)
}

export function preencherCompany(nome) {
    cy.preencheCampo('#cname', nome)
}

export function preencherEmail(email) {
    cy.preencheCampo('#email', email)
}

export function selecionarCountry(pais) {
    cy.get('#country').select(pais)
}

export function selecionarCity(cidade) {
    cy.get('#city').select(cidade)
}

export function preencherZipCode(zip) {
    cy.preencheCampo('#zip', zip)
}

export function preencherFullAdress(endereco) {
    cy.preencheCampo('#faddress', endereco)
}

export function preencherAdicionalNotes(lorem) {
    cy.preencheCampo('#messages', lorem)
}

export function marcarSalvarDados(checkbox) {
    cy.get('#materialUnchecked').check(checkbox)
}

export function clicarSalvar() {
    cy.get('.checkout-area-bg > .theme-btn-one').click()
}

// export function pagarPaypal(checkbox) {
//     cy.get('#headingThree > .collapsed > [name="payment"]').check(checkbox)
// }

// export function pagarMobileBank(checkbox) {
//     cy.get('#headingTwo > div > [name="payment"]').check(checkbox)

// }

// export function pagarDirectBankTransfer(checkbox) {
//     cy.get('#headingOne > div > [name="payment"]').check(checkbox)

// }

// export function validarSelecaoPaypal() {
//     cy.get('#collapseThree > .payment_body > p')
//         .should('contain.text', 'Some placeholder content for the second accordion panel. This panel is hidden by default')
// }

// export function validarSelecaoMobileBank() {
//     cy.get('#collapseTwo > .payment_body > p')
//         .should('contain.text', 'Direct Mobile Transfer')
// }

// export function validarSelecaoDirectBankTransfer() {
//     cy.get('#collapseOne > .payment_body > p')
//         .should('contain.text', 'Direct Bank Transfer')
//}

export function selecionarMetodoPagamento(metodo) {

    const pagamentos = {
        paypal: '#headingThree > .collapsed > [name="payment"]',
        mobileBanking: '#headingTwo > div > [name="payment"]',
        directBankTransfer: '#headingOne > div > [name="payment"]'
    };

    cy.get(pagamentos[metodo]).check();
}

export function validarSelecaoMetodoPagamento(metodo) {

    const mensagens = {
        paypal: {
            seletor: '#collapseThree > .payment_body > p',
            texto: 'Some placeholder content for the second accordion panel. This panel is hidden by default'
        },
        mobileBanking: {
            seletor: '#collapseTwo > .payment_body > p',
            texto: 'Direct Mobile Transfer'
        },
        directBankTransfer: {
            seletor: '#collapseOne > .payment_body > p',
            texto: 'Direct Bank Transfer'
        }
    }

    cy.get(mensagens[metodo].seletor)
      .should('contain.text', mensagens[metodo].texto)
}

export function placeOrder() {
    cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()
}

export function validarPedidoSucesso(seletor, mensagem) {
    cy.get(seletor)
        .should('be.visible')
        .should('have.text', mensagem)
}

