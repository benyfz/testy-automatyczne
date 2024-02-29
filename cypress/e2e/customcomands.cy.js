/// <reference types="cypress"/>

import { login, passwd } from "../fixtures/loginData.json"

    describe("Custom Commands", () => {
        it("Logowanie do strony automationpractice.pl", () => {
            cy.Login(login, passwd); // Należy wpisan parametry - "login oraz hasło" albo podłożyć dane z pliku w folderze "fixtures"
        })

})