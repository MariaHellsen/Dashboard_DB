describe('Dashboard Cards Display', () => {
  // Test Case 1: Consultant with no applications and no assignments
  // Expected: 2 cards (Availability, Search Assignment)
  it('should show 2 cards when consultant has no applications and no assignments', () => {
    cy.visit('/dashboard/c1');
    cy.contains('Availability').should('be.visible');
    cy.contains('Search Assignment').should('be.visible');
    cy.contains('Applied').should('not.exist');
    cy.contains('On Assignment').should('not.exist');
  });

  // Test Case 2: Consultant with applications but no assignments
  // Expected: 3 cards (Availability, Search Assignment, Applied)
  it('should show 3 cards when consultant has applications but no assignments', () => {
    cy.visit('/dashboard/c2');
    cy.contains('Availability').should('be.visible');
    cy.contains('Search Assignment').should('be.visible');
    cy.contains('Applied').should('be.visible');
    cy.contains('Senior Full-stack Developer').should('be.visible');
    cy.contains('On Assignment').should('not.exist');
  });

  // Test Case 3: Consultant with assignments but no applications
  // Expected: 3 cards (Availability, Search Assignment, On Assignment)
  it('should show 3 cards when consultant has assignments but no applications', () => {
    cy.visit('/dashboard/c5');
    cy.contains('Availability').should('be.visible');
    cy.contains('Search Assignment').should('be.visible');
    cy.contains('Applied').should('not.exist');
    // Should show On Assignment card with statistics
    cy.contains('On Assignment').should('be.visible');
    cy.contains('Months').should('be.visible');
    cy.contains('Hours').should('be.visible');
    cy.contains('SEK Total').should('be.visible');
  });

  // Test Case 4: Consultant with both applications and assignments
  // Expected: 4 cards (Availability, Search Assignment, Applied, On Assignment)
  it('should show 4 cards when consultant has both applications and assignments', () => {
    cy.visit('/dashboard/c4');
    cy.contains('Availability').should('be.visible');
    cy.contains('Search Assignment').should('be.visible');
    cy.contains('Applied').should('be.visible');
    cy.contains('UX Designer').should('be.visible');
    // Should show On Assignment card with statistics
    cy.contains('On Assignment').should('be.visible');
    cy.contains('Months').should('be.visible');
    cy.contains('Hours').should('be.visible');
    cy.contains('SEK Total').should('be.visible');
  });
});

