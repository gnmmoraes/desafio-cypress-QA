/// <reference types="cypress" />
import { faker } from '@faker-js/faker'



describe('Register', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('.dropdown-toggle > .zmdi').click()
        cy.get('#topmenu > .menu-item-221 > a').should('be.visible')
        cy.get('#topmenu > .menu-item-221 > a').click()

    })

    it('Cadastro email invalido sem @', () => {        
        cy.get('#reg_email').type('test2#test.com').then(($input) => {
            $input[0].reportValidity();
            expect($input[0].checkValidity()).to.be.false;
            const msg = $input[0].validationMessage;
            expect(msg).to.include('Inclua um "@" no endereço de e-mail');
        })
    }),

    it('Cadastro sem email', () => {    
        cy.user_registration('', '')
        cy.get('.woocommerce-error').should('be.visible')
        cy.get('.woocommerce-error').contains('Erro: Informe um endereço de e-mail válido.')
    }),

    it('Cadastro sem senha', () => {
        cy.user_registration(faker.internet.email(), '')
        cy.get('.woocommerce-error').should('be.visible')
        cy.get('.woocommerce-error').contains('Erro: Digite a senha da conta.')
    }),

    it('Cadastro de usuario', () => {
        cy.user_registration(faker.internet.email(), faker.internet.password())
        cy.get('.page-title').should('be.visible')
        cy.get('.page-title').contains('Minha conta')
    })
    





    









    

})