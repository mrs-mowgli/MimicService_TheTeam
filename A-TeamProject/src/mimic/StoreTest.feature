Feature: The mock should remember requests and responses

Scenario: Learn a response and show it remembers it correctly. TF:2.01
Given Mimicservice is up and running
When I give a request	as Number and response is One
Then I get response is One

Scenario: Learn a response then unlearn it. TF:1.02
Given Mimicservice is up and running
When I give a request	as Number and response is One
And I unlearn all
Then I get response is NULL

Scenario: Try to get a respond from a non-existing request. TF:1.03
Given Mimicservice up and running
When I give a non-existing request adasda 
Then I get correct response back is NULL


Scenario: Learning multiple req/resp and assert if it can remember multiple responses. TF:1.04
Given Mimicservice up and running
When
Then I get correct response back 

Scenario: Learning multiple requests and checks that the last req/resp is the one and only true. TF:1.05
Given Mimicservice up and running
When
Then I get correct response back 