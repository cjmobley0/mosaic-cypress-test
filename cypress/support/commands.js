// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



const getColumnContent = (colName) => {
    /* __ Returns contents of column into an array __ */

    const columnList = [];

    cy.get('thead > tr')
        .contains(colName)
        .invoke('index')
        .then((headerIndex) => { // Get column index first as header text changes based on pinned header
            cy.get('tbody')
                .find('tr')
                .each(($el) => { 
                    // Based on header index, push value to a list/array
                    if (colName == 'Flag') {
                        columnList.push($el.children().eq(headerIndex).find('img').attr('src'))
                    } else {
                        columnList.push($el.children().eq(headerIndex).text())
                    }
                }).then(() => {return columnList})
        })
}

const getColumnIndex = (colName) => {
    cy.get('thead > tr')
        .contains(colName)
        .invoke('index')
        .then((i) => {
            return i
        })
}

const clickHeader = (headerName, expectedHeaderName) => {
    /* __ Click header and validate expected header name change__ */

    cy.get('thead > tr')
        .contains(headerName)
        .click()
        .then(($el) => {
            expect($el.text()).to.be.equals(expectedHeaderName)
        })
}

const metaClickHeader = (headerName) => {
    /* __ Click header and validate expected header name change__ */

    cy.get('thead > tr')
        .contains(headerName)
        .click({metaKey: true})
}



Cypress.Commands.add('getColumnContent', getColumnContent)
Cypress.Commands.add('getColumnIndex', getColumnIndex)
Cypress.Commands.add('clickHeader', clickHeader)
Cypress.Commands.add('metaClickHeader', metaClickHeader)



