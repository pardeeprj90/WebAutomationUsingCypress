/// <reference types="cypress-xpath" />
describe('Registration Form', () => {
    it('Signup',()=>{
        cy.visit('https://ineuron-courses.vercel.app/signup')
        // cy.viewport()
        cy.contains('Sign up').should('be.disabled')
        // cy.contains('Already a user? Login').click()
        cy.get("input[name='name']").click().type("Pardeep Kumar")
        cy.get("input[name='email']").click().type("pardeep.rj90@gmail.com")
        cy.get("input[name='password']").type("test@test")
        cy.xpath("//label[text()='Testing']/preceding::input[1]").click()
        cy.xpath("//input[contains(@value,'Male')]").click()
        cy.get("select[name='state']").select("Himachal Pradesh")
        cy.get("button[type='submit']").should('be.enabled').click()

        
        // cy.get("input[name='email']").click().type("pardeep.rj90@gmail.com")
        // cy.get("input[name='password']").type("test@test")
        // cy.get("button[type='submit']").click()

        
        // cy.get('')
        });
    });