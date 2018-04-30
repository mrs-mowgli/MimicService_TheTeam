Feature: As a Tester I would like the mock to unlearn all responses so that I can rerun all the tests without restarting the service

Scenario: Unlearn all previous learned responses
Given Mimicservice is up and running
And has learned first request	as "Number" and second response is "One"
And has learned second request	as "Color" and second response is "Blue"
When I unlearnAll 
And I give first request "Number"
And second request "Color"
Then I get first response "Paste or type"
And second response "Paste or type"