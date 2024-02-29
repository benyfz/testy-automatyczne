/// <reference types="cypress"/>
import Base from "../pages/Base"; 
import Search from "../pages/Search";
import { searchPhrase, notFoundProduct } from "../fixtures/searchData.json"
import ResultPage from "../pages/ResultPage";

describe("Wpisywanie tekstu w wyszukiwarke", () => {
    it("Wpisywanie tekstu", () => {
        Base.openHomePage();
        //cy.visit("/");//Ustawienie strony z baseUrl
        Search.typeSearchPhrase(searchPhrase);
        //cy.get("#search_query_top").type("Przykładowa treść")// wyznaczanie miejsca do wpisywanian tekstu
        Search.searchBox.should("have.value", searchPhrase)//Wpisując "have.value" sprawdzamy przez asercje czy ta przykładowa treść jest wpisana
        //cy.wait(3000)// Wyznaczamy ile czasu ma czekać cypress na wykonanie kolejnego zadania "1" to ms 1000 to sekunda
        Search.clearSearchPhrase(); //Usuwanie wpisanego powyżej tekstu
        //cy.wait(3000)
  
        Search.typeSearchPhrase(`${searchPhrase} {enter}`)//{enter} uzycie klawisza "ENTER"
        ResultPage.searchAlert.should("be.visible").and(`include.text`, notFoundProduct);// Wpisując "be.visible" sprawdzamy czy alert jest widoczny. Dodatkowo "and" oznacza i "include.text" czy zawiera tekst, w naszym przypadku "No results"
        Search.searchBox.should("have.class", "search_query")
        Search.searchBox.should("have.css", "margin-right", "1px")// Sprawdzanie stylu css poprzez "have.css" maring-right w wielkości 1px.
    })
})