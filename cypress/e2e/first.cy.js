/// <reference types="cypress"/>

describe("Mój pierwszy test automatyczny", () =>{
it("Otworzenie strony google.com", () => {
    cy.visit("http://google.com")
})
})