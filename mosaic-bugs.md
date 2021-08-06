#####PROD and Dev Bugs:

######Bug: The flag displayed for Virginia is the Flag of Washington

    Steps to Reproduce:
        1. Navigate to https://data-grid-qa-challenge-prod.herokuapp.com/ or https://data-grid-qa-challenge-dev.herokuapp.com/
        2. Scroll down to Washington row
        3. Flag cell is displaying the flag for Virginia

######Bug: When sorting by Population or Size, the column header displays sorting by "A-Z" when it should represent numberical sorting (ie. High-Low)

    Steps to Reproduce:
        1. Navigate to https://data-grid-qa-challenge-prod.herokuapp.com/ or https://data-grid-qa-challenge-dev.herokuapp.com/
        2. Click Population or Size header
        3. Data is sorted numberically Low-High [High-Low in Dev]
        4. Header displays Population (A-Z) or Size (A-Z) [(Z-A) in Dev]

######Bug: Flags are not sorting by A-Z or Z-A but instead the index at which the images are stored by

    Steps to Reproduce:
        1. Navigate to https://data-grid-qa-challenge-prod.herokuapp.com/ or https://data-grid-qa-challenge-dev.herokuapp.com/
        2. Click Flag header
        3. Flag header now displays Flag (A-Z) [(Z-A) in Dev]
        4. Flags are NOT sorted alphabetically by state

    Note:
        It looks like the column is sorted by the URL breadcrumbs at which the images are stored in followed by alphabetical sorting. 
        
        The first two url paths being 
            url/to/img/thumb/0/01/Flag_of_California.svg
            url/to/img/thumb/0/01/Flag_of_Illinois.svg
        and next two being 
            url/to/img/thumb/1/1a/Flag_of_New_York.svg
            url/to/img/thumb/1/1a/Flag_of_South_Dakota.svg
        
        



#####Dev Only Bugs:

######BUG: On initial click of a column, the date is sorted by Z-A or Low-High instead of A-Z or High-Low

    Steps to Reproduce:
        1. Navigate to https://data-grid-qa-challenge-prod.herokuapp.com/ or https://data-grid-qa-challenge-dev.herokuapp.com/
        2. Click any header
        3. Header name displays (Z-A) and column is sorted reverse alphabetically or High-Low first