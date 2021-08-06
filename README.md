### Running Tests:

By default, cypress will run/open using production url

    npx cypress open

In order to run using dev url, overwrite the baseUrl environment variable

    npx cypress open --config baseUrl=https://data-grid-qa-challenge-dev.herokuapp.com/