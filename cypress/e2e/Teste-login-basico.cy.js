/// <reference types="cypress"/>  
import { faker } from '@faker-js/faker';

describe('Testes de Login', () => {

    beforeEach(() => {
      cy.visit('/login'); 
    })

    it('Login com Sucesso', () => {

        cy.get('#user').type(faker.internet.email())

        cy.get('#password').type(faker.string.numeric(6))

        cy.get('#btnLogin').click()

        cy.get('#swal2-title').should('be.visible').should('have.text', 'Login realizado') //Valida se o elemento está visível e se contém o texto esperado
    })

    it('Login com E-mail Inválido', () => {

        cy.get('#user').type(faker.string.numeric(6))

        cy.get('#password').type(faker.string.numeric(6))

        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('be.visible').should('have.text', 'E-mail inválido.') //Valida se o elemento está visível e se contém o texto esperado
    })

    it('Login com Senha Inválida', () => {

        cy.get('#user').type(faker.internet.email())

        cy.get('#password').type(faker.string.numeric(4))

        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('be.visible').should('have.text', 'Senha inválida.') //Valida se o elemento está visível e se contém o texto esperado
    })

    it('Login com E-mail Vazio', () => {

        cy.get('#password').type(faker.string.numeric(6))

        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('be.visible').should('have.text', 'E-mail inválido.') //Valida se o elemento está visível e se contém o texto esperado
    })

    it('Login com Senha Vazia', () => {

        cy.get('#user').type(faker.internet.email())

        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('be.visible').should('have.text', 'Senha inválida.') //Valida se o elemento está visível e se contém o texto esperado
    })

    it('Botão Ainda não tem Conta', () => {

        cy.get('#createAccount').click()

        cy.get('.account_form').find('h3').should('be.visible').should('have.text', 'Cadastro de usuário') //Valida se o elemento está visível e se contém o texto esperado
    })

})