/// <reference types="cypress" />

/******************************/
/*      Pinning a Column      */
/******************************/

let url = Cypress.config().baseUrl

describe('Initial State of Headers', () => {
    before(() => {
        cy.visit(url)
    })
  
    it('Validate the initial column header order as State|Abbreviation|Population|Size|Flag', () => {

      // Load test data from fixture
      cy.fixture('column_headers.json').then((headers) => {

        // Iterate and validate for each column header
        for (const [header, index] of Object.entries(headers.columnHeaders)) {
          cy.getColumnIndex(header).then((colIndex) => {
            expect(colIndex).to.eq(index)
          })
        }
      })
    })
})

describe('Pinning the State header', () => {
    const headerName = 'State'
    const origIndex = 0
    const expectedIndex = 0

    before(() => {
        cy.visit(url)
    })

    it('Validate when command-clicking the State header, the State header remains pinned as the first column', () => {
        cy.metaClickHeader(headerName)

        cy.getColumnIndex(headerName).then((colIndex) => {
            expect(colIndex).to.equal(expectedIndex)
        })
    })

    it('Validate State header color is yellow', () => {
        cy.get('thead > tr')
            .contains(headerName)
            .should('have.css', 'background-color', 'rgb(255, 255, 0)')
    })

    it('Validate when command-clicking the State header, the column reverts back to its original position', () => {
        cy.metaClickHeader(headerName)

        cy.getColumnIndex(headerName).then((colIndex) => {
            expect(colIndex).to.equal(origIndex)
        })
    })

    it('Validate State header color is gray', () => {
        cy.get('thead > tr')
            .contains(headerName)
            .should('have.css', 'background-color', 'rgb(211, 211, 211)')
    })
})

describe('Pinning the Abbreviation header', () => {
    const headerName = 'Abbreviation'
    const origIndex = 1
    const expectedIndex = 0

    before(() => {
        cy.visit(url)
    })

    it('Validate when command-clicking the Abbreviation header, the Abbreviation header remains pinned as the first column', () => {
        cy.metaClickHeader(headerName)

        cy.getColumnIndex(headerName).then((colIndex) => {
            expect(colIndex).to.equal(expectedIndex)
        })
    })

    it('Validate Abbreviation header color is yellow', () => {
        cy.get('thead > tr')
            .contains(headerName)
            .should('have.css', 'background-color', 'rgb(255, 255, 0)')
    })

    it('Validate when command-clicking the Abbreviation header, the column reverts back to its original position', () => {
        cy.metaClickHeader(headerName)

        cy.getColumnIndex(headerName).then((colIndex) => {
            expect(colIndex).to.equal(origIndex)
        })
    })

    it('Validate Abbreviation header color is gray', () => {
        cy.get('thead > tr')
            .contains(headerName)
            .should('have.css', 'background-color', 'rgb(211, 211, 211)')
    })
})

describe('Pinning the Population header', () => {
    const headerName = 'Population'
    const origIndex = 2
    const expectedIndex = 0

    before(() => {
        cy.visit(url)
    })

    it('Validate when command-clicking the Population header, the Population header remains pinned as the first column', () => {
        cy.metaClickHeader(headerName)

        cy.getColumnIndex(headerName).then((colIndex) => {
            expect(colIndex).to.equal(expectedIndex)
        })
    })

    it('Validate Population header color is yellow', () => {
        cy.get('thead > tr')
            .contains(headerName)
            .should('have.css', 'background-color', 'rgb(255, 255, 0)')
    })

    it('Validate when command-clicking the Population header, the column reverts back to its original position', () => {
        cy.metaClickHeader(headerName)

        cy.getColumnIndex(headerName).then((colIndex) => {
            expect(colIndex).to.equal(origIndex)
        })
    })

    it('Validate Population header color is gray', () => {
        cy.get('thead > tr')
            .contains(headerName)
            .should('have.css', 'background-color', 'rgb(211, 211, 211)')
    })
})

describe('Pinning the Size header', () => {
    const headerName = 'Size'
    const origIndex = 3
    const expectedIndex = 0

    before(() => {
        cy.visit(url)
    })

    it('Validate when command-clicking the Size header, the Size header remains pinned as the first column', () => {
        cy.metaClickHeader(headerName)

        cy.getColumnIndex(headerName).then((colIndex) => {
            expect(colIndex).to.equal(expectedIndex)
        })
    })

    it('Validate Size header color is yellow', () => {
        cy.get('thead > tr')
            .contains(headerName)
            .should('have.css', 'background-color', 'rgb(255, 255, 0)')
    })

    it('Validate when command-clicking the Size header, the column reverts back to its original position', () => {
        cy.metaClickHeader(headerName)

        cy.getColumnIndex(headerName).then((colIndex) => {
            expect(colIndex).to.equal(origIndex)
        })
    })

    it('Validate Size header color is gray', () => {
        cy.get('thead > tr')
            .contains(headerName)
            .should('have.css', 'background-color', 'rgb(211, 211, 211)')
    })
})

describe('Pinning the Flag header', () => {
    const headerName = 'Flag'
    const origIndex = 4
    const expectedIndex = 0

    before(() => {
        cy.visit(url)
    })

    it('Validate when command-clicking the Flag header, the Flag header remains pinned as the first column', () => {
        cy.metaClickHeader(headerName)

        cy.getColumnIndex(headerName).then((colIndex) => {
            expect(colIndex).to.equal(expectedIndex)
        })
    })

    it('Validate Flag header color is yellow', () => {
        cy.get('thead > tr')
            .contains(headerName)
            .should('have.css', 'background-color', 'rgb(255, 255, 0)')
    })

    it('Validate when command-clicking the Flag header, the column reverts back to its original position', () => {
        cy.metaClickHeader(headerName)

        cy.getColumnIndex(headerName).then((colIndex) => {
            expect(colIndex).to.equal(origIndex)
        })
    })

    it('Validate Flag header color is gray', () => {
        cy.get('thead > tr')
            .contains(headerName)
            .should('have.css', 'background-color', 'rgb(211, 211, 211)')
    })
})

