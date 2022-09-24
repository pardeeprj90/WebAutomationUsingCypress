/// <reference types="cypress-xpath" />
describe('Create Course', () => {
    it('Create Course',()=> {
        cy.visit('https://ineuron-courses.vercel.app/login')
        // cy.visit('https://selectorshub.com/xpath-practice-page/')
        cy.viewport(1280, 720)  
        cy.get('[name="email1"]').type("ineuron@ineuron.ai")
        cy.get('[name="password1"]').type("ineuron")
        cy.get('.submit-btn').click()
        cy.contains("Manage").realHover()
        cy.wait(3000)
        cy.contains("Manage Course").click({force:true})
        // cy.xpath("//table[contains(@class,'courses')]/tbody/tr").should("have.length",7)
        cy.contains("Add New Course").click({force:true})
        cy.get("#thumbnail").attachFile('Test.txt') //ATTACH FILE IS NOT WORKING
        cy.xpath("//input[@id='name']").type("test")
        cy.xpath("//textarea[@name='description']").type("Course Description")
        cy.xpath("//input[@name='instructorName']").type("r")
        cy.xpath("//div[@class='intructorsList']/p").each($el=>{
            // cy.log($el.text())
            if($el.text()=="hbfxrsdhzb"){
                cy.wrap($el).click()
            }
            else{
                console.log("Element not clicked")
            }
        })
        cy.xpath()
          
    });
});