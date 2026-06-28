/// <reference types="cypress"/>  
import { faker } from '@faker-js/faker';
import { validarSelecaoMetodoPagamento, selecionarMetodoPagamento, acessarCheckout, clicarSalvar, marcarSalvarDados, pagarDirectBankTransfer, pagarMobileBank, pagarPaypal, placeOrder, preencherAdicionalNotes, preencherCompany, preencherEmail, preencherFirstName, preencherFullAdress, preencherLastName, preencherZipCode, salvarDados, selecionarCity, selecionarCountry, validarAcessoPaginaCheckout, validarPedidoSucesso, validarSelecaoDirectBankTransfer, validarSelecaoMobileBank, validarSelecaoPaypal } from '../support/pages/checkout_page';
import { validarCadastroSucesso } from '../support/pages/cadastro_usuario_page';

describe('Testes de Checkout', () => {

    const metodosPagamento = [
        'paypal',
        'mobileBanking',
        'directBankTransfer'
    ];

    beforeEach(() => {
        acessarCheckout();
        validarAcessoPaginaCheckout();
    })

    metodosPagamento.forEach((metodo) => {

        it(`Checkout com sucesso usando ${metodo}`, () => {
            //Preencher as informações paga Pagamento e salvar
            preencherFirstName(faker.person.firstName());
            preencherLastName(faker.person.lastName());
            preencherCompany(faker.company.name());
            preencherEmail(faker.internet.email());
            selecionarCountry(1);
            selecionarCity(2);
            preencherZipCode(faker.string.numeric(9));
            preencherFullAdress(`${faker.location.street()}, ${faker.location.buildingNumber()}, ${faker.location.secondaryAddress()}`);
            preencherAdicionalNotes(faker.lorem.lines({ min: 1, max: 3 }));
            marcarSalvarDados();
            clicarSalvar();
            //Escolher a opção de pagamento validar ela e finalizar pedido
            selecionarMetodoPagamento(metodo);
            validarSelecaoMetodoPagamento(metodo);
            placeOrder();
            validarPedidoSucesso();
        })
    })
})