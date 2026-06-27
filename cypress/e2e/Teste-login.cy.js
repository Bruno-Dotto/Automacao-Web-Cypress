/// <reference types="cypress"/>  
import { faker } from '@faker-js/faker';

describe('Testes de Login', () => {

    beforeEach(() => {
        cy.acessarLogin();
    })

    it('Login com Sucesso', () => {

        cy.preencherEmail(faker.internet.email());

        cy.preencherSenha(faker.string.numeric(6));

        cy.clicarLogin();

        cy.assertMensagem('#swal2-title', 'Login realizado');
    })

    it('Login com E-mail Inválido', () => {

        cy.preencherEmail(faker.string.numeric(6));

        cy.preencherSenha(faker.string.numeric(6));

        cy.clicarLogin();

        cy.assertMensagem('.invalid_input', 'E-mail inválido.');
    })

    it('Login com Senha Inválida', () => {

        cy.preencherEmail(faker.internet.email());

        cy.preencherSenha(faker.string.numeric(4));

        cy.clicarLogin();

        cy.assertMensagem('.invalid_input', 'Senha inválida.');
    })

    it('Login com E-mail Vazio', () => {

        cy.preencherSenha(faker.string.numeric(6));

        cy.clicarLogin();

        cy.assertMensagem('.invalid_input', 'E-mail inválido.')
    })

    it('Login com Senha Vazia', () => {

        cy.preencherEmail(faker.internet.email());

        cy.clicarLogin();

        cy.assertMensagem('.invalid_input', 'Senha inválida.');
    })

    it('Botão Ainda não tem Conta', () => {

        cy.criarConta();

        cy.assertNovaConta('h3', 'Cadastro de usuário');

    })

})