Feature: Unlearn the previously learned response in the middle of a sequence

  Scenario Outline: Unlearn in the middle of a sequence
    Given Mimicservice is up and running 
    And has learned request "Number" and response "1"
    And has learnNextResponse "2"
    And I request "Number"
    And I request "Number"
    And has learnNextResponse "3"
    And I request "Number"
    And I request "Number"
    And has learnNextResponse "4"
    And I request "Number"
    And I request "Number"
    When I resetState
    And I request "Number"
    And I request "Number" again
    And I request "Number" again
    And I unlearn
    And I request "Number"
    Then I get response "2"

  
