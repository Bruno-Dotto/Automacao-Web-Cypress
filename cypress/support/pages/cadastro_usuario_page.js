//import { faker } from '@faker-js/faker';


export function acessarCadastro() {
    cy.visit('/register');
}

export function preencherNome(nome) {
    cy.preencheCampo('#user', nome)
}

export function preencherEmail(email) {
    cy.preencheCampo('#email', email)
}

export function preencherSenha(senha) {
    cy.preencheCampo('#password', senha)
}

export function cadastrar() {
    cy.get('#btnRegister').click()
}

export function validarCadastroSucesso() {
    cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text', 'Cadastro realizado!')
}

export function validarCadastroErro(seletor, mensagem) {
    cy.get(seletor)
        .should('be.visible')
        .should('have.text', mensagem)
}