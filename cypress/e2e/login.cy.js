/// <reference types="Cypress"/>

describe('Launch Chat Application', () => {
  it('Launch Application', () => {
    cy.visit('https://ineuron-courses.vercel.app/login')
    // cy.visit('https://selectorshub.com/xpath-practice-page/')
    cy.viewport(1280, 720)  
    cy.get('[name="email1"]').type("ineuron@ineuron.ai")
    cy.get('[name="password1"]').type("ineuron")
    cy.get('.submit-btn').click()
    cy.get('.navbar-menu-links > button').should("be.visible").should("have.text",'Sign out')
    // cy.get('div[class="course-card"]').should("have.length",3)
    // cy.get('')
  })
})