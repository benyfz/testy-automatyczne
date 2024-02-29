//import { searchPhrase } from "../fixtures/searchData.json"

class Search {
    get searchBox() {
        return cy.get("#search_query_top")
    }
    typeSearchPhrase(searchValue) {
        this.searchBox.type(searchValue) // Zwracanie treści z searchValue
    }
    clearSearchPhrase() {
        this.searchBox.clear()
    }

}


export default new Search()