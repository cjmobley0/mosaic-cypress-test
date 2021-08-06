/// <reference types="cypress" />

/********************************/
/*      Sorting by Column       */
/********************************/

let url = Cypress.config().baseUrl

describe('Sorting by State', () => {

    before(() => {
        cy.visit(url)
    })
  
    // Step 1
    it('Validate when clicking the State Column, and header name is State (A-Z), State column is sorted alphabetically A-Z', () => {

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

    // Step 2
    it('Validate when clicking the State Column, and header name is State (Z-A), State column is sorted alphabetically Z-A', () => {

        cy.clickHeader('State (A-Z)', 'State (Z-A)')

        cy.fixture('state.json').then((states) => {
            // Validate this time with expected values to be reversed
            states.state.sort().reverse()

            cy.getColumnContent('State').then((content) => {

                for (const [index, val] of content.entries()) {
                    expect(states.state[index]).to.be.equals(val)
                }
            })
        })
    })

    //Step 3
    it('Validate grid is restored to initial state order', () => {

        cy.clickHeader('State (Z-A)', 'State')

        cy.fixture('state.json').then((states) => {
            cy.getColumnContent('State').then((content) => {

                for (const [index, val] of content.entries()) {
                    expect(states.state[index]).to.be.equals(val)
                }
            })
        })
    })
})

describe('Sorting by Abbreviation', () => {
    before(() => {
      cy.visit(url)
    })
  
    // Step 1
    it('Validate when clicking the Abbreviation Column, and header name is Abbreviation (A-Z), Abbreviation column is sorted alphabetically A-Z', () => {

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
    // Step 2
    it('Validate when clicking the Abbreviation Column, and header name is Abbreviation (Z-A), Abbreviation column is sorted alphabetically Z-A', () => {

        cy.clickHeader('Abbreviation (A-Z)', 'Abbreviation (Z-A)')

        cy.fixture('abbreviation.json').then((abbreviations) => {
            // Validate this time with expected values to be reversed
            abbreviations.abbreviation.sort().reverse()

            cy.getColumnContent('Abbreviation').then((content) => {

                for (const [index, val] of content.entries()) {
                    expect(abbreviations.abbreviation[index]).to.be.equals(val)
                }
            })
        })
    })

    //Step 3
    it('Validate grid is restored to initial state order', () => {

        cy.clickHeader('Abbreviation (Z-A)', 'Abbreviation')

        cy.fixture('abbreviation.json').then((abbreviations) => {
            cy.getColumnContent('Abbreviation').then((content) => {

                for (const [index, val] of content.entries()) {
                    expect(abbreviations.abbreviation[index]).to.be.equals(val)
                }
            })
        })
    })
})

describe('Sorting by Population', () => {
    before(() => {
      cy.visit(url)
    })
  
    // Step 1
    it('Validate when clicking the Population Column, and header name is Population (A-Z), Population column is sorted numberically Low-High', () => {

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

    // Step 2
    it('Validate when clicking the Population Column, and header name is Population (Z-A), Population column is sorted numberically High-Low', () => {

        cy.clickHeader('Population (A-Z)', 'Population (Z-A)')

        cy.fixture('population.json').then((populations) => {

            // Sanitize data to int and sort High-Low
            populations.population = populations.population.map((n) => parseInt(n.replace(/,/g, '')));
            populations.population.sort((a, b) =>  {
                return b - a;
            })

            cy.getColumnContent('Population').then((content) => {

                for (const [index, val] of content.entries()) {
                    expect(populations.population[index]).to.be.equals(parseInt(val.replace(/,/g, '')))
                }
            })
        })
    })

    //Step 3
    it('Validate grid is restored to initial state order', () => {

        cy.clickHeader('Population (Z-A)', 'Population')

        cy.fixture('Population.json').then((populations) => {
            cy.getColumnContent('Population').then((content) => {

                for (const [index, val] of content.entries()) {
                    expect(populations.population[index]).to.be.equals(val)
                }
            })
        })
    })
})

describe('Sorting by Size', () => {
    before(() => {
        cy.visit(url)
    })
    
    // Step 1
    it('Validate when clicking the Size Column, and header name is Size (A-Z), Size column is sorted numberically Low-High', () => {

        cy.clickHeader('Size', 'Size (A-Z)')

        // Load Static data to use for validation
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
    // Step 2
    it('Validate when clicking the Size Column, and header name is Size (Z-A), Size column is sorted numberically High-Low', () => {

        cy.clickHeader('Size (A-Z)', 'Size (Z-A)')

        cy.fixture('size.json').then((sizes) => {
            // Sanitize data to int and sort High-Low
            sizes.size = sizes.size.map((n) => parseFloat(n.replace(/,/g, '')));
            sizes.size.sort((a, b) =>  {
                return b - a;
            })

            cy.getColumnContent('Size').then((content) => {

                for (const [index, val] of content.entries()) {
                    expect(sizes.size[index]).to.be.equals(parseFloat(val.replace(/,/g, '')))
                }
            })
        })
    })

    //Step 3
    it('Validate grid is restored to initial state order', () => {

        cy.clickHeader('Size (Z-A)', 'Size')

        cy.fixture('size.json').then((sizes) => {
            // Validate this time with expected values to be reversed
            cy.getColumnContent('Size').then((content) => {

                for (const [index, val] of content.entries()) {
                    expect(sizes.size[index]).to.be.equals(val)
                }
            })
        })
    })
})

describe('Sorting by Flag', () => {
    before(() => {
      cy.visit(url)
    })
  
    // Step 1
    it('Validate when clicking the Flag Column, and header name is Flag (A-Z), Flag column is sorted alphabetically A-Z', () => {

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

    // Step 2
    it('Validate when clicking the Flag Column, and header name is Flag (Z-A), Flag column is sorted alphabetically Z-A', () => {

        cy.clickHeader('Flag (A-Z)', 'Flag (Z-A)')

        cy.fixture('state.json').then((states) => {
            // Validate this time with expected values to be reversed
            states.state.sort().reverse()

            cy.getColumnContent('Flag').then((content) => {

                for (const [index, val] of content.entries()) {
                    expect(val).to.contain(states.state[index])
                }
            })
        })
    })

    //Step 3
    it('Validate grid is restored to initial state order', () => {

        cy.clickHeader('Flag (Z-A)', 'Flag')

        cy.fixture('state.json').then((states) => {
            cy.getColumnContent('Flag').then((content) => {

                for (const [index, val] of content.entries()) {
                    expect(val).to.contain(states.state[index].replace(/ /g,"_"))
                }
            })
        })
    })
})

describe('Disable sorting by clicking a different column header', () => {

    before(() => {
        cy.visit(url)
    })

    it('Validate when clicking the State header, and header name is State (A-Z), State column is sorted alphabetically A-Z', () => {
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

    it('Validate when clicking the Flag header, and header name is Flag (A-Z), Flag column is sorted alphabetically A-Z', () => {
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

    it('Validate when clicking the Abbreviation header, and header name is Abbreviation (A-Z), Abbreviation column is sorted alphabetically A-Z', () => {
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

    it('Validate when clicking the Size header, and header name is Size (A-Z), Size column is sorted numberically Low-High', () => {
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

    it('Validate when clicking the Population header, and header name is Population (A-Z), Population column is sorted numberically Low-High', () => {
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
})

  