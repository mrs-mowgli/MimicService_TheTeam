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
  "duration": 286514915,
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
  "duration": 918624297,
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
  "duration": 4130361,
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
  "duration": 128856,
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
  "duration": 7024281,
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
  "duration": 57198011,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_get_response_NULL()"
});
formatter.result({
  "duration": 193284,
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
  "duration": 6981193,
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
  "duration": 172164444,
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
  "duration": 58129958,
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
  "duration": 66553596,
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
  "duration": 52264147,
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
  "duration": 91922,
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
  "duration": 7140826,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 274480032,
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
  "duration": 270213018,
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
  "duration": 295562724,
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
  "duration": 149583086,
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
  "duration": 55053423,
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
  "duration": 90691,
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
  "duration": 7591821,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 223124031,
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
  "duration": 171808655,
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
  "duration": 63370366,
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
  "duration": 11737366,
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
  "duration": 61937769,
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
  "duration": 94385,
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
  "duration": 7974695,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 80749892,
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
  "duration": 215314303,
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
  "duration": 166070059,
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
  "duration": 174079636,
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
  "duration": 129584178,
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
  "duration": 105876,
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
  "duration": 22642093,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 499326790,
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
  "duration": 383006549,
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
  "duration": 46058552,
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
  "duration": 29655295,
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
  "duration": 23586352,
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
  "duration": 96026,
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
  "duration": 7206074,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 69760217,
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
  "duration": 243411017,
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
  "duration": 197317583,
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
  "duration": 75913286,
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
  "duration": 64670004,
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
  "duration": 93153,
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
  "duration": 7123590,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 81849269,
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
  "duration": 200131482,
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
  "duration": 192653744,
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
  "duration": 163388710,
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
  "duration": 81808642,
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
  "duration": 99720,
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
  "duration": 26286167,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 264833905,
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
  "duration": 152891479,
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
  "duration": 50786000,
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
  "duration": 18860135,
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
  "duration": 11684018,
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
  "duration": 98899,
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
  "duration": 35368037,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 94034347,
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
  "duration": 202781644,
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
  "duration": 233718109,
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
  "duration": 129366272,
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
  "duration": 74765074,
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
  "duration": 120530623,
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
  "duration": 114902006,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_KillMimic()"
});
formatter.result({
  "duration": 5025202794,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.start_Mimic()"
});
formatter.result({
  "duration": 3285002,
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
  "duration": 664461619,
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
  "duration": 3974011,
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
  "duration": 92333,
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
  "duration": 7435471,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 65807957,
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
  "duration": 83134955,
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
  "duration": 53578969,
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
  "duration": 12968472,
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
  "duration": 20492582,
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
  "duration": 19415775,
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
  "duration": 46794343,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_KillMimic()"
});
formatter.result({
  "duration": 5055221675,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.start_Mimic()"
});
formatter.result({
  "duration": 3185282,
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
  "duration": 657418461,
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
  "duration": 3894399,
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
  "duration": 70583,
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
  "duration": 7918474,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 226245705,
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
  "duration": 25050136,
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
  "duration": 33594013,
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
  "duration": 33123320,
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
  "duration": 21836540,
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
  "duration": 38111352,
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
  "duration": 73552845,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_KillMimic()"
});
formatter.result({
  "duration": 5022247319,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.start_Mimic()"
});
formatter.result({
  "duration": 3211135,
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
  "duration": 659635272,
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
  "duration": 4764791,
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
  "duration": 102182,
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
  "duration": 7020998,
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
  "duration": 98486437,
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
  "duration": 92206975,
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
  "duration": 43004178,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_use_unlearnAll_command()"
});
formatter.result({
  "duration": 83180095,
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
  "duration": 28454555,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_get_response_NULL()"
});
formatter.result({
  "duration": 100951,
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
  "duration": 7056700,
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
  "duration": 310576473,
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
  "duration": 175321001,
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
  "duration": 108742782,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_use_unlearnAll_command()"
});
formatter.result({
  "duration": 13020589,
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
  "duration": 32771635,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_get_response_NULL()"
});
formatter.result({
  "duration": 84125,
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
  "duration": 10228440,
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
  "duration": 252462520,
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
  "duration": 120028332,
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
  "duration": 137931898,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_use_unlearnAll_command()"
});
formatter.result({
  "duration": 80355116,
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
  "duration": 24995968,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_get_response_NULL()"
});
formatter.result({
  "duration": 81253,
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
  "duration": 14341976,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 175659555,
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
  "duration": 277069458,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_use_unlearn_command()"
});
formatter.result({
  "duration": 65139056,
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
  "duration": 37684568,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_get_response_NULL()"
});
formatter.result({
  "duration": 577389,
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
  "duration": 7195404,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 227777201,
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
  "duration": 157119096,
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
  "duration": 172305201,
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
  "duration": 58730328,
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
  "duration": 88222705,
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
  "duration": 134078946,
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
  "duration": 81353133,
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
  "duration": 67603730,
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
  "duration": 86307514,
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
  "duration": 3954723,
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
  "duration": 4215307,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_resetState()"
});
formatter.result({
  "duration": 3651461,
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
  "duration": 3910403,
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
  "duration": 3556666,
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
  "duration": 4633063,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_use_unlearn_command()"
});
formatter.result({
  "duration": 3958007,
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
  "duration": 3562821,
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
  "duration": 85357,
  "status": "passed"
});
});