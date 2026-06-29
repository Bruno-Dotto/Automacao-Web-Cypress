/// <reference types="cypress"/>  
import { faker } from '@faker-js/faker';

import {
    acessarLogin,
    preencherEmail,
    preencherSenha,
    clicarLogin,
    criarConta,
    validarMensagem,
    validarTelaCadastro
} from '../support/pages/login_page';

describe('Testes de Login', () => {

    beforeEach(() => {
        acessarLogin();
    });

    it('Login com Sucesso', { tags: ['@smoke', '@login'] }, () => {

        preencherEmail(faker.internet.email());
        preencherSenha(faker.string.numeric(6));
        clicarLogin();
        validarMensagem('loginSucesso');

    });

    it('Login com E-mail Inválido', () => {

        preencherEmail(faker.string.numeric(6));
        preencherSenha(faker.string.numeric(6));
        clicarLogin();
        validarMensagem('emailInvalido');

    });

    it('Login com Senha Inválida', () => {

        preencherEmail(faker.internet.email());
        preencherSenha(faker.string.numeric(4));
        clicarLogin();
        validarMensagem('senhaInvalida');

    });

    it('Login com E-mail Vazio', () => {

        preencherSenha(faker.string.numeric(6));
        clicarLogin();
        validarMensagem('emailInvalido');

    });

    it('Login com Senha Vazia', () => {

        preencherEmail(faker.internet.email());
        clicarLogin();
        validarMensagem('senhaInvalida');

    });

    it('Deve abrir a tela de cadastro', () => {

        criarConta();
        validarTelaCadastro();

    });

});