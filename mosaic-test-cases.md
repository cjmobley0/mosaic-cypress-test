### Sort by Column Test Cases

TC1. Sorting by State

    Step 1 - Validate when clicking the State header, and header name is State (A-Z), State column is sorted alphabetically A-Z
    Step 2 - Validate when clicking the State header, and header name is State (Z-A), State column is sorted alphabetically Z-A
    Step 3 - Validate grid is restored to initial state order

TC2. Sorting by Abbreviation

    Step 1 - Validate when clicking the Abbreviation header, and header name is Abbreviation (A-Z), Abbreviation column is sorted alphabetically A-Z
    Step 2 - Validate when clicking the Abbreviation header, and header name is Abbreviation (Z-A), Abbreviation column is sorted alphabetically Z-A
    Step 3 - Validate grid is restored to initial state order

TC3. Sorting by Population

    Step 1 - Validate when clicking the Population header, and header name is Population (A-Z), Population column is sorted numberically Low-High
    Step 2 - Validate when clicking the Population header, and header name is Population (Z-A), Population column is sorted numberically High-Low
    Step 3 - Validate grid is restored to initial state order

TC4. Sorting by Size header
   
    Step 1 - Validate when clicking the Size header, and header name is Size (A-Z), Size column is sorted numberically Low-High
    Step 2 - Validate when clicking the Size header, and header name is Size (Z-A), Size column is sorted numberically High-Low
    Step 3 - Validate grid is restored to initial state order

TC5. Sorting by Flag header

    Step 1 - Validate when clicking the Flag header, and header name is Flag (A-Z), Flag column is sorted alphabetically A-Z
    Step 2- Validate when clicking the Flag header, and header name is Flag (Z-A), Flag column is sorted alphabetically Z-A
    Step 3 - Validate grid is restored to initial state order

TC6. Disable sorting by clicking a different column header

    Step 1 - Validate when clicking the Population header, and the header is Population (A-Z), Population column is sorted numberically Low-High
    Step 2 - Validate when clicking the Flag header, and header name is Flag (A-Z), Flag column is sorted alphabetically A-Z
    Step 3 - Validate when clicking the Abbreviation header, and header name is Abbreviation (A-Z), Abbreviation column is sorted alphabetically A-Z
    Step 4 - Validate when clicking the Size header, and header name is Size (A-Z), the population header is "Population and the Size column is sorted numberically Low-High
    Step 5 - Validate when clicking the Population header, and header name is Population (A-Z), Population column is sorted numberically Low-High


### Pinning a header Test Cases

TC1. Initial State of Header

    Step 1 - Validate the initial column header order as State|Abbreviation|Population|Size|Flag

TC2. Pinning the State header

    Step 1 - Validate when command-clicking the State header, the State header remains pinned as the first column
    Step 2 - Validate State header color is yellow
    Step 3 - Validate when command-clicking the State header, the column reverts back to it's original position
    Step 4 - Validate State header color is gray

TC3. Pinning the Abbrevitations header

    Step 1 - Validate when command-clicking the Abbreviation header, the Abbreviation header remains pinned as the first column
    Step 2 - Validate Abbreviation header color is yellow
    Step 3 - Validate when command-clicking the Abbreviation header, the column reverts back to it's original position
    Step 4 - Validate Abbreviation header color is gray

TC4. Pinning the Population header

    Step 1 - Validate when command-clicking the Population header, the Population header remains pinned as the first column
    Step 2 - Validate Population header color is yellow
    Step 3 - Validate when command-clicking the Population header, the column reverts back to it's original position
    Step 4 - Validate Population header color is gray

TC5. Pinning the Size header

    Step 1 - Validate when command-clicking the Size header, the Size header remains pinned as the first column
    Step 2 - Validate Size header color is yellow
    Step 3 - Validate when command-clicking the Size header, the column reverts back to it's original position
    Step 4 - Validate Size header color is gray

TC6. Pinning the Flag header

    Step 1 - Validate when command-clicking the Flag header, the Flag header remains pinned as the first column
    Step 2 - Validate Flag header color is yellow
    Step 3 - Validate when command-clicking the Flag header, the column reverts back to it's original position
    Step 4 - Validate Flag header color is gray

TC7. Pinning sorted by order of pinned header

    Step 1 - Validate when command-clicking Population, Population header index equals 0
    Step 2 - Validate when command-clicking State, State header index equals 1
    Step 3 - Validate when command-clicking Flag, Flag header index equals 2
    Step 4 - Validate when command-clicking Size, Size header index equals 3
    Step 5 - Validate when command-clicking Abbreviation, Abbreviation header index equals 4

TC8. Sorting pinned header

    Step 1 - Validate when clicking the pinned State header, and header name is State (A-Z), State column is sorted alphabetically A-Z
    Step 2 - Validate when clicking the pinned Abbreviation header, and header name is Abbreviation (A-Z), Abbreviation column is sorted alphabetically A-Z
    Step 3 - Validate when clicking the pinned Population header, and header name is Population (A-Z), Population column is sorted numberically Low-High
    Step 4 - Validate when clicking the pinned Size header, and header name is Size (A-Z), Size column is sorted numberically Low-High
    Step 5 - Validate when clicking the pinned Flag header, and header name is Flag (A-Z), Flag column is sorted alphabetically A-Z

