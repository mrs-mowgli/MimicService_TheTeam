Feature: Unlearn the previously learned response in the middle of a sequence

  Scenario: Unlearn in the middle of a sequence
    Given Mimicservice is up and running 
    And has learned request "Number" and response "1"
    And has learned request "Number" and response "2"
    And I give request "Number"
    And I give request "Number"
    And has learned request "Number" and response "3"
    And I give request "Number"
    And has learned request "Number" and response "4"
    And I give request "Number"
    When I resetState
    And I give request "Number"
    And I give request "Number" 
    And I give request "Number" 
    And I use unlearn command
    And I give request "Number"
    Then I get response "2"

  
