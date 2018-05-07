Feature: The mock should remember requests and responses using the Service U1,U2

Scenario: Learn a response and verify it remembers it 	 correctly. TF:2.01

Given Mimicservice is up and running
And has learned request "Number" and response "One"
When I give request "Number"
Then I get response "One"


Scenario: Try to get a response from a non-existing request. TF:2.03
Given Mimicservice is up and running
When I give request "adasda" 
Then I get response Form


Scenario: Learning multiple req/resp and verify it remembers not only first/last response. TF:2.04
Given Mimicservice is up and running
And has learned request "Banana" and response "Skids"
And has learned request "Laurel" and response "Hardy"
And has learned request "Ful" and response "Bil"
When I give request "Laurel"
Then I get response "Hardy"

Scenario: With the GUI test that i can learn requests and get correct responses

Given Mimicservice is up and running
When In URL I give request "Number"
And write Response "One" in the form
And push learn button
And In URL I give request "Number"
Then On the page I get response "One"

Scenario: With the GUI test that i can unlearn requests and get the form when calling the unlearned request

Given Mimicservice is up and running
When In URL I give request "unlearn"
And In URL I give request "Number"
Then On the page I get response form
