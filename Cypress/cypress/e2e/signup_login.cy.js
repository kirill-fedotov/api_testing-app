/// <reference types="Cypress" />



describe('SignUp', () => {


    let randomString = Math.random().toString(30).substring(2)
    let userName = "User" + randomString
    let email = "User" + randomString + "@mail.com"

  it('Test valid signUp', () => {
    cy.intercept("POST", "https://api.realworld.io/api/users").as("newUser")
    cy.visit("http://localhost:4200/")
    cy.get(".nav").contains("Sign up").click();
    cy.get("[placeholder='Username']").type(userName)
    cy.get("[placeholder='Email']").type(email)
    cy.get("[placeholder='Password']").type(randomString)
    cy.get("button").contains("Sign up").click();

    cy.wait('@newUser')
    cy.get("@newUser").should((xhr) => {
      expect(xhr.request.body.user.username).to.equal("User" + randomString)
      expect(xhr.request.body.user.email).to.equal("User" + randomString + "@mail.com")

    })
    
  })


    it('Test valid login', () => {
        
        cy.visit("http://localhost:4200/")
        cy.get(".nav").contains("Sign in").click()
        cy.get("[placeholder='Email']").type(email)
        cy.get("[placeholder='Password']").type(randomString)
        cy.get("button").contains("Sign in").click()
        cy.get(':nth-child(4) > .nav-link').should('be.visible')

    })



})


