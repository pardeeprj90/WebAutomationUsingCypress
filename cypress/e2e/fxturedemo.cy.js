describe('Fixture Demo', function() {
    beforeEach(function() {
        cy.fixture("data").then(function(mydata){
            this.mydata=mydata
        })
    })
    it('demo',function () {
        cy.log(this.mydata)
    });
    
});