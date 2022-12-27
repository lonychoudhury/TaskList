/// <reference types="cypress" />

describe("tasks", () =>{
    beforeEach(() => {
        cy.visit("/")
    })

     it("display new task after adding", () => {
        cy.get("input[placeholder='Add a new task here...']").type("Go for walk")
        cy.contains("button", "Add").click()
        cy.contains("Go for walk")
        .should('be.visible')
        .and('have.class', "todo-item")
        .and('have.class', "false")
     })

     it("should toggle tasks when clicked", () => {
        cy.get("input[placeholder='Add a new task here...']").type("Go for walk")
        cy.contains("button", "Add").click()
        cy.get("input[placeholder='Add a new task here...']").type("Do shopping")
        cy.contains("button", "Add").click()
        
        cy.get("[class='todo-item false']").contains("Do shopping").click()
        cy.contains("Do shopping")
        .should('be.visible')
        .and('have.class', "todo-item")
        .and('have.class', "todo-item-active")

        cy.get("[class='todo-item todo-item-active']").contains("Do shopping").click()
        cy.contains("Do shopping")
        .should('be.visible')
        .and('have.class', "todo-item")
        .and('have.class', "false")
    })

    it("toggle color change on input at mouseover/out", () => {
        cy.get("input[placeholder='Add a new task here...']").trigger('mouseover');
        cy.get("input[style='background-color: white;']")
        .should('be.visible')

        cy.get("input[placeholder='Add a new task here...']").trigger('mouseout');
        cy.get("input[style='background-color: rgb(224, 217, 217);']")
        .should('be.visible')
        
    })

    it("count number of times the list renders", () => {        
        cy.get("input[placeholder='Add a new task here...']").type("Go for walk")
        cy.contains("button", "Add").click()
        cy.get("input[placeholder='Add a new task here...']").type("Do shopping")
        cy.contains("button", "Add").click()
        cy.get("div[class='todo-footer']").contains("2")
        .should('be.visible')

        cy.get("input[placeholder='Add a new task here...']").type("Eat")
        cy.contains("button", "Add").click()
        cy.get("div[class='todo-footer']").contains("3")
        .should('be.visible')

        cy.get("[class='todo-item false']").contains("Eat").click()
        cy.get("div[class='todo-footer']").contains("4")
        .should('be.visible')

        cy.get("[class='todo-item todo-item-active']").contains("Eat").click()
        cy.get("div[class='todo-footer']").contains("5")
        .should('be.visible')        
    })


})