describe('upgrade v2 new', () => {
    beforeEach(() => {
        cy.get('#local-login-btn').click();
        cy.get('a[href="#/demo/select"]').click();
    });

    it('has the V2 New Model', () => {
        cy.contains('demo threat model from the list');
        cy.contains('Demo Threat Model');
    });

    it('opens the v2 new threat model', () => {
        cy.get('a').contains('Demo Threat Model').click();
        cy.url().should('contain', '/local/Demo%20Threat%20Model');
    });

    it('can edit the model', () => {
        cy.get('a').contains('Demo Threat Model').click();
        cy.get('#td-edit-btn').click();
        cy.url().should('contain', '/edit');
        cy.get('#description').should('be.visible');
        cy.get('button').contains('Close').click();
    });

});
