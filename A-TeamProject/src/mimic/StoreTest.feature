Feature: The mock should remember requests and responses

Scenario: Learn a response and show it remembers it correctly. TF:2.01

Given Mimicservice is up and running
When I give a request	as Number and response is One
Then I get response is One

Scenario: Learn a response then unlearn it. TF:2.02
Given Mimicservice is up and running
When I give a request	as Number and response is One
And I unlearn all
Then I get response is NULL

Scenario: Try to get a respond from a non-existing request. TF:2.03
Given Mimicservice up and running
When I give a non-existing request adasda 
Then I get correct response back as NULL


Scenario: Learning multiple req/resp and assert if it can remember multiple responses. TF:2.04
Given Mimicservice up and running
And has learned request Banana and response Skids
And has learned request Laurel and response Hardy
And has learned request Ful and response Bil
When I give a request for Laurel
Then I get correct response back as Hardy

Scenario: Learning multiple requests and checks that the last req/resp is the one and only true. TF:2.05
Given Mimicservice up and running
And has learned request Number and response One
And has learned request Number and response Two
And has learned request Number and response Three
When I give request Number
Then I get correct response back as Three