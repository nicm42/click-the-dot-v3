/// <reference types="Cypress" />
/// <reference types="@testing-library/cypress" />

describe('Instructions tests', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'));
  });

  it('Shape grows when you click on it', () => {
    cy.findByTestId('select').select('Circle');
    // circle 0 = shape, 1 = helper, 2 = closest
    // For some reason, click only works when we've first checked how many there are
    cy.findAllByTestId('circle').should('have.length', 3);
    cy.findAllByTestId('circle').eq(1).should('not.be.visible');
    cy.findAllByTestId('circle').first().invoke('width').should('be.lte', 100);

    cy.findAllByTestId('circle')
      .first()
      .then(($circle1) => {
        const width = $circle1.width() * 3;
        cy.findAllByTestId('circle')
          .first()
          .click()
          .then(() => {
            // Now check it's three times the size
            cy.findAllByTestId('circle')
              .first()
              .invoke('width')
              .should('eq', width);
            // And the helper is visible
            cy.findAllByTestId('circle').eq(1).should('be.visible');
          });
      });
  });

  it('Shape stops growing when you click on it again', () => {
    cy.findByTestId('select').select('Circle');
    // circle 0 = shape, 1 = helper, 2 = closest
    // For some reason, click only works when we've first checked how many there are
    cy.findAllByTestId('circle').should('have.length', 3);
    cy.findAllByTestId('circle').first().invoke('width').should('be.lte', 100);

    cy.findAllByTestId('circle')
      .first()
      .then(($circle1) => {
        const width = $circle1.width() * 3;
        cy.findAllByTestId('circle')
          .first()
          .click()
          .then(() => {
            cy.findAllByTestId('circle').first().click();
            // Now check it's less than three times the size
            cy.findAllByTestId('circle')
              .first()
              .invoke('width')
              .should('be.lt', width);
          });
      });
  });

  it('Shape grows when you press space on it', () => {
    cy.findByTestId('select').select('Circle');
    // circle 0 = shape, 1 = helper, 2 = closest
    // For some reason, click only works when we've first checked how many there are
    cy.findAllByTestId('circle').should('have.length', 3);
    cy.findAllByTestId('circle').eq(1).should('not.be.visible');
    cy.findAllByTestId('circle').first().invoke('width').should('be.lte', 100);

    cy.findAllByTestId('circle')
      .first()
      .then(($circle1) => {
        const width = $circle1.width() * 3;
        cy.findAllByTestId('shape-svg')
          .focus()
          .type(' ')
          .then(() => {
            // Now check it's three times the size
            cy.findAllByTestId('circle')
              .first()
              .invoke('width')
              .should('eq', width);
            // And the helper is visible
            cy.findAllByTestId('circle').eq(1).should('be.visible');
          });
      });
  });

  it('Shape stops growing when you press space on it again', () => {
    cy.findByTestId('select').select('Circle');
    // circle 0 = shape, 1 = helper, 2 = closest
    // For some reason, click only works when we've first checked how many there are
    cy.findAllByTestId('circle').should('have.length', 3);
    cy.findAllByTestId('circle').first().invoke('width').should('be.lte', 100);

    cy.findAllByTestId('circle')
      .first()
      .then(($circle1) => {
        const width = $circle1.width() * 3;
        cy.findAllByTestId('shape-svg')
          .focus()
          .type(' ')
          .then(() => {
            cy.findAllByTestId('shape-svg').focus().type(' ');
            // Now check it's less than three times the size
            cy.findAllByTestId('circle')
              .first()
              .invoke('width')
              .should('be.lt', width);
          });
      });
  });
});
