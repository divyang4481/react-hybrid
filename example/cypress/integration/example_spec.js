describe('example app', () => {
  it('loads', () => {
    cy.visit('');
  });

  it('renders links', () => {
    cy.visit('/');
    cy.get('a').contains('react.angular');
    cy.get('a').contains('angular.react');
    cy.contains('a[ui-sref=angular]', 'angular');
  });

  it('renders angularjs', () => {
    cy.visit('');
    cy.get('#angular').click();
    cy.url().should('include', '#!/angular');
    cy.contains('Hello from angularjs');
  });

  it('renders react', () => {
    cy.visit('');
    cy.get('#react').click();
    cy.url().should('include', '#!/react');
    cy.contains('Hello from react');
  });

  it('renders react inside angularjs', () => {
    cy.visit('');
    cy.get('#angular_react').click();
    cy.url().should('include', '#!/angular/react');
    cy.contains('Hello from angularjs');
    cy.contains('Hello from react');
  });

  it('renders angularjs inside react', () => {
    cy.visit('');
    cy.get('#react_angular').click();
    cy.url().should('include', '#!/react/angular');
    cy.contains('Hello from react');
    cy.contains('Hello from angularjs');
  });

  it('renders angularjs inside react inside angularjs', () => {
    cy.visit('');
    cy.get('#angular_react_angular').click();
    cy.url().should('include', '#!/angular/react/angular');
  });

  it('renders react inside angularjs inside react', () => {
    cy.visit('');
    cy.get('#react_angular_react').click();
    cy.url().should('include', '#!/react/angular/react');
  });

  it('renders react inside angularjs inside react inside angularjs', () => {
    cy.visit('');
    cy.get('#angular_react_angular_react').click();
    cy.url().should('include', '#!/angular/react/angular/react');
  });

  it('renders angularjs inside react inside angularjs inside react', () => {
    cy.visit('');
    cy.get('#react_angular_react_angular').click();
    cy.url().should('include', '#!/react/angular/react/angular');
  });
});
