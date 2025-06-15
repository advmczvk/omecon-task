describe('Product list', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.intercept('GET', '/assets/mock/products.json', {
      status: 200,
      fixture: 'products.json',
    }).as('getProducts');
  });

  describe('product list UI', () => {
    it('should display page title', () => {
      cy.get('[data-cy=page-title]')
        .should('be.visible')
        .should('have.text', 'Products list');
    });

    it('should show 5 products per page', () => {
      cy.get('[data-cy=product-item]').should('have.length', 5);
    });
  });

  describe('product list filtering', () => {
    it('should filter products by search term', () => {
      cy.get('[data-cy=search-input]').should('be.visible').type('macbook');

      cy.get('[data-cy=product-item]')
        .should('have.length', 3)
        .first()
        .should('contain.text', 'MacBook Pro 14');
    });

    it('should filter products by stock selection', () => {
      cy.get('[data-cy=stock-select]').should('be.visible').select('In stock');

      cy.get('[data-cy=product-item]')
        .should('have.length', 5)
        .each($el => {
          cy.wrap($el).should('contain.text', 'In stock');
        });
    });

    it('should filter by all available filters', () => {
      cy.get('[data-cy=search-input]').should('be.visible').type('macbook');
      cy.get('[data-cy=stock-select]').should('be.visible').select('In stock');

      cy.get('[data-cy=product-item]')
        .should('have.length', 2)
        .first()
        .should('contain.text', 'MacBook Pro 14');
    });

    it('should display message when no products are available', () => {
      cy.get('[data-cy=search-input]')
        .should('be.visible')
        .type('somethingthatforsuredoesnotexist');
      cy.get('[data-cy=no-products-message]')
        .should('be.visible')
        .should('have.text', 'No products found.');
    });
  });

  describe('product list pagination', () => {
    it('should display pagination controls', () => {
      cy.get('[data-cy=pagination-controls]').should('be.visible');
    });

    it('should navigate to next page', () => {
      cy.get('[data-cy=next-page-button]').click();
      cy.get('.active').should('contain.text', '2');
      cy.get('[data-cy=product-item]').should('have.length', 5);
    });

    it('should navigate to previous page', () => {
      cy.get('[data-cy=page-button]').last().click();
      cy.get('[data-cy=prev-page-button]').click();
      cy.get('.active').should('contain.text', '3');
      cy.get('[data-cy=product-item]').should('have.length', 5);
    });

    it('should navigate to given page', () => {
      cy.get('[data-cy=page-button]').contains('3').click();
      cy.get('.active').should('contain.text', '3');
      cy.get('[data-cy=product-item]').should('have.length', 5);
    });
  });
});
