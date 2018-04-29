Feature: As a Tester I would like to unlearn the previously learned response so that I do not have to perform the request again

Scenario: Unlearn previous learned response
Given Mimicservice is up and running
And has learned request	as "Number" and response is "One"
When I unlearn 
And I give request for "Number"
Then I get response "Paste or type"

Scenario: Unlearn previous learned response when given request after learned response
Given Mimicservice is up and running
And has learned first request	as "Number" and first response is "One"
And has learned second request	as "Color" and second response is "Blue"
And I requested "Number"
When I unlearn 
And I give request "Color"
Then I get response "Paste or type"

Scenario: Unlearn previous learned response when given request after learned response
Given Mimicservice is up and running
And has learned first request	as "Number" and first response is "One"
And has learned second request	as "Color" and second response is "Blue"
When I unlearn
And I give request "Number"
Then I get response "One"


