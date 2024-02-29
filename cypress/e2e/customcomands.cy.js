/// <reference types="cypress"/>

import { login, passwd } from "../fixtures/loginData.json"

    describe("Custom Commands", () => {
        it("Logowanie do strony automationpractice.pl", () => {
            cy.Login(login, passwd); // Należy wpisać parametry - "login oraz hasło" albo podłożyć dane z pliku w folderze "fixtures"
        })

})
