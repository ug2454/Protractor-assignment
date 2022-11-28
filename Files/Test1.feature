Feature: Calculator

    Background: Launch URL
        Given I launch the url "https://juliemr.github.io/protractor-demo/"

    Scenario Outline: Check the calculators functionality

        When Enter first and second number '<number1>' '<number2>'
        And select the '<operator>'
        Then the result should be '<result>' with '<expression>'

        Examples:
            | number1 | number2 | operator       | result   | expression   |
            | 12      | 0       | DIVISION       | Infinity | 12 / 0       |
            |         |         | DIVISION       | NaN      | /            |
            | abc     | def     | ADDITION       | NaN      | abc + def    |
            | @$_,    | !%_/;   | ADDITION       | NaN      | @$_, + !%_/; |
            | 1       | 2       | ADDITION       | 3        | 1 + 2        |
            | 20      | 5       | MULTIPLICATION | 100      | 20 * 5       |
            | 20      | 5       | MODULO         | 0        | 20 % 5       |
            | 12      | 4       | DIVISION       | 3        | 12 / 4       |
            | 10      | 5       | SUBTRACTION    | 5        | 10 - 5       |
            | 23      | 87      | SUBTRACTION    | -64      | 23 - 87      |
            | 4444444444444444444666666666666666666666655555555555555555555       | 1111111111111111111888888888888888888888888888888888889999999999999999999999999999       | MULTIPLICATION | 4.938271604938271e+141      | 4444444444444444444666666666666666666666655555555555555555555 * 1111111111111111111888888888888888888888888888888888889999999999999999999999999999       |
