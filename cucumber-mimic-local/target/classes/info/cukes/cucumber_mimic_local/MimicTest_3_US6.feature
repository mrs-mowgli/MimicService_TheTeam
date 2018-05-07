Feature: As a tester I would like to have a unlearn all function to start a test from scratch. TF:6.01

Scenario: Learning multiple request and responses and verify that all of them are unlearnt
Given Mimicservice is up and running
And has learned request "Banana" and response "Skids"
And has learned request "Laurel" and response "Hardy"
And has learned request "Ful" and response "Bil"
When I use unlearnAll command
And I give request "Laurel"
Then I get response NULL
When I give request "Banana"
Then I get response NULL