$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MimicServiceProject/MimicService/LearnNewRequests.feature");
formatter.feature({
  "line": 1,
  "name": "The mock should remember requests and responses using the Service U1,U2",
  "description": "",
  "id": "the-mock-should-remember-requests-and-responses-using-the-service-u1,u2",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Learn a response and verify it remembers it \t correctly. TF:2.01",
  "description": "",
  "id": "the-mock-should-remember-requests-and-responses-using-the-service-u1,u2;learn-a-response-and-verify-it-remembers-it---correctly.-tf:2.01",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "has learned request \"Number\" and response \"One\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I give request \"Number\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I get response \"One\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 697379344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 21
    },
    {
      "val": "One",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 1693647452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 5187060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 132549,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Try to get a response from a non-existing request. TF:2.03",
  "description": "",
  "id": "the-mock-should-remember-requests-and-responses-using-the-service-u1,u2;try-to-get-a-response-from-a-non-existing-request.-tf:2.03",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I give request \"adasda\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I get response Form",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 7902470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adasda",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 246154333,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_get_response_NULL()"
});
formatter.result({
  "duration": 243759,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Learning multiple req/resp and verify it remembers not only first/last response. TF:2.04",
  "description": "",
  "id": "the-mock-should-remember-requests-and-responses-using-the-service-u1,u2;learning-multiple-req/resp-and-verify-it-remembers-not-only-first/last-response.-tf:2.04",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "has learned request \"Banana\" and response \"Skids\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "has learned request \"Laurel\" and response \"Hardy\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "has learned request \"Ful\" and response \"Bil\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I give request \"Laurel\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I get response \"Hardy\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 8788046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banana",
      "offset": 21
    },
    {
      "val": "Skids",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 422429440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laurel",
      "offset": 21
    },
    {
      "val": "Hardy",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 211725218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ful",
      "offset": 21
    },
    {
      "val": "Bil",
      "offset": 40
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 126573302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laurel",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 116757283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hardy",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 97667,
  "status": "passed"
});
formatter.uri("MimicServiceProject/MimicService/LearnToRespondToUndefined.feature");
formatter.feature({
  "line": 1,
  "name": "The mock should learn to respond to requests that I have not defined so that i do not have to add code for that manually",
  "description": "",
  "id": "the-mock-should-learn-to-respond-to-requests-that-i-have-not-defined-so-that-i-do-not-have-to-add-code-for-that-manually",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Learning to calculate addition.",
  "description": "",
  "id": "the-mock-should-learn-to-respond-to-requests-that-i-have-not-defined-so-that-i-do-not-have-to-add-code-for-that-manually;learning-to-calculate-addition.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I \"add\" values 5 and 2 with answer 7",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I \"add\" values 5 and 4 with answer 9",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I \"add\" values 9 and 4 with answer 13",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I ask for 5 \"add\" 30",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I get response \"35\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 8310377,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 321456989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "add",
      "offset": 3
    },
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "7",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 318809291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "add",
      "offset": 3
    },
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "4",
      "offset": 21
    },
    {
      "val": "9",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 222600810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "add",
      "offset": 3
    },
    {
      "val": "9",
      "offset": 15
    },
    {
      "val": "4",
      "offset": 21
    },
    {
      "val": "13",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 109698121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 10
    },
    {
      "val": "add",
      "offset": 13
    },
    {
      "val": "30",
      "offset": 18
    }
  ],
  "location": "MimicTestSteps.i_ask_for(int,String,int)"
});
formatter.result({
  "duration": 97348485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 105055,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Learning to calculate subtraction.",
  "description": "",
  "id": "the-mock-should-learn-to-respond-to-requests-that-i-have-not-defined-so-that-i-do-not-have-to-add-code-for-that-manually;learning-to-calculate-subtraction.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I \"sub\" values 5 and 2 with answer 3",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I \"sub\" values 5 and 4 with answer 1",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I \"sub\" values 9 and 4 with answer 5",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I ask for 35 \"sub\" 5",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I get response \"30\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 8980099,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 158561542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sub",
      "offset": 3
    },
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 218000988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sub",
      "offset": 3
    },
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "4",
      "offset": 21
    },
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 135819730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sub",
      "offset": 3
    },
    {
      "val": "9",
      "offset": 15
    },
    {
      "val": "4",
      "offset": 21
    },
    {
      "val": "5",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 77127977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 10
    },
    {
      "val": "sub",
      "offset": 14
    },
    {
      "val": "5",
      "offset": 19
    }
  ],
  "location": "MimicTestSteps.i_ask_for(int,String,int)"
});
formatter.result({
  "duration": 105388839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 121470,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Learning to calculate division.",
  "description": "",
  "id": "the-mock-should-learn-to-respond-to-requests-that-i-have-not-defined-so-that-i-do-not-have-to-add-code-for-that-manually;learning-to-calculate-division.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I \"div\" values 6 and 2 with answer 3",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I \"div\" values 10 and 2 with answer 5",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I \"div\" values 10 and 5 with answer 2",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I ask for 30 \"div\" 3",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I get response \"10\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 8547570,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 137435762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "div",
      "offset": 3
    },
    {
      "val": "6",
      "offset": 15
    },
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 188997768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "div",
      "offset": 3
    },
    {
      "val": "10",
      "offset": 15
    },
    {
      "val": "2",
      "offset": 22
    },
    {
      "val": "5",
      "offset": 36
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 125844487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "div",
      "offset": 3
    },
    {
      "val": "10",
      "offset": 15
    },
    {
      "val": "5",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 36
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 35887153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 10
    },
    {
      "val": "div",
      "offset": 14
    },
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "MimicTestSteps.i_ask_for(int,String,int)"
});
formatter.result({
  "duration": 24253611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 123520,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Learning to calculate multiply.",
  "description": "",
  "id": "the-mock-should-learn-to-respond-to-requests-that-i-have-not-defined-so-that-i-do-not-have-to-add-code-for-that-manually;learning-to-calculate-multiply.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I \"mult\" values 5 and 2 with answer 10",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I \"mult\" values 5 and 5 with answer 25",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I \"mult\" values 9 and 4 with answer 36",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I ask for 5 \"mult\" 30",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I get response \"150\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 7523700,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 149599090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mult",
      "offset": 3
    },
    {
      "val": "5",
      "offset": 16
    },
    {
      "val": "2",
      "offset": 22
    },
    {
      "val": "10",
      "offset": 36
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 148012195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mult",
      "offset": 3
    },
    {
      "val": "5",
      "offset": 16
    },
    {
      "val": "5",
      "offset": 22
    },
    {
      "val": "25",
      "offset": 36
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 148790253,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mult",
      "offset": 3
    },
    {
      "val": "9",
      "offset": 16
    },
    {
      "val": "4",
      "offset": 22
    },
    {
      "val": "36",
      "offset": 36
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 152629663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 10
    },
    {
      "val": "mult",
      "offset": 13
    },
    {
      "val": "30",
      "offset": 19
    }
  ],
  "location": "MimicTestSteps.i_ask_for(int,String,int)"
});
formatter.result({
  "duration": 62644835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 102182,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Learning to calculate subtraction with a negative answer.",
  "description": "",
  "id": "the-mock-should-learn-to-respond-to-requests-that-i-have-not-defined-so-that-i-do-not-have-to-add-code-for-that-manually;learning-to-calculate-subtraction-with-a-negative-answer.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I \"sub\" values 5 and 2 with answer 3",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I \"sub\" values 5 and 4 with answer 1",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I \"sub\" values 9 and 4 with answer 5",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I ask for 5 \"sub\" 35",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I get response \"-30\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 8344027,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 214977802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sub",
      "offset": 3
    },
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 208674948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sub",
      "offset": 3
    },
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "4",
      "offset": 21
    },
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 118433639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sub",
      "offset": 3
    },
    {
      "val": "9",
      "offset": 15
    },
    {
      "val": "4",
      "offset": 21
    },
    {
      "val": "5",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 33181182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 10
    },
    {
      "val": "sub",
      "offset": 13
    },
    {
      "val": "35",
      "offset": 18
    }
  ],
  "location": "MimicTestSteps.i_ask_for(int,String,int)"
});
formatter.result({
  "duration": 44724443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-30",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 108748,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Learning to calculate division and divide by zero.",
  "description": "",
  "id": "the-mock-should-learn-to-respond-to-requests-that-i-have-not-defined-so-that-i-do-not-have-to-add-code-for-that-manually;learning-to-calculate-division-and-divide-by-zero.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I \"div\" values 6 and 2 with answer 3",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I \"div\" values 10 and 2 with answer 5",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I \"div\" values 10 and 5 with answer 2",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I ask for 30 \"div\" 0",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I get response \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 8391630,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 134396161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "div",
      "offset": 3
    },
    {
      "val": "6",
      "offset": 15
    },
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 345114745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "div",
      "offset": 3
    },
    {
      "val": "10",
      "offset": 15
    },
    {
      "val": "2",
      "offset": 22
    },
    {
      "val": "5",
      "offset": 36
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 203343028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "div",
      "offset": 3
    },
    {
      "val": "10",
      "offset": 15
    },
    {
      "val": "5",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 36
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 94539510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 10
    },
    {
      "val": "div",
      "offset": 14
    },
    {
      "val": "0",
      "offset": 19
    }
  ],
  "location": "MimicTestSteps.i_ask_for(int,String,int)"
});
formatter.result({
  "duration": 50253752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 100540,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Learning to calculate mulitply with characters that ends the same.",
  "description": "",
  "id": "the-mock-should-learn-to-respond-to-requests-that-i-have-not-defined-so-that-i-do-not-have-to-add-code-for-that-manually;learning-to-calculate-mulitply-with-characters-that-ends-the-same.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 59,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I \"mult\" values 5 and 2 with answer 10",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "I \"mult\" values 5 and 4 with answer 20",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I \"mult\" values 9 and 4 with answer 36",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I ask for 5 \"mult\" 30",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I get response \"150\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 7765818,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 178906803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mult",
      "offset": 3
    },
    {
      "val": "5",
      "offset": 16
    },
    {
      "val": "2",
      "offset": 22
    },
    {
      "val": "10",
      "offset": 36
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 186338990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mult",
      "offset": 3
    },
    {
      "val": "5",
      "offset": 16
    },
    {
      "val": "4",
      "offset": 22
    },
    {
      "val": "20",
      "offset": 36
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 145298836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mult",
      "offset": 3
    },
    {
      "val": "9",
      "offset": 16
    },
    {
      "val": "4",
      "offset": 22
    },
    {
      "val": "36",
      "offset": 36
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 54058690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 10
    },
    {
      "val": "mult",
      "offset": 13
    },
    {
      "val": "30",
      "offset": 19
    }
  ],
  "location": "MimicTestSteps.i_ask_for(int,String,int)"
});
formatter.result({
  "duration": 24700093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 95615,
  "status": "passed"
});
formatter.uri("MimicServiceProject/MimicService/LoadSavedResponses.feature");
formatter.feature({
  "line": 1,
  "name": "Mimic saves responses in a brain file",
  "description": "",
  "id": "mimic-saves-responses-in-a-brain-file",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Add multiple request with multiple responses, then killMimic",
  "description": "and start again to see that they are still there.",
  "id": "mimic-saves-responses-in-a-brain-file;add-multiple-request-with-multiple-responses,-then-killmimic",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "has learned request \"Banana\" and response \"Skids\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "has learned request \"Banana\" and response \"Fruit\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "has learned request \"Banana\" and response \"Yellow\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "has learned request \"Laurel\" and response \"Hardy\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "has learned request \"Laurel\" and response \"Bengt\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "has learned request \"Ful\" and response \"Bil\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "has learned request \"Ful\" and response \"Kul\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I KillMimic",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Start Mimic",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I give request \u003crequest\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I get response \u003cresponse\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "mimic-saves-responses-in-a-brain-file;add-multiple-request-with-multiple-responses,-then-killmimic;",
  "rows": [
    {
      "cells": [
        "request",
        "response"
      ],
      "line": 21,
      "id": "mimic-saves-responses-in-a-brain-file;add-multiple-request-with-multiple-responses,-then-killmimic;;1"
    },
    {
      "cells": [
        "\"Banana\"",
        "\"Yellow\""
      ],
      "line": 22,
      "id": "mimic-saves-responses-in-a-brain-file;add-multiple-request-with-multiple-responses,-then-killmimic;;2"
    },
    {
      "cells": [
        "\"Hardy\"",
        "\"Bengt\""
      ],
      "line": 23,
      "id": "mimic-saves-responses-in-a-brain-file;add-multiple-request-with-multiple-responses,-then-killmimic;;3"
    },
    {
      "cells": [
        "\"Ful\"",
        "\"Kul\""
      ],
      "line": 24,
      "id": "mimic-saves-responses-in-a-brain-file;add-multiple-request-with-multiple-responses,-then-killmimic;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Add multiple request with multiple responses, then killMimic",
  "description": "and start again to see that they are still there.",
  "id": "mimic-saves-responses-in-a-brain-file;add-multiple-request-with-multiple-responses,-then-killmimic;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "has learned request \"Banana\" and response \"Skids\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "has learned request \"Banana\" and response \"Fruit\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "has learned request \"Banana\" and response \"Yellow\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "has learned request \"Laurel\" and response \"Hardy\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "has learned request \"Laurel\" and response \"Bengt\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "has learned request \"Ful\" and response \"Bil\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "has learned request \"Ful\" and response \"Kul\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I KillMimic",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Start Mimic",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I give request \"Banana\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I get response \"Yellow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 8848370,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 165027723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banana",
      "offset": 21
    },
    {
      "val": "Skids",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 224926780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banana",
      "offset": 21
    },
    {
      "val": "Fruit",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 152676035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banana",
      "offset": 21
    },
    {
      "val": "Yellow",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 131790320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laurel",
      "offset": 21
    },
    {
      "val": "Hardy",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 79778549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laurel",
      "offset": 21
    },
    {
      "val": "Bengt",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 115696480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ful",
      "offset": 21
    },
    {
      "val": "Bil",
      "offset": 40
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 77327827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ful",
      "offset": 21
    },
    {
      "val": "Kul",
      "offset": 40
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 85147813,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_KillMimic()"
});
formatter.result({
  "duration": 5011031942,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.start_Mimic()"
});
formatter.result({
  "duration": 5505507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banana",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 730081216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 810068,
  "error_message": "java.lang.Exception\r\n\tat MimicServiceProject.MimicService.MimicTestSteps.i_get_response(MimicTestSteps.java:63)\r\n\tat ✽.Then I get response \"Yellow\"(MimicServiceProject/MimicService/LoadSavedResponses.feature:18)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 23,
  "name": "Add multiple request with multiple responses, then killMimic",
  "description": "and start again to see that they are still there.",
  "id": "mimic-saves-responses-in-a-brain-file;add-multiple-request-with-multiple-responses,-then-killmimic;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "has learned request \"Banana\" and response \"Skids\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "has learned request \"Banana\" and response \"Fruit\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "has learned request \"Banana\" and response \"Yellow\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "has learned request \"Laurel\" and response \"Hardy\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "has learned request \"Laurel\" and response \"Bengt\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "has learned request \"Ful\" and response \"Bil\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "has learned request \"Ful\" and response \"Kul\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I KillMimic",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Start Mimic",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I give request \"Hardy\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I get response \"Bengt\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 9152043,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 42558928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banana",
      "offset": 21
    },
    {
      "val": "Skids",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 93683481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banana",
      "offset": 21
    },
    {
      "val": "Fruit",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 88647437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banana",
      "offset": 21
    },
    {
      "val": "Yellow",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 56123256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laurel",
      "offset": 21
    },
    {
      "val": "Hardy",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 80635809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laurel",
      "offset": 21
    },
    {
      "val": "Bengt",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 122105618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ful",
      "offset": 21
    },
    {
      "val": "Bil",
      "offset": 40
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 110999400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ful",
      "offset": 21
    },
    {
      "val": "Kul",
      "offset": 40
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 103188031,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_KillMimic()"
});
formatter.result({
  "duration": 5052649484,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.start_Mimic()"
});
formatter.result({
  "duration": 5129609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hardy",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 735633915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bengt",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 389030,
  "error_message": "java.lang.Exception\r\n\tat MimicServiceProject.MimicService.MimicTestSteps.i_get_response(MimicTestSteps.java:63)\r\n\tat ✽.Then I get response \"Bengt\"(MimicServiceProject/MimicService/LoadSavedResponses.feature:18)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 24,
  "name": "Add multiple request with multiple responses, then killMimic",
  "description": "and start again to see that they are still there.",
  "id": "mimic-saves-responses-in-a-brain-file;add-multiple-request-with-multiple-responses,-then-killmimic;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "has learned request \"Banana\" and response \"Skids\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "has learned request \"Banana\" and response \"Fruit\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "has learned request \"Banana\" and response \"Yellow\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "has learned request \"Laurel\" and response \"Hardy\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "has learned request \"Laurel\" and response \"Bengt\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "has learned request \"Ful\" and response \"Bil\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "has learned request \"Ful\" and response \"Kul\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I KillMimic",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Start Mimic",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I give request \"Ful\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I get response \"Kul\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 9675263,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 113665975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banana",
      "offset": 21
    },
    {
      "val": "Skids",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 39093775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banana",
      "offset": 21
    },
    {
      "val": "Fruit",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 43257375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banana",
      "offset": 21
    },
    {
      "val": "Yellow",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 30542101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laurel",
      "offset": 21
    },
    {
      "val": "Hardy",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 96535545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laurel",
      "offset": 21
    },
    {
      "val": "Bengt",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 84561806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ful",
      "offset": 21
    },
    {
      "val": "Bil",
      "offset": 40
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 144379200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ful",
      "offset": 21
    },
    {
      "val": "Kul",
      "offset": 40
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 83494847,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_KillMimic()"
});
formatter.result({
  "duration": 5046299439,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.start_Mimic()"
});
formatter.result({
  "duration": 4883388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ful",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 769361298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kul",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 374667,
  "error_message": "java.lang.Exception\r\n\tat MimicServiceProject.MimicService.MimicTestSteps.i_get_response(MimicTestSteps.java:63)\r\n\tat ✽.Then I get response \"Kul\"(MimicServiceProject/MimicService/LoadSavedResponses.feature:18)\r\n",
  "status": "failed"
});
formatter.uri("MimicServiceProject/MimicService/ResponseNoValueParam.feature");
formatter.feature({
  "line": 1,
  "name": "Entering a request with no parameter values",
  "description": "",
  "id": "entering-a-request-with-no-parameter-values",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Entering a request with a ? and a param with no added value",
  "description": "",
  "id": "entering-a-request-with-no-parameter-values;entering-a-request-with-a-?-and-a-param-with-no-added-value",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I give request \"test?param\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I get response Form",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 7451475,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 59558861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test?param",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
