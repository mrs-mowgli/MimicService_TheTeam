Feature: The mock should remember requests and responses

Scenario: Learn a response and verify it remembers it correctly. TF:2.01

Given Mimicservice is up and running
And has learned request "Number" and response "One"
When I give request "Number"
Then I get response "One"

Scenario: Learn a response then unlearn it. TF:2.02
Given Mimicservice is up and running
And has learned request "Number" and response "One"
When I use unlearn command
And I give request "Number"
Then I get response NULL

Scenario: Try to get a response from a non-existing request. TF:2.03
Given Mimicservice is up and running
When I give request "adasda" 
Then I get response NULL


Scenario: Learning multiple req/resp and verify it remembers not only first/last response. TF:2.04
Given Mimicservice is up and running
And has learned request "Banana" and response "Skids"
And has learned request "Laurel" and response "Hardy"
And has learned request "Ful" and response "Bil"
When I give request "Laurel"
Then I get response "Hardy"

Scenario: Learning multiple requests and checks that the last req/resp is the one and only true. TF:2.05
Given Mimicservice is up and running
And has learned request "Number" and response "One"
And has learned request "Number" and response "Two"
And has learned request "Number" and response "Three"
When I give request "Number"
Then I get response "Three"

Scenario: Unlearn all previous learned through KillMimic TF:2.03
Given Mimicservice is up and running
And has learned request "Banana" and response "Skids"
And has learned request "Laurel" and response "Hardy"
And has learned request "Ful" and response "Bil"
When I KillMimic
And Start Mimic
And I give request "Ful"
Then I get response NULL

