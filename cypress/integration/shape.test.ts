/// <reference types="Cypress" />
/// <reference types="@testing-library/cypress" />

describe('Instructions tests', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'));
  });

  it('Shape grows when you click on it', () => {
    cy.findByTestId('select').select('Circle')
    // circle 0 = shape, 1 = helper, 2 = closest
    // For some reason, click only works when we've first checked how many there are
    cy.findAllByTestId('circle').should('have.length', 3);
    cy.findAllByTestId('circle').eq(1).should('not.be.visible');
    cy.findAllByTestId('circle').first().invoke('width').should('be.lte', 100);

    cy.findAllByTestId('circle').first().then(($circle1) => {
      const width = $circle1.width() * 3;
      cy.findAllByTestId('circle').first().click().then(($circle) => {
        // Now check it's three times the size
        cy.findAllByTestId('circle').first().invoke('width').should('eq', width);
        // And the helper is visible
        cy.findAllByTestId('circle').eq(1).should('be.visible');
      })
           
    })
  });

  /* it('Shape stops growing when you click on it again', () => {
    cy.findByTestId('select').select('Circle')
    cy.findAllByTestId('circle').should('have.length', 3);
    cy.findAllByTestId('circle').eq(1).should('not.be.visible');
    cy.findAllByTestId('circle').first().invoke('width').should('be.lte', 100);
    cy.findAllByTestId('circle').first().click();

    cy.findAllByTestId('circle').first().click();
  }); */

});
