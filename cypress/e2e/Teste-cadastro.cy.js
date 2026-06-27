/// <reference types="cypress"/>  
import { faker } from '@faker-js/faker';
import { acessarCadastro, cadastrar, preencherEmail, preencherNome, preencherSenha, validarCadastroErro, validarCadastroSucesso } from '../support/pages/cadastro_usuario_page';

describe('Testes de Cadastro', () => {

    beforeEach(() => {
        acessarCadastro();
    })

    it('Cadastro com Sucesso', () => {

        preencherNome(faker.person.firstName());
        preencherEmail(faker.internet.email());
        preencherSenha(faker.string.numeric(6));
        cadastrar();
        validarCadastroSucesso();
    })

    it('Cadastro com Usuário em Branco', () => {

        preencherEmail(faker.internet.email());
        preencherSenha(faker.string.numeric(6));
        cadastrar();
        validarCadastroErro('#errorMessageFirstName', 'O campo nome deve ser prenchido');
    })

    it('Cadastro com E-mail em Branco', () => {

        preencherNome(faker.person.firstName());
        preencherSenha(faker.string.numeric(6));
        cadastrar();
        validarCadastroErro('#errorMessageFirstName', 'O campo e-mail deve ser prenchido corretamente');
    })

    it('Cadastro com Senha em Branco', () => {

        preencherNome(faker.person.firstName());
        preencherEmail(faker.internet.email());
        cadastrar();
        validarCadastroErro('#errorMessageFirstName', 'O campo senha deve ter pelo menos 6 dígitos');

    })
})