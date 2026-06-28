

export function acessarLogin() {
    cy.visit('/login');
}

export function preencherEmail(email) {
    cy.preencheCampo('#user', email);
}

export function preencherSenha(senha) {
    cy.preencheCampo('#password', senha);
}

export function clicarLogin() {
    cy.get('#btnLogin').click();
}

export function criarConta() {
    cy.get('#createAccount').click();
}

export function validarTelaCadastro() {
    cy.get('.account_form')
        .find('h3')
        .should('be.visible')
        .should('contain.text', 'Cadastro de usuário');
}

const mensagens = {
    loginSucesso: {
        seletor: '#swal2-title',
        texto: 'Login realizado'
    },
    emailInvalido: {
        seletor: '.invalid_input',
        texto: 'E-mail inválido.'
    },
    senhaInvalida: {
        seletor: '.invalid_input',
        texto: 'Senha inválida.'
    }
}

export function validarMensagem(tipo) {

    cy.get(mensagens[tipo].seletor)
        .should('be.visible')
        .should('contain.text', mensagens[tipo].texto);

}