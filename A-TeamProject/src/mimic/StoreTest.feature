Feature: The mock should rember requests and responses

Scenario: Learn a response and assert that it remembers it correctly. TF:2.01
Given A request and a response has been saved 
When I give a request	
Then I get correct response back

Scenario: Learn a response then unlearn it, then checking if the mindsweep was succesful. TF:1.02
Given
When
Then

Scenario: Try to get a respond from a non-existing request. TF:1.03
Given
When
Then


Scenario: Learning multiple req/resp and assert if it can remember multiple responses. TF:1.04
Given
When
Then

Scenario: Learning multiple requests and checks that the last req/resp is the one and only true. TF:1.05
Given
When
Then