
Cypress.Commands.add('user_registration', (email, password) => {
  if (email !== '') {
    cy.get('#reg_email').type(email)
  } else {
    cy.get('#reg_email').clear();
  }

  if (password !== '') {
    cy.get('#reg_password').type(password)
  } else {
    cy.get('#reg_password').clear();
  }
  
  cy.get(':nth-child(4) > .button').click()
});






// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })