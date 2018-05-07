Feature: As a Tester I would like to unlearn the last used request response so that I do not have to perform the request again. TF:4.01

Scenario: Unlearn previous learned response
Given Mimicservice is up and running
And I use unlearnAll command
And has learned request "Number" and response "One"
When I use unlearn command
And I give request "Number"
Then I get response NULL

Scenario: Unlearn previous learned response when given a request after learning a response. TF:4.02
Given Mimicservice is up and running
And I use unlearnAll command
And has learned request "Number" and response "One"
And has learned request "Color" and response "Blue"
When I give request "Number"
And I use unlearn command
And I give request "Color"
Then I get response "Blue"
And I give request "Number"
And I get response NULL

Scenario: Unlearn last learned request and response. TF:4.03

Given Mimicservice is up and running
And I use unlearnAll command
And has learned request "Number" and response "One"
And has learned request "Color" and response "Blue"
When I use unlearn command
And I give request "Color"
Then I get response NULL
And I give request "Number"
And I get response "One"
