Feature: Test Banking application

    Background: Launch URL
        Given I launch the url "https://juliemr.github.io/protractor-demo/"

    Scenario Outline: Add customer through bank manager login option

        When Enter first and second number <number1> <number2>
        And select the '<operator>'
        # And I give the customer details "<FirstName>", "<LastName>","<PostCode>"
        # And I click on Add customer button
        Then the result should be '<result>'
        # add, modulo,minus,multiply, divide

        Examples:
            | number1 | number2 | operator       | result |
            | 1       | 2       | ADDITION       | 3      |
            | 20      | 5       | MULTIPLICATION | 100    |
            | 20      | 5       | MODULO         | 0      |
            | 12      | 4       | DIVISION       | 3      |
            | 10      | 5       | SUBTRACTION    | 5      |
# Examples:
#     | FirstName | LastName | PostCode |
#     | Abhishek  | Thakur   | 1234     |
# | Test      | test     | 2345     |
