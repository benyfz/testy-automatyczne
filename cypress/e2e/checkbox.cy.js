/// <reference types="cypress"/>

import Base from "../pages/Base";// Importowanie pliku do otwierania strony 
import Home from "../pages/Home"
import Women from "../pages/Women";
    describe("Test związany z zaznaczeniem checkboxa", () => {
it("Kliknięcie w zakładkę Women", () => {
    Base.openHomePage();// Otwieranie strony z importowanego pliku
    // Home.womenTab.click();//Klikanie w zakładke "Women"
    Home.clickOnWomenTab(); //Klikanie w zakładke "Women"
    cy.url().should("include", "id_category=3&controller=category" )// sprawdzenie czy strona została otwarta na tej co trzeba. Słówko "should" mówi, że cos powinno być. "include" oznacza czy zawiera.
})
it("Zaznaczenie checkboxa w zakładce Women", () => {
    Women.checkTops();
    Women.topsCheckBox.should("be.checked");
    // cy.get(`#layered_category_4`).check();
    // cy.get(`#layered_category_4`).should("be.checked")//Sprawdzamy czy jest znzaczony lub gdybyśmy chcieli, to dodajemy "not."
    //cy.wait(2000);
    Women.checkDresses();
    Women.checkSize();
    //cy.get(`#ul_layered_id_attribute_group_1 input`).check();//Zaznaczyliśmy cały obszar z 3 polami do znaczenia i ważne, żeby wpisać "input"!!!!
})
})