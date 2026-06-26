
describe('Comandos Básicos do Cypress', () => {

  it('Abrir uma URL', () => {
    cy.visit('https://automationpratice.com.br/login')
  })

  it('Encontrar Elementos', () => {
    cy.visit('https://automationpratice.com.br/login')

    //get()
    cy.get('#user')

    //find() - Usa depois que diminui o escopo com o get()
    cy.get('.mc-form').find('.form-control')

    cy.get('.mc-form').find('.form-control').type('meu.emaul@teste.com.br{enter}') //Assim ele já simula o click no enter do teclado

    //contais() - encontra um elemento pelo texto!
    cy.get('.mc-form').contains('Send')
  })

  it('Preencher um Campo', () => {
    cy.visit('https://automationpratice.com.br/login')

    cy.get('#user').type('teste@teste.com.br')

    cy.get('#password').type('123456')
  })

  it('Click no Elemento', () => {
    cy.visit('https://automationpratice.com.br/login')

    cy.get('#btnLogin').click()

    cy.get('#btnLogin').click(10, 10) //Clica em uma coordenada especifica do elemento

    cy.get('#btnLogin').rightclick() //Clica com o botão direito

    cy.get('#btnLogin').dblclick() //Double click
  })

  it('Select/Dropdown', () => {
    cy.visit('https://automationpratice.com.br/checkout-one')

    cy.get('#country').select(1) //Seleciona o primeiro elemento da caixa de seleção

    cy.get('#country').select(2) //Seleciona o segundo elemento da caixa de seleção
  })

  it('Checkbox/Radio', () => {
    cy.visit('https://automationpratice.com.br/checkout-one')

    cy.get('#materialUnchecked').check() //Marca o item da Checkbox

    cy.get('#materialUnchecked').uncheck() //Desmarca o Item da Checkbox
  })

  it('Validar um Elemento', () => {
    cy.visit('https://automationpratice.com.br/login')

    cy.get('#user').type('teste@teste.com.br')

    cy.get('#password').type('123456')

    cy.get('#btnLogin').click()

    cy.get('#swal2-title').should('be.visible').should('have.text', 'Login realizado') //Valida se o elemento está visível e se contém o texto esperado
  })
})