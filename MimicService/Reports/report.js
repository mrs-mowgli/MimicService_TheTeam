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
  "duration": 281177249,
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
  "duration": 304421354,
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
  "duration": 16380277,
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
  "duration": 137063,
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
  "duration": 8521716,
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
  "duration": 133531924,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_get_response_NULL()"
});
formatter.result({
  "duration": 219547,
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
  "duration": 7278710,
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
  "duration": 239286812,
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
  "duration": 173382419,
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
  "duration": 232690136,
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
  "duration": 68977234,
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
  "duration": 101771,
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
  "duration": 17393888,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 187787181,
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
  "duration": 255381472,
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
  "duration": 381777906,
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
  "duration": 145691559,
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
  "duration": 61476515,
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
  "duration": 97257,
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
  "duration": 7181863,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 129394997,
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
  "duration": 235015284,
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
  "duration": 164077309,
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
  "duration": 43796189,
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
  "duration": 29358598,
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
  "duration": 92333,
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
  "duration": 7044800,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 177121698,
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
  "duration": 145843396,
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
  "duration": 219074512,
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
  "duration": 89645454,
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
  "duration": 45085158,
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
  "duration": 104644,
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
  "duration": 7275427,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 162725144,
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
  "duration": 209792792,
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
  "duration": 158657569,
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
  "duration": 64024494,
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
  "duration": 13781412,
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
  "duration": 85767,
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
  "duration": 9622325,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 107260941,
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
  "duration": 172839501,
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
  "duration": 196282224,
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
  "duration": 53780870,
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
  "duration": 33198828,
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
  "duration": 90281,
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
  "duration": 7386226,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 73506884,
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
  "duration": 269874465,
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
  "duration": 191196525,
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
  "duration": 78277830,
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
  "duration": 17115658,
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
  "duration": 87408,
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
  "duration": 6600781,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 124782043,
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
  "duration": 206781507,
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
  "duration": 137466539,
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
  "duration": 95049189,
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
  "duration": 76886270,
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
  "duration": 108337,
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
  "name": "has learned request \"Laurel\" and response \"Hardy\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "has learned request \"Laurel\" and response \"Bengt\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "has learned request \"Ful\" and response \"Bil\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "has learned request \"Ful\" and response \"Kul\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I KillMimic",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Start Mimic",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I give request \u003crequest\u003e",
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
        "\"Fruit\""
      ],
      "line": 22,
      "id": "mimic-saves-responses-in-a-brain-file;add-multiple-request-with-multiple-responses,-then-killmimic;;2"
    },
    {
      "cells": [
        "\"Laurel\"",
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
  "name": "has learned request \"Laurel\" and response \"Hardy\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "has learned request \"Laurel\" and response \"Bengt\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "has learned request \"Ful\" and response \"Bil\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "has learned request \"Ful\" and response \"Kul\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I KillMimic",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Start Mimic",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I give request \"Banana\"",
  "matchedColumns": [
    0
  ],
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
  "name": "I get response \"Fruit\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 7428494,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 147026079,
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
  "duration": 327567380,
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
  "duration": 118210398,
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
  "duration": 58973677,
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
  "duration": 12302443,
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
  "duration": 46300259,
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
  "duration": 89768564,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_KillMimic()"
});
formatter.result({
  "duration": 5032924292,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.start_Mimic()"
});
formatter.result({
  "duration": 19630397,
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
  "duration": 667406835,
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
  "duration": 3941592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fruit",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 91512,
  "status": "passed"
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
  "name": "has learned request \"Laurel\" and response \"Hardy\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "has learned request \"Laurel\" and response \"Bengt\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "has learned request \"Ful\" and response \"Bil\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "has learned request \"Ful\" and response \"Kul\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I KillMimic",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Start Mimic",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I give request \"Laurel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I give request \"Laurel\"",
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
  "duration": 6612271,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 57130300,
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
  "duration": 87657627,
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
  "duration": 43771567,
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
  "duration": 18021752,
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
  "duration": 23769786,
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
  "duration": 30338969,
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
  "duration": 76922382,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_KillMimic()"
});
formatter.result({
  "duration": 5058725403,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.start_Mimic()"
});
formatter.result({
  "duration": 5203475,
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
  "duration": 677904066,
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
  "duration": 3923535,
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
  "duration": 72224,
  "status": "passed"
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
  "name": "has learned request \"Laurel\" and response \"Hardy\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "has learned request \"Laurel\" and response \"Bengt\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "has learned request \"Ful\" and response \"Bil\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "has learned request \"Ful\" and response \"Kul\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I KillMimic",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Start Mimic",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I give request \"Ful\"",
  "matchedColumns": [
    0
  ],
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
  "duration": 7994393,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 225579266,
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
  "duration": 25541348,
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
  "duration": 21951033,
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
  "duration": 37504417,
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
  "duration": 11014296,
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
  "duration": 58986398,
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
  "duration": 75569397,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_KillMimic()"
});
formatter.result({
  "duration": 5049988243,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.start_Mimic()"
});
formatter.result({
  "duration": 5267903,
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
  "duration": 679341588,
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
  "duration": 4853431,
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
  "duration": 101361,
  "status": "passed"
});
formatter.uri("MimicServiceProject/MimicService/UnlearnAllResponses.feature");
formatter.feature({
  "line": 1,
  "name": "As a Tester I would like the mock to unlearn all responses so that I can rerun all the tests without restarting the service",
  "description": "",
  "id": "as-a-tester-i-would-like-the-mock-to-unlearn-all-responses-so-that-i-can-rerun-all-the-tests-without-restarting-the-service",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Learning multiple req/resp and verify it unlearn all",
  "description": "",
  "id": "as-a-tester-i-would-like-the-mock-to-unlearn-all-responses-so-that-i-can-rerun-all-the-tests-without-restarting-the-service;learning-multiple-req/resp-and-verify-it-unlearn-all",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "has learned request \"Banana\" and response \"Skids\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "has learned request \"Laurel\" and response \"Hardy\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "has learned request \"Ful\" and response \"Bil\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I use unlearnAll command",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I give request \u003crequest\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I get response Form",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "as-a-tester-i-would-like-the-mock-to-unlearn-all-responses-so-that-i-can-rerun-all-the-tests-without-restarting-the-service;learning-multiple-req/resp-and-verify-it-unlearn-all;",
  "rows": [
    {
      "cells": [
        "request"
      ],
      "line": 16,
      "id": "as-a-tester-i-would-like-the-mock-to-unlearn-all-responses-so-that-i-can-rerun-all-the-tests-without-restarting-the-service;learning-multiple-req/resp-and-verify-it-unlearn-all;;1"
    },
    {
      "cells": [
        "\"Banana\""
      ],
      "line": 17,
      "id": "as-a-tester-i-would-like-the-mock-to-unlearn-all-responses-so-that-i-can-rerun-all-the-tests-without-restarting-the-service;learning-multiple-req/resp-and-verify-it-unlearn-all;;2"
    },
    {
      "cells": [
        "\"Laurel\""
      ],
      "line": 18,
      "id": "as-a-tester-i-would-like-the-mock-to-unlearn-all-responses-so-that-i-can-rerun-all-the-tests-without-restarting-the-service;learning-multiple-req/resp-and-verify-it-unlearn-all;;3"
    },
    {
      "cells": [
        "\"Ful\""
      ],
      "line": 19,
      "id": "as-a-tester-i-would-like-the-mock-to-unlearn-all-responses-so-that-i-can-rerun-all-the-tests-without-restarting-the-service;learning-multiple-req/resp-and-verify-it-unlearn-all;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Learning multiple req/resp and verify it unlearn all",
  "description": "",
  "id": "as-a-tester-i-would-like-the-mock-to-unlearn-all-responses-so-that-i-can-rerun-all-the-tests-without-restarting-the-service;learning-multiple-req/resp-and-verify-it-unlearn-all;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "has learned request \"Banana\" and response \"Skids\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "has learned request \"Laurel\" and response \"Hardy\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "has learned request \"Ful\" and response \"Bil\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I use unlearnAll command",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I give request \"Banana\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I get response Form",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 7794133,
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
  "duration": 67191309,
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
  "duration": 193280787,
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
  "duration": 65389381,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_use_unlearnAll_command()"
});
formatter.result({
  "duration": 9843924,
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
  "duration": 6988579,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_get_response_NULL()"
});
formatter.result({
  "duration": 103413,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Learning multiple req/resp and verify it unlearn all",
  "description": "",
  "id": "as-a-tester-i-would-like-the-mock-to-unlearn-all-responses-so-that-i-can-rerun-all-the-tests-without-restarting-the-service;learning-multiple-req/resp-and-verify-it-unlearn-all;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "has learned request \"Banana\" and response \"Skids\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "has learned request \"Laurel\" and response \"Hardy\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "has learned request \"Ful\" and response \"Bil\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I use unlearnAll command",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I give request \"Laurel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I get response Form",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 6978730,
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
  "duration": 126950431,
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
  "duration": 282305763,
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
  "duration": 179421405,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_use_unlearnAll_command()"
});
formatter.result({
  "duration": 60384524,
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
  "duration": 19837633,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_get_response_NULL()"
});
formatter.result({
  "duration": 77149,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Learning multiple req/resp and verify it unlearn all",
  "description": "",
  "id": "as-a-tester-i-would-like-the-mock-to-unlearn-all-responses-so-that-i-can-rerun-all-the-tests-without-restarting-the-service;learning-multiple-req/resp-and-verify-it-unlearn-all;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "has learned request \"Banana\" and response \"Skids\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "has learned request \"Laurel\" and response \"Hardy\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "has learned request \"Ful\" and response \"Bil\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I use unlearnAll command",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I give request \"Ful\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I get response Form",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 8574244,
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
  "duration": 231959268,
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
  "duration": 201478723,
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
  "duration": 111612080,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_use_unlearnAll_command()"
});
formatter.result({
  "duration": 51790993,
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
  "duration": 55570488,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_get_response_NULL()"
});
formatter.result({
  "duration": 76328,
  "status": "passed"
});
formatter.uri("MimicServiceProject/MimicService/UnlearnResponse.feature");
formatter.feature({
  "line": 1,
  "name": "As a Tester I would like to unlearn the previously learned response so that I do not have to perform the request again",
  "description": "",
  "id": "as-a-tester-i-would-like-to-unlearn-the-previously-learned-response-so-that-i-do-not-have-to-perform-the-request-again",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Learn a response then unlearn it. TF:2.02",
  "description": "",
  "id": "as-a-tester-i-would-like-to-unlearn-the-previously-learned-response-so-that-i-do-not-have-to-perform-the-request-again;learn-a-response-then-unlearn-it.-tf:2.02",
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
  "name": "has learned request \"Number\" and response \"One\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I use unlearn command",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I get response Form",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 7961563,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 222409988,
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
  "duration": 213863240,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_use_unlearn_command()"
});
formatter.result({
  "duration": 67914789,
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
  "duration": 30949598,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_get_response_NULL()"
});
formatter.result({
  "duration": 492443,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Unlearn in the middle of a sequence",
  "description": "",
  "id": "as-a-tester-i-would-like-to-unlearn-the-previously-learned-response-so-that-i-do-not-have-to-perform-the-request-again;unlearn-in-the-middle-of-a-sequence",
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
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "has learned request \"Number\" and response \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "has learned request \"Number\" and response \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "has learned request \"Number\" and response \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "has learned request \"Number\" and response \"4\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I resetState",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I use unlearn command",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I get response \"2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 7577458,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 86988727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 21
    },
    {
      "val": "1",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 156829377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 21
    },
    {
      "val": "2",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 170803662,
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
  "duration": 78991461,
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
  "duration": 80832786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 21
    },
    {
      "val": "3",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 140625969,
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
  "duration": 55814247,
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
  "duration": 97955420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 21
    },
    {
      "val": "4",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 100647439,
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
  "duration": 12220369,
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
  "duration": 4379455,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_resetState()"
});
formatter.result({
  "duration": 3675672,
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
  "duration": 4032694,
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
  "duration": 3646126,
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
  "duration": 4452090,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_use_unlearn_command()"
});
formatter.result({
  "duration": 3792217,
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
  "duration": 3501266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 85767,
  "status": "passed"
});
});