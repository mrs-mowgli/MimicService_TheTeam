Feature: The mock should learn to respond to requests that I have not defined so that i do not have to add code for that manually

  Scenario: Learning to calculate.
    Given Mimicservice is up and running
    When I "add" answer "25" with values "10" and "15"
    And I "add" answer "10" with values "7" and "3"
    And I "add" answer "30" with values "12" and "18"
    And I give request "add?value1=3&value2=5"
    Then I get response "8"
