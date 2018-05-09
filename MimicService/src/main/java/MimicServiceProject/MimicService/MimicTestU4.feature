Feature: As a Tester I would like to unlearn the previously learned response so that I do not have to perform the request again

Scenario: Learn a response then unlearn it. TF:2.02
Given Mimicservice is up and running
And Mimic has no learned requests
And has learned request "Number" and response "One"
When I use unlearn command
And I give request "Number"
Then I get response Form