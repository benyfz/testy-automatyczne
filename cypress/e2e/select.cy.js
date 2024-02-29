/// <reference types="cypress"/>

describe("Test związany z zaznaczeniem select", () => {
    it("Kliknięcie w zakładkę Women", () => {
        cy.visit("/");
    })
    it("Zaznaczenie checkboxa w zakładce Women", () => {
        cy.get(`a[title="Women"]`).click();  
        cy.url().should("include", "id_category=3&controller=category")
    })

    it("Wybieranie filtra instock", () => {    
         cy.get(`#selectProductSort`).select("In stock");//Select poznawa wybrac obiekt z listy który wpiszenmy w nawiasie (" co chcemy wybrać")
         cy.get("#selectProductSort").should("have.value", "quantity:desc");// Wpisując "quantity:desc" odnosimy się do tego atrybutu, który chcemy otworzyć
        })

        it("Wybieranie filtra instock", () => {    
             cy.get(`#selectProductSort`).select("name:asc");//Można też wyszukać za pomocą "value"
             cy.get("#selectProductSort").should("have.value", "name:asc");
        })
    })