describe('Pinning sorted by order of pinned header', () => {

    before(() => {
        cy.visit(url)
    })

    it('Validate when command-clicking Population, Population header index equals 0', () => {
        cy.metaClickHeader('Population')

        cy.getColumnIndex('Population').then((colIndex) => {
            expect(colIndex).to.equal(0)
        })
    })

    it('Validate when command-clicking State, State header index equals 1', () => {
        cy.metaClickHeader('State')

        cy.getColumnIndex('State').then((colIndex) => {
            expect(colIndex).to.equal(1)
        })
    })

    it('Validate when command-clicking Flag, Flag header index equals 2', () => {
        cy.metaClickHeader('Flag')

        cy.getColumnIndex('Flag').then((colIndex) => {
            expect(colIndex).to.equal(2)
        })
    })

    it('Validate when command-clicking Size, Size header index equals 3', () => {
        cy.metaClickHeader('Size')

        cy.getColumnIndex('Size').then((colIndex) => {
            expect(colIndex).to.equal(3)
        })
    })

    it('Validate when command-clicking Abbreviation, Abbreviation header index equals 4', () => {
        cy.metaClickHeader('Abbreviation')

        cy.getColumnIndex('Abbreviation').then((colIndex) => {
            expect(colIndex).to.equal(4)
        })
    })
})
  
describe('Sorting pinned headers', () => {

    before(() => {
        cy.visit(url)
    })

    it('Validate when clicking the pinned State header, and header name is State (A-Z), State column is sorted alphabetically A-Z', () => {
        cy.metaClickHeader('State')
        cy.clickHeader('State', 'State (A-Z)')

        // Load Static data to use for validation
        cy.fixture('state.json').then((states) => {
            // Retrieve column based on column name, even when pinned
            cy.getColumnContent('State').then((content) => {
                // Enumerate through values and validate
                for (const [index, val] of content.entries()) {

                    // Validate States as-is ordered alphabetically
                    expect(states.state[index]).to.be.equals(val)
                }
            })
        })
    })

    it('Validate when clicking the pinned Abbreviation header, and header name is Abbreviation (A-Z), Abbreviation column is sorted alphabetically A-Z', () => {
        cy.metaClickHeader('Abbreviation')
        cy.clickHeader('Abbreviation', 'Abbreviation (A-Z)')

        // Load Static data to use for validation
        cy.fixture('abbreviation.json').then((abbreviations) => {
            abbreviations.abbreviation.sort()

            // Retrieve column based on column name, even when pinned
            cy.getColumnContent('Abbreviation').then((content) => {
                // Enumerate through values and validate
                for (const [index, val] of content.entries()) {

                    // Validate Abbreviations as-is ordered alphabetically
                    expect(abbreviations.abbreviation[index]).to.be.equals(val)
                }
            })
        })
    })

    it('Validate when clicking the pinned Population header, and header name is Population (A-Z), Population column is sorted numberically Low-High', () => {
        cy.metaClickHeader('Population')
        cy.clickHeader('Population', 'Population (A-Z)')


        // Load Static data to use for validation
        cy.fixture('population.json').then((populations) => {

            // Sanitize data to int and sort Low-High
            populations.population = populations.population.map((n) => parseInt(n.replace(/,/g, '')));
            populations.population.sort((a, b) =>  {
                return a - b;
            })

            // Retrieve column based on column name, even when pinned
            cy.getColumnContent('Population').then((content) => {
                // Enumerate through values and validate
                for (const [index, val] of content.entries()) {

                    // Validate Population as-is ordered alphabetically
                    expect(populations.population[index]).to.be.equals(parseInt(val.replace(/,/g, '')))
                }
            })
        })


    })

    it('Validate when clicking the pinned Size header, and header name is Size (A-Z), Size column is sorted numberically Low-High', () => {
        cy.metaClickHeader('Size')
        cy.clickHeader('Size', 'Size (A-Z)')
        cy.fixture('size.json').then((sizes) => {

            // Sanitize data to int and sort Low-High
            sizes.size = sizes.size.map((n) => parseFloat(n.replace(/,/g, '')));
            sizes.size.sort((a, b) =>  {
                return a - b;
            })

            // Retrieve column based on column name, even when pinned
            cy.getColumnContent('Size').then((content) => {
                // Enumerate through values and validate
                for (const [index, val] of content.entries()) {

                    // Validate States as-is ordered alphabetically
                    expect(sizes.size[index]).to.be.equals(parseFloat(val.replace(/,/g, '')))
                }
            })
        })

    })

    it('Validate when clicking the pinned Flag header, and header name is Flag (A-Z), Flag column is sorted alphabetically A-Z', () => {
        cy.metaClickHeader('Flag')
        cy.clickHeader('Flag', 'Flag (A-Z)')

        // Load Static data to use for validation
        cy.fixture('state.json').then((states) => {
            // Retrieve column based on column name, even when pinned
            cy.getColumnContent('Flag').then((content) => {
                // Enumerate through values and validate
                for (const [index, val] of content.entries()) {

                    // Validate States as-is ordered alphabetically
                    expect(val).to.contain(states.state[index])
                }
            })
        })
    })
})