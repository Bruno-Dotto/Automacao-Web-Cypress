/// <reference types="cypress"/>  
import { faker } from '@faker-js/faker';

describe('Testes de Cadastro', () => {

    beforeEach(() => {
        cy.visit('/register');
    })

    it('Cadastro com Sucesso', () => {

        cy.get('#user').type(faker.person.firstName())

        cy.get('#email').type(faker.internet.email())

        cy.get('#password').type(faker.string.numeric(6))

        cy.get('#btnRegister').click()

        cy.get('#swal2-title').should('be.visible').should('have.text', 'Cadastro realizado!') //Valida se o elemento está visível e se contém o texto esperado
    })

    it('Cadastro com Usuário em Branco', () => {

        cy.get('#user').clear().should('have.value', '')

        cy.get('#email').type(faker.internet.email())

        cy.get('#password').type(faker.string.numeric(6))

        cy.get('#btnRegister').click()

        cy.get('#errorMessageFirstName').should('be.visible').should('have.text', 'O campo nome deve ser prenchido') //Valida se o elemento está visível e se contém o texto esperado
    })

    it('Cadastro com E-mail em Branco', () => {

        cy.get('#user').type(faker.person.firstName())

        cy.get('#email').clear().should('have.value', '')

        cy.get('#password').type(faker.string.numeric(6))

        cy.get('#btnRegister').click()

        cy.get('#errorMessageFirstName').should('be.visible').should('have.text', 'O campo e-mail deve ser prenchido corretamente') //Valida se o elemento está visível e se contém o texto esperado
    })

    it('Cadastro com Senha em Branco', () => {

        cy.get('#user').type(faker.person.firstName())

        cy.get('#email').type(faker.internet.email())

        cy.get('#password').clear().should('have.value', '')

        cy.get('#btnRegister').click()

        cy.get('#errorMessageFirstName').should('be.visible').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos') //Valida se o elemento está visível e se contém o texto esperado

    })
})